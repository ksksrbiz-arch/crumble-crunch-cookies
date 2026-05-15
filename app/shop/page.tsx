'use client';

import { useMemo, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, GlassWater, Sparkles } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { TrustBar } from '@/components/trust-bar';
import { PRODUCTS, type ProductCategory } from '@/lib/products';
import { cn } from '@/lib/cn';

type Filter = 'all' | ProductCategory;
type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'name';

const FILTERS: { value: Filter; label: string; icon: React.ElementType }[] = [
  { value: 'all', label: 'All', icon: Sparkles },
  { value: 'cookie', label: 'Cookies', icon: Cookie },
  { value: 'milkshake', label: 'Milkshakes', icon: GlassWater },
];

function ShopContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialFilter = (searchParams.get('cat') as Filter) || 'all';
  const [filter, setFilter] = useState<Filter>(
    FILTERS.some((f) => f.value === initialFilter) ? initialFilter : 'all',
  );
  const [sort, setSort] = useState<SortKey>('featured');

  const updateFilter = (value: Filter) => {
    setFilter(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'all') {
      params.delete('cat');
    } else {
      params.set('cat', value);
    }
    router.replace(`/shop${params.toString() ? `?${params.toString()}` : ''}`, {
      scroll: false,
    });
  };

  const products = useMemo(() => {
    let list = PRODUCTS.filter((p) => filter === 'all' || p.category === filter);
    switch (sort) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case 'name':
        list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        list = [...list].sort((a, b) => {
          const aRank = (a.bestseller ? 0 : 1) + (a.featured ? 0 : 0.5);
          const bRank = (b.bestseller ? 0 : 1) + (b.featured ? 0 : 0.5);
          return aRank - bRank;
        });
    }
    return list;
  }, [filter, sort]);

  return (
    <>
      <section className="container-tight pt-12 pb-6 sm:pt-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Shop online</span>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] text-cocoa-700 sm:text-5xl md:text-6xl text-balance">
            Cozy treats, delivered with care.
          </h1>
          <p className="mt-5 leading-relaxed text-cocoa-500 text-pretty">
            Order for local pickup or delivery around Tacoma. Everything is
            baked the same day it leaves our kitchen.
          </p>
        </div>
      </section>

      <section className="container-tight">
        <TrustBar />
      </section>

      <section className="section">
        <div className="container-tight">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div
              role="tablist"
              aria-label="Filter products by category"
              className="inline-flex w-full max-w-md gap-1 rounded-full border border-cream-200 bg-white p-1 shadow-soft sm:w-auto"
            >
              {FILTERS.map((f) => {
                const Icon = f.icon;
                const active = filter === f.value;
                return (
                  <button
                    key={f.value}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => updateFilter(f.value)}
                    className={cn(
                      'relative inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                      active
                        ? 'text-cream-50'
                        : 'text-cocoa-500 hover:text-cocoa-700',
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="shop-filter-active"
                        className="absolute inset-0 -z-10 rounded-full bg-cocoa-700"
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {f.label}
                  </button>
                );
              })}
            </div>

            <label className="flex items-center gap-3">
              <span className="text-sm text-cocoa-500">Sort:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="rounded-full border border-cream-200 bg-white px-4 py-2 text-sm font-semibold text-cocoa-700 shadow-soft focus:border-cocoa-300"
                aria-label="Sort products"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to high</option>
                <option value="price-desc">Price: High to low</option>
                <option value="name">Name (A–Z)</option>
              </select>
            </label>
          </div>

          <p className="mb-6 text-sm text-cocoa-400">
            Showing <strong className="text-cocoa-700">{products.length}</strong>{' '}
            {products.length === 1 ? 'item' : 'items'}
          </p>

          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {products.map((p, idx) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.25, delay: idx * 0.02 }}
                >
                  <ProductCard product={p} priority={idx < 3} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {products.length === 0 && (
            <div className="mt-12 rounded-3xl border border-cream-200 bg-white p-10 text-center shadow-soft">
              <p className="font-display text-xl text-cocoa-700">
                Nothing matches that filter.
              </p>
              <p className="mt-2 text-sm text-cocoa-400">
                Try a different category — every item is allergen-safe.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="container-tight section">
          <div className="h-32 animate-pulse rounded-3xl bg-cream-200/60" />
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
