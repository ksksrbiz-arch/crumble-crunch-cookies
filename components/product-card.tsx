'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Check, Star, Leaf } from 'lucide-react';
import { useCart } from './cart-context';
import { AllergenBadges } from './AllergenBadge';
import { DEFAULT_ALLERGENS } from '@/lib/allergens';
import { formatPrice, type Product } from '@/lib/products';
import { cn } from '@/lib/cn';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, 1);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-soft"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-100">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={priority}
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-600/95 px-2.5 py-1 text-[11px] font-semibold text-white shadow-soft backdrop-blur">
          <Leaf className="h-3 w-3" aria-hidden="true" />
          100% Organic
        </span>
        {product.bestseller && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-cocoa-700/95 px-2.5 py-1 text-[11px] font-semibold text-cream-50 backdrop-blur">
            <Star className="h-3 w-3 fill-gold-200 text-gold-200" aria-hidden="true" />
            Bestseller
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-cocoa-300">
              {product.category === 'cookie' ? 'Cookie' : 'Milkshake'}
            </p>
            <h3 className="mt-1 font-display text-xl text-cocoa-700">
              {product.name}
            </h3>
          </div>
          <p className="shrink-0 font-display text-xl text-cocoa-700">
            {formatPrice(product.price)}
          </p>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-cocoa-400">
          {product.shortDescription}
        </p>

        <AllergenBadges
          allergens={DEFAULT_ALLERGENS}
          size="sm"
          className="mt-4"
        />

        {product.highlights.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {product.highlights.map((h) => (
              <li
                key={h}
                className="rounded-full bg-cream-100 px-2.5 py-1 text-[11px] font-medium text-cocoa-500"
              >
                {h}
              </li>
            ))}
          </ul>
        )}

        <button
          type="button"
          onClick={handleAdd}
          className={cn(
            'mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98]',
            justAdded
              ? 'bg-sage-300 text-cream-50'
              : 'bg-cocoa-700 text-cream-50 hover:bg-cocoa-600',
          )}
          aria-live="polite"
        >
          {justAdded ? (
            <>
              <Check className="h-4 w-4" aria-hidden="true" />
              Added to cart
            </>
          ) : (
            <>
              <Plus className="h-4 w-4" aria-hidden="true" />
              Add to cart — {formatPrice(product.price)}
            </>
          )}
        </button>
      </div>
    </motion.article>
  );
}
