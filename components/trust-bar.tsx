import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { AllergenBadges } from './AllergenBadge';
import { DEFAULT_ALLERGENS } from '@/lib/allergens';
import { cn } from '@/lib/cn';

interface TrustBarProps {
  className?: string;
  compact?: boolean;
}

export function TrustBar({ className, compact = false }: TrustBarProps) {
  return (
    <section
      aria-label="Allergen safety certifications"
      className={cn(
        'rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-cream-50 to-emerald-50/40 shadow-soft',
        compact ? 'p-5' : 'p-6 sm:p-8',
        className,
      )}
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-inner">
            <ShieldCheck className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <p className="font-display text-lg leading-tight text-cocoa-700">
              100% Organic &amp; Allergen-Safe
            </p>
            <p className="mt-0.5 text-sm text-cocoa-500">
              Certified free from the top 9 allergens &amp; PGPR.
            </p>
          </div>
        </div>

        <div className="hidden h-12 w-px self-stretch bg-emerald-100 md:block" />

        <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <AllergenBadges allergens={DEFAULT_ALLERGENS} size="sm" />
          <Link
            href="/safety"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
          >
            Our safety standards
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
