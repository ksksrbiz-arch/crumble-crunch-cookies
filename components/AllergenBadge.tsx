'use client';

import { useId, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import {
  ALLERGEN_INFO,
  type AllergenType,
} from '@/lib/allergens';

export type { AllergenType } from '@/lib/allergens';

interface AllergenBadgeProps {
  type: AllergenType;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

// Custom, brand-friendly inline SVGs (currentColor so they inherit the badge text color)
function EggIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2C8 2 5 8 5 13a7 7 0 0 0 14 0c0-5-3-11-7-11Z" />
    </svg>
  );
}

function NutIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3c4 0 7 3 7 7 0 5-3 11-7 11s-7-6-7-11c0-4 3-7 7-7Z" />
      <path d="M9 9c1.5 1.5 4.5 1.5 6 0" />
    </svg>
  );
}

function PeanutIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3c3 0 5 2 5 5 0 1.5-.8 2.5-1.5 3.5-.7 1-1.5 2-1.5 3.5 0 3 2 5 2 7" />
      <path d="M12 3c-3 0-5 2-5 5 0 1.5.8 2.5 1.5 3.5.7 1 1.5 2 1.5 3.5 0 3-2 5-2 7" />
      <ellipse cx="12" cy="8" rx="2.5" ry="3" />
      <ellipse cx="12" cy="17" rx="3" ry="3.5" />
    </svg>
  );
}

function ShellfishIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 14c0-5 4-9 9-9s9 4 9 9" />
      <path d="M3 14h18" />
      <path d="M7 14c0-3 2-5 5-5s5 2 5 5" />
      <path d="M12 14v6" />
    </svg>
  );
}

function FishIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 12c3-4 7-5 11-5 4 0 7 2 7 5s-3 5-7 5c-4 0-8-1-11-5Z" />
      <circle cx="17" cy="11" r="1" fill="currentColor" />
      <path d="M3 12c1.5-1 2.5-1 3-2M3 12c1.5 1 2.5 1 3 2" />
    </svg>
  );
}

function MilkIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 3h6v3l2 4v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9l2-4V3Z" />
      <path d="M7 12h10" />
    </svg>
  );
}

function WheatIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22V8" />
      <path d="M12 8c0-2 1.5-4 4-4 0 2-1.5 4-4 4Z" />
      <path d="M12 8c0-2-1.5-4-4-4 0 2 1.5 4 4 4Z" />
      <path d="M12 13c0-2 1.5-3.5 4-3.5 0 2-1.5 3.5-4 3.5Z" />
      <path d="M12 13c0-2-1.5-3.5-4-3.5 0 2 1.5 3.5 4 3.5Z" />
      <path d="M12 18c0-2 1.5-3.5 4-3.5 0 2-1.5 3.5-4 3.5Z" />
      <path d="M12 18c0-2-1.5-3.5-4-3.5 0 2 1.5 3.5 4 3.5Z" />
    </svg>
  );
}

function SoyIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="8" cy="12" r="3" />
      <circle cx="16" cy="9" r="2.5" />
      <circle cx="15" cy="17" r="2.5" />
      <path d="M5 5c2 1 3 3 3 4M19 6c-2 1-3 2-3 3M19 19c-2-1-3-2-3-3" />
    </svg>
  );
}

function SesameIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <ellipse cx="9" cy="10" rx="1.5" ry="2.5" />
      <ellipse cx="15" cy="10" rx="1.5" ry="2.5" />
      <ellipse cx="12" cy="15" rx="1.5" ry="2.5" />
      <ellipse cx="7" cy="15" rx="1.2" ry="2" />
      <ellipse cx="17" cy="15" rx="1.2" ry="2" />
    </svg>
  );
}

function PgprIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

const ICONS: Record<AllergenType, ReactNode> = {
  'egg-free': <EggIcon />,
  'nut-free': <NutIcon />,
  'peanut-free': <PeanutIcon />,
  'shellfish-free': <ShellfishIcon />,
  'fish-free': <FishIcon />,
  'dairy-free': <MilkIcon />,
  'gluten-free': <WheatIcon />,
  'soy-free': <SoyIcon />,
  'sesame-free': <SesameIcon />,
  'pgpr-free': <PgprIcon />,
};

const SIZE_CLS: Record<NonNullable<AllergenBadgeProps['size']>, string> = {
  sm: 'px-2.5 py-1 text-[11px] gap-1.5',
  md: 'px-3 py-1.5 text-sm gap-2',
  lg: 'px-4 py-2 text-base gap-2',
};

export function AllergenBadge({
  type,
  size = 'sm',
  showLabel = true,
  className,
}: AllergenBadgeProps) {
  const data = ALLERGEN_INFO[type];
  const icon = ICONS[type];
  const [open, setOpen] = useState(false);
  const tipId = useId();

  return (
    <span className="relative inline-flex">
      <span
        role="img"
        tabIndex={0}
        aria-label={`Certified ${data.label}: ${data.description}`}
        aria-describedby={open ? tipId : undefined}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className={cn(
          'inline-flex cursor-help items-center rounded-full border border-emerald-200/80 bg-emerald-50 font-semibold text-emerald-800 shadow-[0_1px_0_0_rgba(6,95,70,0.04)] transition-colors hover:bg-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-1 focus-visible:ring-offset-cream-50',
          SIZE_CLS[size],
          className,
        )}
      >
        <span className="text-emerald-700">{icon}</span>
        {showLabel && <span>{data.label}</span>}
      </span>

      {open && (
        <span
          id={tipId}
          role="tooltip"
          className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-56 -translate-x-1/2 rounded-xl bg-cocoa-700 px-3 py-2 text-left text-xs leading-relaxed text-cream-50 shadow-warm"
        >
          <span className="block font-semibold text-cream-50">{data.label}</span>
          <span className="mt-0.5 block text-cream-100/85">{data.description}</span>
          <span
            aria-hidden="true"
            className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-cocoa-700"
          />
        </span>
      )}
    </span>
  );
}

interface AllergenBadgesProps {
  allergens: AllergenType[];
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function AllergenBadges({
  allergens,
  size = 'sm',
  className,
}: AllergenBadgesProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-1.5', className)}>
      {allergens.map((t) => (
        <AllergenBadge key={t} type={t} size={size} />
      ))}
    </div>
  );
}
