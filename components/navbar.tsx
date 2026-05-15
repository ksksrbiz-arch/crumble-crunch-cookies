'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './logo';
import { useCart } from './cart-context';
import { cn } from '@/lib/cn';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/shop', label: 'Shop' },
  { href: '/story', label: 'Our Story' },
  { href: '/safety', label: 'Safety' },
  { href: '/visit', label: 'Visit Us' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount, open, isHydrated } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-cream-50/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(67,44,22,0.06)]'
          : 'bg-transparent',
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between sm:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                      active
                        ? 'text-cocoa-700'
                        : 'text-cocoa-400 hover:text-cocoa-700',
                    )}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-cream-200/80"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={open}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-cocoa-700 text-cream-50 shadow-soft transition-transform hover:scale-105 active:scale-95"
            aria-label={`Open cart${isHydrated && itemCount > 0 ? `, ${itemCount} items` : ''}`}
          >
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            {isHydrated && itemCount > 0 && (
              <motion.span
                key={itemCount}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold-300 px-1 text-[11px] font-bold text-cocoa-700 ring-2 ring-cream-50"
                aria-hidden="true"
              >
                {itemCount}
              </motion.span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cocoa-200 bg-white/70 text-cocoa-700 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <nav
              aria-label="Mobile"
              className="container-wide pb-4"
            >
              <ul className="flex flex-col gap-1 rounded-3xl border border-cream-200 bg-white/95 p-2 shadow-soft">
                {NAV_LINKS.map((link) => {
                  const active =
                    link.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          'block rounded-2xl px-4 py-3 text-base font-medium',
                          active
                            ? 'bg-cream-200 text-cocoa-700'
                            : 'text-cocoa-500 hover:bg-cream-100',
                        )}
                        aria-current={active ? 'page' : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
