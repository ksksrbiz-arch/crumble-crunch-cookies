'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';
import { cn } from '@/lib/cn';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  topic: z.enum(['general', 'allergy', 'catering', 'press'], {
    errorMap: () => ({ message: 'Choose a topic' }),
  }),
  message: z.string().min(10, 'Please share a few more details'),
});

type ContactValues = z.infer<typeof contactSchema>;

const inputCls =
  'block w-full rounded-2xl border border-cream-200 bg-white px-4 py-2.5 text-sm text-cocoa-700 placeholder:text-cocoa-300 focus:border-cocoa-300 focus:outline-none focus:ring-2 focus:ring-gold-300/60';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { topic: 'general' },
  });

  const onSubmit = async (_values: ContactValues) => {
    // Simulated send — replace with real endpoint when wired up
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3 rounded-3xl border border-emerald-100 bg-emerald-50 p-8 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-emerald-600" aria-hidden="true" />
        <h3 className="font-display text-2xl text-cocoa-700">Message sent!</h3>
        <p className="max-w-sm text-sm text-cocoa-500">
          Thanks for reaching out — we&apos;ll be in touch within one business
          day. (Often sooner; we like email.)
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Your name" error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            className={inputCls}
            {...register('name')}
            aria-invalid={!!errors.name}
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            className={inputCls}
            {...register('email')}
            aria-invalid={!!errors.email}
          />
        </Field>
      </div>

      <Field label="Topic" error={errors.topic?.message}>
        <select
          className={inputCls}
          {...register('topic')}
          aria-invalid={!!errors.topic}
        >
          <option value="general">General question</option>
          <option value="allergy">Allergy / safety question</option>
          <option value="catering">Catering or large order</option>
          <option value="press">Press / partnership</option>
        </select>
      </Field>

      <Field label="Your message" error={errors.message?.message}>
        <textarea
          rows={5}
          className={cn(inputCls, 'resize-none')}
          placeholder="Tell us a bit about what you're looking for…"
          {...register('message')}
          aria-invalid={!!errors.message}
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          'inline-flex w-full items-center justify-center gap-2 rounded-full bg-cocoa-700 px-6 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-cocoa-600 disabled:opacity-60',
        )}
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {isSubmitting ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-cocoa-600">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-xs text-red-600" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}
