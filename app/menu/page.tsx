import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import {
  AllergenBadges,
} from '@/components/AllergenBadge';
import { DEFAULT_ALLERGENS } from '@/lib/allergens';
import { TrustBar } from '@/components/trust-bar';
import { PRODUCTS, formatPrice, productsByCategory } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Our full menu of 100% organic, top-9-allergen-free cookies and milkshakes in Tacoma, WA.',
};

function MenuItem({
  product,
}: {
  product: (typeof PRODUCTS)[number];
}) {
  return (
    <article className="group flex gap-4 rounded-3xl border border-cream-200 bg-white p-4 shadow-soft transition-transform hover:-translate-y-0.5 sm:p-5">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-cream-100 sm:h-28 sm:w-28">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="120px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg leading-tight text-cocoa-700">
            {product.name}
          </h3>
          <p className="shrink-0 font-display text-lg text-cocoa-700">
            {formatPrice(product.price)}
          </p>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-cocoa-500">
          {product.shortDescription}
        </p>
        <AllergenBadges
          allergens={DEFAULT_ALLERGENS}
          size="sm"
          className="mt-3"
        />
      </div>
    </article>
  );
}

export default function MenuPage() {
  const cookies = productsByCategory('cookie');
  const milkshakes = productsByCategory('milkshake');

  return (
    <>
      <section className="container-tight pt-12 pb-6 sm:pt-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our menu</span>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] text-cocoa-700 sm:text-5xl md:text-6xl text-balance">
            Cookies &amp; milkshakes — safe for everyone at the table.
          </h1>
          <p className="mt-5 leading-relaxed text-cocoa-500 text-pretty">
            Every single item on this menu is 100% organic and certified free
            from the top 9 allergens &amp; PGPR. No asterisks. No fine print.
          </p>
        </div>
      </section>

      <section className="container-tight">
        <TrustBar />
      </section>

      <section id="cookies" className="section">
        <div className="container-tight">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Fresh-baked</span>
              <h2 className="mt-2 font-display text-3xl text-cocoa-700 sm:text-4xl">
                Cookies
              </h2>
            </div>
            <Link
              href="/shop?cat=cookie"
              className="hidden text-sm font-semibold text-cocoa-600 hover:text-cocoa-700 sm:inline-flex sm:items-center sm:gap-1"
            >
              Shop cookies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {cookies.map((p) => (
              <MenuItem key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section id="milkshakes" className="section pt-0">
        <div className="container-tight">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Hand-blended</span>
              <h2 className="mt-2 font-display text-3xl text-cocoa-700 sm:text-4xl">
                Milkshakes
              </h2>
              <p className="mt-1 text-sm text-cocoa-400">
                All shakes blended with organic oat milk.
              </p>
            </div>
            <Link
              href="/shop?cat=milkshake"
              className="hidden text-sm font-semibold text-cocoa-600 hover:text-cocoa-700 sm:inline-flex sm:items-center sm:gap-1"
            >
              Shop shakes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {milkshakes.map((p) => (
              <MenuItem key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section id="allergens" className="section pt-0">
        <div className="container-tight">
          <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50/60 p-8 sm:p-12">
            <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-100 text-emerald-700">
                <ShieldCheck className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-display text-2xl text-cocoa-700 sm:text-3xl">
                  The same promise behind every item
                </h2>
                <p className="mt-3 leading-relaxed text-cocoa-600">
                  Our entire kitchen is dedicated and allergen-controlled. The
                  badges you see on each item aren&apos;t per-recipe choices —
                  they&apos;re facility-wide guarantees.
                </p>
                <div className="mt-5">
                  <AllergenBadges allergens={DEFAULT_ALLERGENS} size="md" />
                </div>
                <Link
                  href="/safety"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  See our full safety standards
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
