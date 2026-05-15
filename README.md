# Crumble Crunch Cookies - Next.js Website

A beautiful, fully functional website for **Crumble Crunch Cookies**, a family-owned cookies and milkshakes shop in Tacoma, Washington.

## Features

- **Modern, warm design** matching the brand's cozy cookie aesthetic (browns, creams, gold accents)
- **Fully responsive** — works beautifully on mobile, tablet, and desktop
- **Interactive Online Shop** with working cart powered by React Context + localStorage
- **Add to cart**, adjust quantities, remove items
- **Checkout flow** with simulated order placement (form + success state)
- **Multi-page navigation**: Home, Menu, Shop Online, Our Story, Visit Us
- **Product cards** with category tags and nice hover effects
- **Cart modal** accessible from anywhere (persistent across pages)
- **Contact form** with fake submission
- **SVG custom logo** inspired by your provided branding
- **Framer Motion** for smooth cart modal animations
- **Toast notifications** when adding items to cart

## Getting Started

1. **Navigate to the project**
   ```bash
   cd crumble-crunch-cookies
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Netlify

This repo includes a `netlify.toml` configured for Next.js.

1. Go to [Netlify](https://app.netlify.com) and click **Add new site** > **Import an existing project**.
2. Connect your GitHub account and select the `crumble-crunch-cookies` repository.
3. Netlify will auto-detect the settings from `netlify.toml`.
4. Deploy!

(If needed, set Build command: `npm run build` and Publish directory: `.next`)

## Project Structure

```
app/
├── layout.tsx          # Root layout + CartProvider
├── page.tsx            # Beautiful landing page (Hero, Featured, Testimonials, etc.)
├── menu/page.tsx       # Full menu with category filtering
├── shop/page.tsx       # Online store with sorting + filters
├── about/page.tsx      # Our Story
└── locations/page.tsx  # Visit Us + contact form + hours

components/
├── Navbar.tsx          # Sticky nav with mobile menu + cart button
├── Footer.tsx
├── ProductCard.tsx     # Reusable product display + add to cart
├── CartContext.tsx     # Global cart state (Context API)
└── CartModal.tsx       # Full cart drawer + checkout
```

## Customization Tips

- **Replace images**: Currently using `picsum.photos` placeholders. Replace with your actual product photography.
- **Logo**: The SVG logo in Navbar is customizable.
- **Products**: Edit the product arrays in `menu/page.tsx` and `shop/page.tsx`.
- **Address & Hours**: Update in Footer and `/locations` page.
- **Real payments**: For production, integrate Stripe, Square, or similar.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide Icons

Enjoy! This should give your cousins a professional, delightful online home that matches the quality of their cookies. 🍪

Built with care for Crumble Crunch Cookies.