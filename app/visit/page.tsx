import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Car,
  Coffee,
  Heart,
  ExternalLink,
} from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { TrustBar } from '@/components/trust-bar';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Visit Us in Tacoma',
  description: `Find Crumble Crunch Cookies at ${SITE.address.full}. Open daily for organic, allergen-safe cookies and milkshakes.`,
};

const FEATURES = [
  {
    icon: Heart,
    title: 'Built for allergy families',
    body: 'Color-coded zones, sealed displays, and a team trained to talk through every ingredient with you — no hurry, no judgment.',
  },
  {
    icon: Coffee,
    title: 'A real third place',
    body: 'Cozy booths, paper-grain wallpaper, and a working fireplace. Stay for a shake or your laptop afternoon — we don\'t mind.',
  },
  {
    icon: Car,
    title: 'Easy to get to',
    body: 'On Pacific Avenue with metered street parking out front and the Theater District Link station two blocks north.',
  },
];

export default function VisitPage() {
  const mapsQuery = encodeURIComponent(SITE.address.full);
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

  return (
    <>
      <section className="container-tight pt-12 pb-6 sm:pt-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Visit us</span>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] text-cocoa-700 sm:text-5xl md:text-6xl text-balance">
            A cozy corner of Tacoma, baked into every detail.
          </h1>
          <p className="mt-5 leading-relaxed text-cocoa-500 text-pretty">
            Stop in for a fresh batch, a shake, and a conversation. We love
            meeting allergy families especially — bring questions, we have time.
          </p>
        </div>
      </section>

      <section className="container-tight">
        <TrustBar />
      </section>

      {/* Storefront + key details */}
      <section className="section">
        <div className="container-tight">
          <div className="grid items-stretch gap-6 lg:grid-cols-5">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-warm lg:col-span-3 lg:aspect-auto">
              <Image
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1400&q=85"
                alt={`Crumble Crunch Cookies storefront on ${SITE.address.street}, Tacoma — warm window light at dusk`}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cocoa-900/70 via-cocoa-900/0 to-transparent p-6 text-cream-50">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-100">
                  Our Tacoma shop
                </p>
                <p className="mt-1 font-display text-2xl">
                  {SITE.address.street}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-2">
              <div className="rounded-3xl border border-cream-200 bg-white p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-widest text-cocoa-300">
                  Find us
                </p>
                <p className="mt-2 flex items-start gap-2 text-cocoa-700">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cocoa-400" />
                  <span className="font-display text-lg leading-snug">
                    {SITE.address.full}
                  </span>
                </p>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  Open in Google Maps
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-3xl border border-cream-200 bg-white p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-widest text-cocoa-300">
                  Hours
                </p>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {SITE.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between gap-4 border-b border-cream-100 pb-1.5 last:border-0 last:pb-0"
                    >
                      <span className="text-cocoa-500">{h.day}</span>
                      <span className="font-semibold text-cocoa-700">
                        {h.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-cream-200 bg-white p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-widest text-cocoa-300">
                  Get in touch
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a
                      href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`}
                      className="inline-flex items-center gap-2 text-cocoa-700 hover:text-cocoa-500"
                    >
                      <Phone className="h-4 w-4 text-cocoa-400" />
                      {SITE.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="inline-flex items-center gap-2 text-cocoa-700 hover:text-cocoa-500"
                    >
                      <Mail className="h-4 w-4 text-cocoa-400" />
                      {SITE.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why our space is special */}
      <section className="section pt-0">
        <div className="container-tight">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Inside our shop</span>
            <h2 className="mt-2 font-display text-3xl text-cocoa-700 sm:text-4xl">
              What makes our space special.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="flex flex-col rounded-3xl border border-cream-200 bg-white p-6 shadow-soft"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cocoa-700 text-cream-50">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-xl text-cocoa-700">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa-500">
                    {f.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map + contact form */}
      <section className="section pt-0">
        <div className="container-tight">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-cream-200 bg-white shadow-soft">
              <div className="aspect-[4/3] bg-cream-100">
                <iframe
                  title={`Map of ${SITE.name} in ${SITE.address.city}`}
                  src={mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 p-5">
                <p className="flex items-center gap-2 text-sm text-cocoa-500">
                  <Clock className="h-4 w-4 text-cocoa-400" />
                  Closed Mondays
                </p>
                <Link href="/shop" className="btn-secondary !py-2 !px-4 !text-xs">
                  Order ahead online
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-cream-200 bg-white p-6 shadow-soft sm:p-8">
              <span className="eyebrow">Say hi</span>
              <h2 className="mt-2 font-display text-2xl text-cocoa-700 sm:text-3xl">
                Have a question about allergies, catering, or anything else?
              </h2>
              <p className="mt-2 text-sm text-cocoa-500">
                We read every message — usually with cookie crumbs on the
                keyboard.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
