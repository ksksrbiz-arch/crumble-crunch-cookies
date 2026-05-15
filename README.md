# Crumble Crunch Cookies — Next.js Website

A modern, conversion-focused website for **Crumble Crunch Cookies**, a family-owned bakery in Tacoma, Washington whose biggest promise is simple: **every cookie is 100% organic and certified free from the top 9 allergens & PGPR**.

## Features

- **Next.js 15 (App Router)** with TypeScript strict mode
- **Tailwind CSS** with a custom warm bakery palette (cocoa, cream, gold, sage, emerald)
- **Framer Motion** micro-interactions on product cards, nav, cart drawer, filters
- **Reusable `AllergenBadge` component** with custom inline SVGs, accessible tooltips, and per-allergen descriptions
- **Trust bar** prominently surfaced on Home, Menu, Shop, Story, and Visit pages
- **Dedicated `/safety` page** explaining the four layers of allergen protection and every badge in detail
- **Fully functional shopping cart** with `localStorage` persistence, quantity controls, and a complete checkout flow built on React Hook Form + Zod
- **Cart drawer** with cart → checkout → success states and clear allergen messaging during checkout
- **SEO**: per-page metadata, Open Graph image, structured data (Bakery JSON-LD), sitemap, robots
- **Accessibility**: skip link, focus rings, keyboard nav, ARIA labels on every interactive control, WCAG AA contrast
- **Excellent Core Web Vitals**: static rendering for every page, image optimization, font preconnect

## Pages

| Path       | Purpose                                                              |
| ---------- | -------------------------------------------------------------------- |
| `/`        | Hero, "Why We're Different", featured products, story teaser, social proof, CTA |
| `/menu`    | Full menu categorized into Cookies & Milkshakes with badges on every item |
| `/shop`    | Filterable, sortable product grid with cart integration              |
| `/story`   | The cousins' story, timeline, values                                 |
| `/safety`  | Detailed safety standards, all allergen badges with descriptions     |
| `/visit`   | Storefront, hours, map embed, contact form                           |

## Getting Started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

```bash
npm run build   # production build
npm start       # serve production build
npm run lint    # ESLint
```

## Project structure

```
app/
├── layout.tsx          Root layout, metadata, JSON-LD, CartProvider
├── page.tsx            Home
├── menu/page.tsx
├── shop/page.tsx       Client component with filters + cart
├── story/page.tsx
├── safety/page.tsx     Allergen Promise & badge reference
├── visit/page.tsx      Locations, hours, contact form
├── not-found.tsx
├── robots.ts
├── sitemap.ts
└── globals.css         Tailwind + brand tokens

components/
├── AllergenBadge.tsx   Per-allergen badge with custom SVG + tooltip
├── badges.tsx          Compact OrganicBadge / AllergenSafeBadge (footer)
├── cart-context.tsx    Cart state + localStorage persistence
├── cart-drawer.tsx     Cart UI with multi-step checkout flow
├── contact-form.tsx    Zod-validated contact form
├── footer.tsx
├── logo.tsx
├── navbar.tsx          Sticky nav, mobile menu, animated active pill
├── product-card.tsx    Product card with hover + Add to cart
└── trust-bar.tsx       Reusable "100% Organic & Allergen-Safe" trust signal

lib/
├── allergens.ts        Server-safe allergen types & descriptions
├── cn.ts               clsx + tailwind-merge helper
├── products.ts         Products, categories, helpers, currency formatting
└── site.ts             Brand constants (address, hours, social, etc.)

public/
├── favicon.svg
├── apple-icon.svg
└── og.svg              Open Graph card
```

## Tech stack

- Next.js 15 · React 18 · TypeScript (strict)
- Tailwind CSS 3 · tailwind-merge · clsx
- Framer Motion 11
- React Hook Form 7 + Zod 3 (+ `@hookform/resolvers`)
- Lucide React icons + custom inline SVGs

## Customization

- **Products** live in `lib/products.ts`. Add new items, swap images, or change pricing there.
- **Brand info** (address, hours, social, allergen list) lives in `lib/site.ts`.
- **Allergen descriptions** live in `lib/allergens.ts`. Add a new allergen by extending the type union and the `ICONS` map in `components/AllergenBadge.tsx`.
- **Colors** are defined in `tailwind.config.ts` under `theme.extend.colors`.
- **Fonts**: in production, swap the `<link>` tag in `app/layout.tsx` for `next/font/google` for self-hosted fonts and best LCP.

## Deployment

- Includes a `netlify.toml` configured for the `@netlify/plugin-nextjs` adapter.
- Set `NEXT_PUBLIC_SITE_URL` (optional) to override `SITE.url` if needed.

Built with care for Crumble Crunch Cookies. 🍪
