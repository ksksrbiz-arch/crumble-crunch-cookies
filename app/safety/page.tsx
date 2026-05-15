import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Leaf,
  Sparkles,
  Microscope,
  HeartHandshake,
  ChevronRight,
} from 'lucide-react';
import {
  AllergenBadge,
  AllergenBadges,
} from '@/components/AllergenBadge';
import {
  ALL_ALLERGENS,
  DEFAULT_ALLERGENS,
  getAllergenInfo,
} from '@/lib/allergens';

export const metadata: Metadata = {
  title: 'Our Safety Standards',
  description:
    'Crumble Crunch Cookies is 100% organic and certified free from the top 9 allergens & PGPR. See exactly how we keep every cookie safe.',
  openGraph: {
    title: 'Our Safety Standards · Crumble Crunch Cookies',
    description:
      '100% organic. Certified free from the top 9 allergens & PGPR. See exactly how we keep every cookie safe.',
  },
};

const PROCESS = [
  {
    icon: Leaf,
    title: 'Organic, traceable ingredients',
    body: 'Every flour, sugar, fruit and oil is certified organic — sourced from farms we know by name, with documentation on every shipment.',
  },
  {
    icon: ShieldCheck,
    title: 'Dedicated allergen-safe kitchen',
    body: 'Our facility has never produced eggs, dairy, peanuts, tree nuts, shellfish, fish or sesame. No shared equipment. No cross-contact.',
  },
  {
    icon: Microscope,
    title: 'Third-party testing & audits',
    body: 'Independent labs test our flour and finished cookies for trace allergens. Audits happen quarterly — and we publish results on request.',
  },
  {
    icon: HeartHandshake,
    title: 'Trained, allergy-aware team',
    body: 'Every baker and shift lead is trained in allergen protocols. We treat your trust the way we treat our own families with allergies — seriously.',
  },
];

export default function SafetyPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-tight pt-16 pb-10 sm:pt-24 sm:pb-14">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-800">
              <ShieldCheck className="h-4 w-4" />
              Our Promise
            </span>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] text-cocoa-700 sm:text-5xl md:text-6xl text-balance">
              Our Safety Standards
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-cocoa-400">
              Everyone deserves to enjoy a really good cookie without worry.
              That&apos;s why we go far beyond basic allergen labeling — and why
              the strictest customers in Tacoma keep coming back.
            </p>
          </div>
        </div>
      </section>

      <section className="container-tight">
        <div className="rounded-[2rem] border border-cream-200 bg-white p-8 shadow-soft sm:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-xl">
              <span className="eyebrow">The headline</span>
              <h2 className="mt-2 font-display text-3xl text-cocoa-700 sm:text-4xl">
                100% Organic. Top&nbsp;9 Allergen-Free. PGPR-Free.
              </h2>
              <p className="mt-4 leading-relaxed text-cocoa-500">
                Every cookie we bake is crafted with certified organic
                ingredients in a facility built from the ground up for allergen
                safety. That isn&apos;t a marketing line — it&apos;s how the
                bakery was designed.
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-start gap-3">
              <p className="text-sm font-semibold text-cocoa-600">
                Certified free from:
              </p>
              <AllergenBadges allergens={DEFAULT_ALLERGENS} size="md" />
              <p className="mt-1 text-xs text-cocoa-400">
                Hover any badge for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-tight">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">How we keep it true</span>
            <h2 className="mt-2 font-display text-3xl text-cocoa-700 sm:text-4xl">
              Four layers of protection — on every batch.
            </h2>
          </div>
          <ol className="grid gap-5 sm:grid-cols-2">
            {PROCESS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="relative flex gap-4 rounded-3xl border border-cream-200 bg-white p-6 shadow-soft"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-cocoa-300">
                      Step {idx + 1}
                    </p>
                    <h3 className="mt-1 font-display text-xl text-cocoa-700">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cocoa-500">
                      {step.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section id="badges" className="section pt-0">
        <div className="container-tight">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Reference</span>
            <h2 className="mt-2 font-display text-3xl text-cocoa-700 sm:text-4xl">
              What our badges mean
            </h2>
            <p className="mt-3 leading-relaxed text-cocoa-500">
              You&apos;ll see these on every product. Here&apos;s exactly what
              each one promises.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_ALLERGENS.map((type) => {
              const info = getAllergenInfo(type);
              return (
                <div
                  key={type}
                  className="flex flex-col gap-3 rounded-3xl border border-cream-200 bg-white p-6 shadow-soft"
                >
                  <AllergenBadge type={type} size="md" />
                  <h3 className="font-display text-lg text-cocoa-700">
                    {info.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-cocoa-500">
                    {info.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-tight">
          <div className="relative overflow-hidden rounded-[2rem] bg-cocoa-700 p-8 text-cream-50 shadow-warm sm:p-12">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold-300/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-lg">
                <span className="inline-flex items-center gap-2 rounded-full bg-cream-50/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-100">
                  <Sparkles className="h-3.5 w-3.5" />
                  Severe allergies welcome
                </span>
                <h2 className="mt-3 font-display text-3xl text-cream-50 sm:text-4xl">
                  Have a question we haven&apos;t answered?
                </h2>
                <p className="mt-3 text-cream-100/90">
                  If you or someone you love has a severe allergy, we&apos;d
                  love to walk you through our process before you order.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/visit"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-200 px-6 py-3 text-sm font-semibold text-cocoa-700 hover:bg-gold-300"
                >
                  Visit our shop
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 rounded-full border border-cream-50/30 bg-transparent px-6 py-3 text-sm font-semibold text-cream-50 hover:bg-cream-50/10"
                >
                  Start shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
