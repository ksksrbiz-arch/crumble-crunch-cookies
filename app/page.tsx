import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  Leaf,
  ShieldCheck,
  Award,
  Heart,
  Star,
  MapPin,
  Clock,
} from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { TrustBar } from '@/components/trust-bar';
import { AllergenBadges } from '@/components/AllergenBadge';
import { DEFAULT_ALLERGENS } from '@/lib/allergens';
import { featuredProducts } from '@/lib/products';
import { SITE } from '@/lib/site';

const TESTIMONIALS = [
  {
    quote:
      'My daughter has a severe egg and peanut allergy. Crumble Crunch is the first bakery she has been able to walk into without fear — and she keeps asking for more.',
    name: 'Marisol R.',
    role: 'Allergy mom, Tacoma',
  },
  {
    quote:
      'I came in skeptical (allergen-free desserts can be… rough). I left with three cookies and a Cookies & Cream shake. Genuinely incredible.',
    name: 'Devon K.',
    role: 'Customer',
  },
  {
    quote:
      'The Double Cocoa Crinkle tastes like the brownie of my dreams. You would never know it&apos;s organic and free from the top 9.',
    name: 'Priya S.',
    role: 'Customer',
  },
];

const DIFFERENTIATORS = [
  {
    icon: Leaf,
    title: '100% Organic',
    body: 'Every flour, sugar, fruit, and oil is certified organic and traceable to the farm.',
  },
  {
    icon: ShieldCheck,
    title: 'Top 9 + PGPR-Free',
    body: 'Eggs, dairy, peanuts, tree nuts, shellfish, fish, soy, wheat, sesame and PGPR — never.',
  },
  {
    icon: Award,
    title: 'Dedicated Kitchen',
    body: 'No shared equipment. Our facility has never produced a single allergen.',
  },
  {
    icon: Heart,
    title: 'Family-Owned',
    body: 'Built by two cousins who bake the way they wish bakeries baked for their own kids.',
  },
];

export default function HomePage() {
  const featured = featuredProducts().slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-wide grid items-center gap-10 pt-10 pb-16 sm:pt-16 lg:grid-cols-12 lg:gap-12 lg:pt-20 lg:pb-24">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-800">
              <Sparkles className="h-3.5 w-3.5" />
              Tacoma, Washington · Est. 2024
            </span>
            <h1 className="mt-5 font-display text-4xl leading-[1.02] text-cocoa-700 sm:text-5xl md:text-6xl lg:text-[4.25rem] text-balance">
              Organic.{' '}
              <span className="relative inline-block">
                Allergen-Safe.
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-1 h-2 rounded-full bg-gold-200/70"
                />
              </span>{' '}
              Irresistibly delicious.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-cocoa-500">
              Cozy, premium cookies and milkshakes baked in a dedicated kitchen
              that has <strong className="text-cocoa-700">never</strong> seen
              eggs, dairy, peanuts, tree nuts, shellfish, fish, soy, wheat,
              sesame, or PGPR. Every ingredient is certified organic. Every
              bite is the one you remember.
            </p>

            <div className="mt-6">
              <AllergenBadges allergens={DEFAULT_ALLERGENS} size="sm" />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-primary">
                Shop our cookies
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/visit" className="btn-ghost">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Visit us in Tacoma
              </Link>
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-widest text-cocoa-300">
                  Allergens
                </dt>
                <dd className="mt-1 font-display text-2xl text-cocoa-700">0</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-widest text-cocoa-300">
                  Organic
                </dt>
                <dd className="mt-1 font-display text-2xl text-cocoa-700">100%</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-widest text-cocoa-300">
                  Made fresh
                </dt>
                <dd className="mt-1 font-display text-2xl text-cocoa-700">Daily</dd>
              </div>
            </dl>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative mx-auto aspect-square w-full max-w-xl">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-gold-100 via-cream-100 to-emerald-50 shadow-warm" />
              <div className="absolute inset-3 overflow-hidden rounded-[2.25rem] bg-cream-100">
                <Image
                  src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1400&q=85"
                  alt="Warm, organic chocolate chunk cookies stacked on parchment paper in golden bakery light"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-cream-200 bg-white/95 p-3 pr-4 shadow-warm backdrop-blur sm:-left-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-100 text-emerald-700">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-cocoa-300">
                    Certified safe
                  </p>
                  <p className="font-display text-sm text-cocoa-700">
                    Top&nbsp;9 + PGPR-Free
                  </p>
                </div>
              </div>
              <div className="absolute -right-3 top-10 flex items-center gap-3 rounded-2xl border border-cream-200 bg-white/95 p-3 pr-4 shadow-warm backdrop-blur sm:-right-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-100 text-cocoa-700">
                  <Leaf className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-cocoa-300">
                    Ingredients
                  </p>
                  <p className="font-display text-sm text-cocoa-700">
                    100% Organic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="container-tight">
        <TrustBar />
      </section>

      {/* WHY WE'RE DIFFERENT */}
      <section className="section">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why we&apos;re different</span>
            <h2 className="mt-2 font-display text-3xl text-cocoa-700 sm:text-4xl md:text-5xl text-balance">
              A bakery built for the people other bakeries can&apos;t serve.
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-cocoa-500">
              Most &ldquo;allergen-friendly&rdquo; bakeries share an oven with
              everything. We don&apos;t. From day one, our kitchen has been
              dedicated, our ingredients organic, and our recipes proudly
              indulgent.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIATORS.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="group relative flex flex-col rounded-3xl border border-cream-200 bg-white p-6 shadow-soft transition-transform hover:-translate-y-1"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cocoa-700 text-cream-50">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-xl text-cocoa-700">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa-500">
                    {d.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section pt-0">
        <div className="container-tight">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <span className="eyebrow">Most loved</span>
              <h2 className="mt-2 font-display text-3xl text-cocoa-700 sm:text-4xl">
                Fresh from the oven, safe for everyone.
              </h2>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-1 text-sm font-semibold text-cocoa-600 hover:text-cocoa-700"
            >
              Shop all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, idx) => (
              <ProductCard key={p.id} product={p} priority={idx === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* STORY TEASER */}
      <section className="section pt-0">
        <div className="container-tight">
          <div className="grid items-center gap-10 rounded-[2rem] border border-cream-200 bg-white p-6 shadow-soft sm:p-10 lg:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream-100 sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&w=1100&q=85"
                alt="Two bakers shaping cookie dough in a warm bakery kitchen"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="eyebrow">Our story</span>
              <h2 className="mt-2 font-display text-3xl text-cocoa-700 sm:text-4xl">
                Two cousins. One dedicated kitchen. Zero compromises.
              </h2>
              <p className="mt-4 leading-relaxed text-cocoa-500">
                After watching family members miss out on bakery moments for
                years, we built Crumble Crunch the way we wished bakeries
                existed — organic ingredients, a dedicated allergen-safe
                kitchen, and cookies so good no one would ever call them
                &ldquo;the allergy option.&rdquo;
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/story" className="btn-secondary">
                  Read our story
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/safety" className="btn-ghost">
                  <ShieldCheck className="h-4 w-4" />
                  How we keep it safe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section pt-0">
        <div className="container-tight">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="eyebrow">From our regulars</span>
            <h2 className="mt-2 font-display text-3xl text-cocoa-700 sm:text-4xl">
              Loved by allergy families &amp; cookie purists alike.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="relative flex flex-col gap-4 rounded-3xl border border-cream-200 bg-white p-6 shadow-soft"
              >
                <div
                  className="flex gap-0.5 text-gold-300"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-300" />
                  ))}
                </div>
                <blockquote className="text-pretty text-sm leading-relaxed text-cocoa-600">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto">
                  <p className="font-display text-cocoa-700">{t.name}</p>
                  <p className="text-xs text-cocoa-400">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section pt-0">
        <div className="container-tight">
          <div className="relative overflow-hidden rounded-[2rem] bg-cocoa-700 px-6 py-12 text-center shadow-warm sm:px-10 sm:py-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-300/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-cream-50/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-100">
                <Clock className="h-3.5 w-3.5" />
                Baked daily
              </span>
              <h2 className="mt-4 font-display text-3xl text-cream-50 sm:text-4xl md:text-5xl">
                Come for the safety. Stay for the cookies.
              </h2>
              <p className="mt-4 text-cream-100/85">
                Order online for pickup, or come say hi at our cozy shop on
                Pacific Avenue.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-200 px-6 py-3 text-sm font-semibold text-cocoa-700 hover:bg-gold-300"
                >
                  Shop online
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/visit"
                  className="inline-flex items-center gap-2 rounded-full border border-cream-50/30 bg-transparent px-6 py-3 text-sm font-semibold text-cream-50 hover:bg-cream-50/10"
                >
                  <MapPin className="h-4 w-4" />
                  {SITE.address.city}, {SITE.address.region}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
