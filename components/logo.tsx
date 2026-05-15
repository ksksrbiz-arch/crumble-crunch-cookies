import Link from 'next/link';
import { Cookie } from 'lucide-react';
import { cn } from '@/lib/cn';

interface LogoProps {
  className?: string;
  textClassName?: string;
  showText?: boolean;
}

export function Logo({ className, textClassName, showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Crumble Crunch Cookies — home"
      className={cn('group inline-flex items-center gap-2.5', className)}
    >
      <span
        aria-hidden="true"
        className="relative grid h-10 w-10 place-items-center rounded-full bg-cocoa-700 text-cream-50 shadow-soft transition-transform group-hover:rotate-[-6deg]"
      >
        <Cookie className="h-5 w-5" />
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-gold-300 ring-2 ring-cream-50" />
      </span>
      {showText && (
        <span
          className={cn(
            'flex flex-col leading-none',
            textClassName,
          )}
        >
          <span className="font-display text-lg text-cocoa-700 sm:text-xl">
            Crumble Crunch
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cocoa-300">
            Cookies · Tacoma
          </span>
        </span>
      )}
    </Link>
  );
}
