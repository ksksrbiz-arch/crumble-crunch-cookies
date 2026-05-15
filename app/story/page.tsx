import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Quote, Heart, Leaf, ShieldCheck, ArrowRight } from 'lucide-react';
import { TrustBar } from '@/components/trust-bar';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'How two cousins built Tacoma\'s warmest organic, top-9-allergen-free bakery — for the people other bakeries couldn\'t serve.',
};

const TIMELINE = [
  {
    year: '2019',
    title: 'A birthday party with one missing kid',
    body: 'Maya watched her nephew Theo sit out his own cousin\'s birthday cake — again. That night, the idea for Crumble Crunch was scribbled on a napkin.',
  },
  {
    year: '2021',
    title: 'A thousand test batches in a tiny rental kitchen',
    body: 'Maya and her cousin Jordan rented a commissary kitchen and started baking. Not "allergen-friendly" cookies — actually great cookies, that happened to be safe.',
  },
  {
    year: '2023',
    title: 'A dedicated, certified facility',
    body: 'We signed the lease on our Pacific Avenue space and built it from scratch to be organic-only and allergen-controlled — no shared anything.',
  },
  {
    year: '2024',
    title: 'Doors open in Tacoma',
    body: 'The first batch of Classic Chocolate Chunks came out of the oven at 6:42am. Theo was the first customer. He ate two before paying.',
  },
];

const VALUES = [
  {
    icon: Leaf,
    title: 'Organic, always',
    body: 'We don\'t cut corners on ingredients, ever. Organic flour, organic sugar, organic everything.',
  },
  {
    icon: ShieldCheck,
    title: 'Truly safe, not "friendly"',
    body: 'There\'s a difference between "may contain" and "we do not allow this in the building." We are the second one.',
  },
  {
    icon: Heart,
    title: 'Joyful, not clinical',
    body: 'Allergy-safe shouldn\'t feel like a medical aisle. Our shop smells like a bakery — because it is one.',
  },
];

export default function StoryPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-wide grid items-center gap-10 pt-12 pb-12 sm:pt-20 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="eyebrow">Our story</span>
            <h1 className="mt-3 font-display text-4xl leading-[1.02] text-cocoa-700 sm:text-5xl md:text-6xl text-balance">
              Two cousins who couldn&apos;t find a bakery they trusted — so they built one.
            </h1>
            <p className="mt-5 text-pretty leading-relaxed text-cocoa-500">
              Crumble Crunch Cookies is a family-owned bakery in Tacoma,
              Washington, built around one stubborn idea: people with severe
              food allergies deserve cookies that taste{' '}
              <em className="text-cocoa-700">incredible</em>, not just{' '}
              <em>acceptable</em>.
            </p>
            <p className="mt-4 leading-relaxed text-cocoa-500">
              Every ingredient is 100% organic. Every batch is baked in a
              dedicated kitchen that has never seen the top 9 allergens or
              PGPR. And every recipe gets tested by our pickiest critics — the
              cousins, nieces, and nephews who inspired the bakery in the
              first place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-primary">
                Taste it yourself
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/safety" className="btn-ghost">
                <ShieldCheck className="h-4 w-4" />
                Our safety standards
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-6 grid-rows-6 gap-3 sm:gap-4">
              <div className="relative col-span-4 row-span-4 overflow-hidden rounded-3xl bg-cream-100 shadow-warm">
                <Image
                  src="https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=1100&q=85"
                  alt="Two cousins laughing in a warm bakery kitchen, shaping cookie dough"
                  fill
                  sizes="(min-width: 1024px) 30vw, 60vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative col-span-2 row-span-3 overflow-hidden rounded-3xl bg-cream-100 shadow-warm">
                <Image
                  src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=700&q=85"
                  alt="Tray of fresh-baked chocolate cookies cooling"
                  fill
                  sizes="(min-width: 1024px) 15vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-3 row-span-2 overflow-hidden rounded-3xl bg-cream-100 shadow-warm">
                <Image
                  src="https://images.unsplash.com/photo-1490567674331-72de84996b27?auto=format&fit=crop&w=900&q=85"
                  alt="Organic ingredients on a wooden countertop"
                  fill
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-3 row-span-3 overflow-hidden rounded-3xl bg-cream-100 shadow-warm">
                <Image
                  src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=85"
                  alt="Lemon glazed shortbread cookies on parchment"
                  fill
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-tight">
        <TrustBar />
      </section>

      {/* Quote */}
      <section className="section">
        <div className="container-tight">
          <figure className="relative mx-auto max-w-3xl rounded-[2rem] border border-cream-200 bg-white p-8 text-center shadow-soft sm:p-12">
            <Quote
              className="mx-auto h-10 w-10 text-gold-300"
              aria-hidden="true"
            />
            <blockquote className="mt-5 font-display text-2xl leading-relaxed text-cocoa-700 sm:text-3xl text-balance">
              &ldquo;We didn&apos;t want to make &lsquo;the safe option.&rsquo;
              We wanted to make the cookie people line up for — that also
              happens to be safe for the kid down the block.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm font-semibold uppercase tracking-widest text-cocoa-400">
              — Maya &amp; Jordan, founders
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Timeline */}
      <section className="section pt-0">
        <div className="container-tight">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">The path here</span>
            <h2 className="mt-2 font-display text-3xl text-cocoa-700 sm:text-4xl">
              From a napkin sketch to a dedicated bakery.
            </h2>
          </div>
          <ol className="relative space-y-8 border-l-2 border-dashed border-cream-300 pl-8">
            {TIMELINE.map((t) => (
              <li key={t.year} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.4rem] top-1.5 grid h-6 w-6 place-items-center rounded-full bg-cocoa-700 text-[10px] font-bold text-cream-50"
                >
                  ●
                </span>
                <p className="text-xs font-semibold uppercase tracking-widest text-cocoa-300">
                  {t.year}
                </p>
                <h3 className="mt-1 font-display text-2xl text-cocoa-700">
                  {t.title}
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-cocoa-500">
                  {t.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="section pt-0">
        <div className="container-tight">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">What we believe</span>
            <h2 className="mt-2 font-display text-3xl text-cocoa-700 sm:text-4xl">
              Three things we will never compromise on.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="flex flex-col rounded-3xl border border-cream-200 bg-white p-6 shadow-soft"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-xl text-cocoa-700">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa-500">
                    {v.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
