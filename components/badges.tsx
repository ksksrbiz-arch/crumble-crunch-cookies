import { Leaf, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/cn';

interface BadgeProps {
  className?: string;
  size?: 'sm' | 'md';
}

export function OrganicBadge({ className, size = 'sm' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full bg-sage-100 font-semibold text-sage-400',
        size === 'sm' ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs',
        className,
      )}
      aria-label="100% organic ingredients"
    >
      <Leaf className="h-3 w-3" aria-hidden="true" />
      100% Organic
    </span>
  );
}

export function AllergenSafeBadge({ className, size = 'sm' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full bg-gold-100 font-semibold text-cocoa-600',
        size === 'sm' ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs',
        className,
      )}
      aria-label="Free from top 9 allergens and PGPR"
    >
      <ShieldCheck className="h-3 w-3" aria-hidden="true" />
      Allergen-Safe
    </span>
  );
}

export function ProductBadges({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-wrap items-center gap-1.5', className)}>
      <OrganicBadge />
      <AllergenSafeBadge />
    </div>
  );
}
