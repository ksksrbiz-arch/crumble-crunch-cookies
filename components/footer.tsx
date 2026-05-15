import Link from 'next/link';
import { Instagram, Facebook, MapPin, Mail, Phone } from 'lucide-react';
import { SITE } from '@/lib/site';
import { Logo } from './logo';
import { OrganicBadge, AllergenSafeBadge } from './badges';

const footerLinks = {
  shop: [
    { href: '/menu', label: 'Full Menu' },
    { href: '/shop', label: 'Shop Online' },
    { href: '/shop?cat=cookie', label: 'Cookies' },
    { href: '/shop?cat=milkshake', label: 'Milkshakes' },
  ],
  company: [
    { href: '/story', label: 'Our Story' },
    { href: '/visit', label: 'Visit Us' },
    { href: '/safety', label: 'Safety Standards' },
    { href: '/safety#badges', label: 'Allergen Promise' },
  ],
};

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-cocoa-700 text-cream-100">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />
      <div className="container-wide grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="[&_*]:!text-cream-50">
            <Logo />
          </div>
          <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-cream-200/90">
            {SITE.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <OrganicBadge />
            <AllergenSafeBadge />
          </div>
          <div className="mt-6 flex gap-3">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="grid h-10 w-10 place-items-center rounded-full bg-cocoa-600 transition-colors hover:bg-gold-300 hover:text-cocoa-700"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noreferrer noopener"
              className="grid h-10 w-10 place-items-center rounded-full bg-cocoa-600 transition-colors hover:bg-gold-300 hover:text-cocoa-700"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-100">
            Shop
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.shop.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-cream-200/90 transition-colors hover:text-cream-50"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-gold-100">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.company.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-cream-200/90 transition-colors hover:text-cream-50"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-100">
            Visit Us
          </h3>
          <address className="mt-4 space-y-3 text-sm not-italic text-cream-200/90">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-200" />
              <span>{SITE.address.full}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold-200" />
              <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-cream-50">
                {SITE.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold-200" />
              <a href={`mailto:${SITE.email}`} className="hover:text-cream-50">
                {SITE.email}
              </a>
            </div>
          </address>
        </div>
      </div>

      <div className="border-t border-cocoa-600/60">
        <div className="container-wide flex flex-col items-start justify-between gap-2 py-6 text-xs text-cream-200/70 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Baked with care in Tacoma, WA.
          </p>
          <p>
            100% Organic · Free from the top 9 allergens &amp; PGPR
          </p>
        </div>
      </div>
    </footer>
  );
}
