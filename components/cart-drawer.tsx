'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ShieldCheck,
  Leaf,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { useCart } from './cart-context';
import { formatPrice } from '@/lib/products';
import { cn } from '@/lib/cn';

const checkoutSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z
    .string()
    .min(7, 'Please enter a valid phone number')
    .max(20, 'Please enter a valid phone number'),
  fulfillment: z.enum(['pickup', 'delivery'], {
    errorMap: () => ({ message: 'Choose pickup or delivery' }),
  }),
  address: z.string().optional(),
  allergyNotes: z.string().max(500).optional(),
  acknowledged: z.literal(true, {
    errorMap: () => ({
      message: 'Please confirm you have reviewed our allergen promise',
    }),
  }),
});

type CheckoutValues = z.infer<typeof checkoutSchema>;

type Step = 'cart' | 'checkout' | 'success';

export function CartDrawer() {
  const {
    items,
    isOpen,
    close,
    removeItem,
    setQuantity,
    subtotal,
    clear,
    isHydrated,
  } = useCart();
  const [step, setStep] = useState<Step>('cart');
  const [orderRef, setOrderRef] = useState<string>('');

  // Lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  // Reset to cart step when drawer reopens after a success
  useEffect(() => {
    if (isOpen && step === 'success' && items.length > 0) {
      setStep('cart');
    }
  }, [isOpen, step, items.length]);

  const tax = subtotal * 0.101; // WA 10.1% rough estimate
  const total = subtotal + tax;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-cocoa-900/40 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />
          <motion.aside
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 320 }}
            className="fixed right-0 top-0 z-50 flex h-dvh w-full max-w-md flex-col bg-cream-50 shadow-warm"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            <header className="flex items-center justify-between border-b border-cream-200 px-5 py-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-cocoa-600" aria-hidden="true" />
                <h2 className="font-display text-xl text-cocoa-700">
                  {step === 'success'
                    ? 'Order placed'
                    : step === 'checkout'
                      ? 'Checkout'
                      : 'Your cart'}
                </h2>
              </div>
              <button
                type="button"
                onClick={close}
                className="grid h-9 w-9 place-items-center rounded-full text-cocoa-500 hover:bg-cream-200"
                aria-label="Close cart"
              >
                <X className="h-4 w-4" />
              </button>
            </header>

            {step === 'cart' && (
              <CartStep
                onCheckout={() => setStep('checkout')}
                items={items}
                isHydrated={isHydrated}
                removeItem={removeItem}
                setQuantity={setQuantity}
                subtotal={subtotal}
                tax={tax}
                total={total}
              />
            )}

            {step === 'checkout' && (
              <CheckoutStep
                onBack={() => setStep('cart')}
                onSuccess={(ref) => {
                  setOrderRef(ref);
                  clear();
                  setStep('success');
                }}
                total={total}
                subtotal={subtotal}
                tax={tax}
                itemsCount={items.length}
              />
            )}

            {step === 'success' && (
              <SuccessStep
                orderRef={orderRef}
                onClose={() => {
                  setStep('cart');
                  close();
                }}
              />
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

interface CartStepProps {
  onCheckout: () => void;
  items: ReturnType<typeof useCart>['items'];
  isHydrated: boolean;
  removeItem: (id: string) => void;
  setQuantity: (id: string, q: number) => void;
  subtotal: number;
  tax: number;
  total: number;
}

function CartStep({
  onCheckout,
  items,
  isHydrated,
  removeItem,
  setQuantity,
  subtotal,
  tax,
  total,
}: CartStepProps) {
  const isEmpty = isHydrated && items.length === 0;

  return (
    <>
      <div className="flex-1 overflow-y-auto px-5 py-4">
        <div className="mb-4 flex items-center gap-2 rounded-2xl bg-sage-50 px-3 py-2.5 text-xs font-medium text-sage-400">
          <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
          Every item is 100% organic and free from the top 9 allergens &amp; PGPR.
        </div>

        {!isHydrated && (
          <div className="space-y-3" aria-hidden="true">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="h-24 animate-pulse rounded-2xl bg-cream-200/70"
              />
            ))}
          </div>
        )}

        {isEmpty && (
          <div className="grid place-items-center py-12 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-cream-200 text-cocoa-400">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h3 className="mt-4 font-display text-xl">Your cart is empty</h3>
            <p className="mt-1 max-w-xs text-sm text-cocoa-400">
              Add a cookie or two — every treat is organic and allergen-safe.
            </p>
          </div>
        )}

        <ul className="space-y-3">
          <AnimatePresence initial={false}>
            {items.map((item) => (
              <motion.li
                key={item.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.2 }}
                className="flex gap-3 rounded-2xl border border-cream-200 bg-white p-3"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-cream-100">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="truncate font-medium text-cocoa-700">
                      {item.name}
                    </p>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="grid h-7 w-7 place-items-center rounded-full text-cocoa-300 hover:bg-cream-100 hover:text-cocoa-600"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <p className="text-xs text-cocoa-400">
                    {formatPrice(item.price)} each
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-cream-200 bg-cream-50">
                      <button
                        type="button"
                        onClick={() => setQuantity(item.id, item.quantity - 1)}
                        className="grid h-8 w-8 place-items-center rounded-full text-cocoa-500 hover:bg-cream-100"
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span
                        className="w-7 text-center text-sm font-semibold tabular-nums"
                        aria-live="polite"
                      >
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(item.id, item.quantity + 1)}
                        className="grid h-8 w-8 place-items-center rounded-full text-cocoa-500 hover:bg-cream-100"
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <p className="font-semibold text-cocoa-700">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>

      {isHydrated && items.length > 0 && (
        <footer className="border-t border-cream-200 bg-white/60 px-5 py-4">
          <dl className="space-y-1.5 text-sm">
            <div className="flex justify-between">
              <dt className="text-cocoa-400">Subtotal</dt>
              <dd className="font-medium tabular-nums">{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-cocoa-400">Tax (WA)</dt>
              <dd className="font-medium tabular-nums">{formatPrice(tax)}</dd>
            </div>
            <div className="flex justify-between border-t border-cream-200 pt-2 text-base">
              <dt className="font-semibold text-cocoa-700">Total</dt>
              <dd className="font-display text-lg text-cocoa-700 tabular-nums">
                {formatPrice(total)}
              </dd>
            </div>
          </dl>
          <button
            type="button"
            onClick={onCheckout}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cocoa-700 px-5 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-cocoa-600"
          >
            <Lock className="h-4 w-4" aria-hidden="true" />
            Checkout
          </button>
        </footer>
      )}
    </>
  );
}

interface CheckoutStepProps {
  onBack: () => void;
  onSuccess: (ref: string) => void;
  subtotal: number;
  tax: number;
  total: number;
  itemsCount: number;
}

function CheckoutStep({
  onBack,
  onSuccess,
  subtotal,
  tax,
  total,
  itemsCount,
}: CheckoutStepProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { fulfillment: 'pickup' },
  });

  const fulfillment = watch('fulfillment');

  const onSubmit = async (_values: CheckoutValues) => {
    // Simulated checkout: pretend to hit an API
    await new Promise((r) => setTimeout(r, 900));
    const ref = `CCC-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
    onSuccess(ref);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-1 flex-col overflow-hidden"
      noValidate
    >
      <div className="flex-1 overflow-y-auto px-5 py-4">
        <div className="mb-4 flex items-start gap-2 rounded-2xl bg-gold-50 px-3 py-2.5 text-xs font-medium text-cocoa-600">
          <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-sage-400" aria-hidden="true" />
          <span>
            Every item in your order is baked in our dedicated allergen-safe kitchen.
            Tell us about any specific concerns below — we read every note.
          </span>
        </div>

        <div className="space-y-4">
          <Field label="Full name" error={errors.name?.message}>
            <input
              type="text"
              autoComplete="name"
              className={inputCls}
              {...register('name')}
              aria-invalid={!!errors.name}
            />
          </Field>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Email" error={errors.email?.message}>
              <input
                type="email"
                autoComplete="email"
                className={inputCls}
                {...register('email')}
                aria-invalid={!!errors.email}
              />
            </Field>
            <Field label="Phone" error={errors.phone?.message}>
              <input
                type="tel"
                autoComplete="tel"
                className={inputCls}
                {...register('phone')}
                aria-invalid={!!errors.phone}
              />
            </Field>
          </div>

          <fieldset>
            <legend className="mb-2 text-sm font-medium text-cocoa-600">
              How would you like your order?
            </legend>
            <div className="grid grid-cols-2 gap-2">
              {(
                [
                  { value: 'pickup', label: 'Store pickup' },
                  { value: 'delivery', label: 'Local delivery' },
                ] as const
              ).map((opt) => (
                <label
                  key={opt.value}
                  className={cn(
                    'cursor-pointer rounded-2xl border px-3 py-3 text-center text-sm font-medium transition-colors',
                    fulfillment === opt.value
                      ? 'border-cocoa-700 bg-cocoa-700 text-cream-50'
                      : 'border-cream-200 bg-white text-cocoa-500 hover:border-cocoa-200',
                  )}
                >
                  <input
                    type="radio"
                    value={opt.value}
                    className="sr-only"
                    {...register('fulfillment')}
                  />
                  {opt.label}
                </label>
              ))}
            </div>
            {errors.fulfillment && (
              <p className="mt-1.5 text-xs text-red-600">
                {errors.fulfillment.message}
              </p>
            )}
          </fieldset>

          {fulfillment === 'delivery' && (
            <Field label="Delivery address" error={errors.address?.message}>
              <input
                type="text"
                autoComplete="street-address"
                className={inputCls}
                placeholder="Street, City, ZIP"
                {...register('address')}
              />
            </Field>
          )}

          <Field
            label="Allergy notes (optional)"
            hint="Tell us about specific sensitivities, cross-contact concerns, or birthday wishes."
            error={errors.allergyNotes?.message}
          >
            <textarea
              rows={3}
              className={cn(inputCls, 'resize-none')}
              {...register('allergyNotes')}
            />
          </Field>

          <label className="flex items-start gap-3 rounded-2xl border border-cream-200 bg-white p-3 text-sm">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-cocoa-300 text-cocoa-700 focus:ring-gold-300"
              {...register('acknowledged')}
            />
            <span className="text-cocoa-500">
              I&apos;ve reviewed Crumble Crunch&apos;s{' '}
              <span className="font-semibold text-cocoa-700">
                100% organic, top-9 allergen-free promise
              </span>{' '}
              and confirm the details above are correct.
            </span>
          </label>
          {errors.acknowledged && (
            <p className="-mt-2 text-xs text-red-600">
              {errors.acknowledged.message}
            </p>
          )}
        </div>
      </div>

      <footer className="border-t border-cream-200 bg-white/70 px-5 py-4">
        <dl className="space-y-1 text-sm">
          <div className="flex justify-between">
            <dt className="text-cocoa-400">
              {itemsCount} item{itemsCount === 1 ? '' : 's'}
            </dt>
            <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-cocoa-400">Tax</dt>
            <dd className="tabular-nums">{formatPrice(tax)}</dd>
          </div>
          <div className="flex justify-between border-t border-cream-200 pt-1.5 text-base">
            <dt className="font-semibold text-cocoa-700">Total</dt>
            <dd className="font-display text-lg text-cocoa-700 tabular-nums">
              {formatPrice(total)}
            </dd>
          </div>
        </dl>
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-cocoa-200 bg-white px-4 py-3 text-sm font-semibold text-cocoa-700 hover:bg-cream-100"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex flex-[2] items-center justify-center gap-2 rounded-full bg-cocoa-700 px-5 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-cocoa-600 disabled:opacity-60"
          >
            {isSubmitting ? 'Placing order…' : 'Place order'}
          </button>
        </div>
      </footer>
    </form>
  );
}

function SuccessStep({
  orderRef,
  onClose,
}: {
  orderRef: string;
  onClose: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="grid h-20 w-20 place-items-center rounded-full bg-sage-100 text-sage-400"
      >
        <CheckCircle2 className="h-10 w-10" />
      </motion.div>
      <h3 className="mt-5 font-display text-2xl text-cocoa-700">
        Order placed!
      </h3>
      <p className="mt-2 max-w-xs text-pretty text-sm text-cocoa-400">
        Thanks for choosing Crumble Crunch. We&apos;ll email your confirmation
        shortly and get baking with care.
      </p>
      <p className="mt-4 rounded-full bg-cream-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cocoa-500">
        Ref: {orderRef}
      </p>
      <button
        type="button"
        onClick={onClose}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-cocoa-700 px-6 py-3 text-sm font-semibold text-cream-50 hover:bg-cocoa-600"
      >
        Keep browsing
      </button>
    </div>
  );
}

const inputCls =
  'block w-full rounded-2xl border border-cream-200 bg-white px-4 py-2.5 text-sm text-cocoa-700 placeholder:text-cocoa-300 focus:border-cocoa-300 focus:outline-none focus:ring-2 focus:ring-gold-300/60';

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-cocoa-600">
        {label}
      </span>
      {children}
      {hint && !error && (
        <span className="mt-1 block text-xs text-cocoa-400">{hint}</span>
      )}
      {error && (
        <span className="mt-1 block text-xs text-red-600" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}
