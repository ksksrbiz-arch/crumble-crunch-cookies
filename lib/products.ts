export type ProductCategory = 'cookie' | 'milkshake';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  longDescription: string;
  price: number; // USD
  image: string;
  imageAlt: string;
  bestseller?: boolean;
  featured?: boolean;
  highlights: string[]; // taste descriptors
}

// Image placeholders use Unsplash to feel premium without bundling binary assets.
const cookieImg = (q: string) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=900&q=80`;

export const PRODUCTS: Product[] = [
  {
    id: 'classic-chocolate-chunk',
    slug: 'classic-chocolate-chunk',
    name: 'Classic Chocolate Chunk',
    category: 'cookie',
    shortDescription:
      'Golden-edged, fudgy-centered, packed with organic dark chocolate chunks.',
    longDescription:
      'Our signature cookie — buttery-soft, crinkly edges, and pools of melty organic dark chocolate in every bite. Made without eggs, dairy, nuts or the top 9 allergens, but you would never guess.',
    price: 4.5,
    image: cookieImg('photo-1499636136210-6f4ee915583e'),
    imageAlt:
      'A stack of organic chocolate chunk cookies on parchment paper, warm bakery lighting',
    bestseller: true,
    featured: true,
    highlights: ['Fudgy center', 'Dark chocolate chunks', 'Soft & crinkly'],
  },
  {
    id: 'snickerdoodle-cloud',
    slug: 'snickerdoodle-cloud',
    name: 'Snickerdoodle Cloud',
    category: 'cookie',
    shortDescription:
      'Pillowy cinnamon-sugar cookie rolled in Saigon cinnamon and organic cane sugar.',
    longDescription:
      'A nostalgic favorite made airy and soft. Notes of warm Saigon cinnamon and vanilla bean, with crinkly tops and a tender middle.',
    price: 4.25,
    image: cookieImg('photo-1568051243851-f9b136146e97'),
    imageAlt: 'Cinnamon-sugar snickerdoodle cookies dusted with cinnamon',
    featured: true,
    highlights: ['Saigon cinnamon', 'Pillowy soft', 'Vanilla bean'],
  },
  {
    id: 'birthday-confetti',
    slug: 'birthday-confetti',
    name: 'Birthday Confetti',
    category: 'cookie',
    shortDescription:
      'Buttery sugar cookie with rainbow organic sprinkles and a touch of almond-free marzipan flavor.',
    longDescription:
      'Bright, cheerful, and just the right amount of chewy. Made with organic rainbow sprinkles colored from real fruits and vegetables — perfect for parties and lunchboxes alike.',
    price: 4.5,
    image: cookieImg('photo-1558961363-fa8fdf82db35'),
    imageAlt: 'Sugar cookies with colorful sprinkles',
    highlights: ['Veggie-dyed sprinkles', 'Chewy edges', 'Celebration ready'],
  },
  {
    id: 'double-cocoa-crinkle',
    slug: 'double-cocoa-crinkle',
    name: 'Double Cocoa Crinkle',
    category: 'cookie',
    shortDescription:
      'Deep-dark organic cocoa cookie rolled in powdered sugar — fudgy as a brownie.',
    longDescription:
      'For the chocolate lovers. Rich organic cacao, a glossy crackled top, and a fudge-brownie interior. Dusted with powdered organic cane sugar.',
    price: 4.75,
    image: cookieImg('photo-1606312619070-d48b4c652a52'),
    imageAlt: 'Chocolate crinkle cookies dusted with powdered sugar',
    bestseller: true,
    highlights: ['Brownie-fudgy', 'Organic cacao', 'Powdered sugar finish'],
  },
  {
    id: 'oatmeal-maple',
    slug: 'oatmeal-maple',
    name: 'Oatmeal Maple',
    category: 'cookie',
    shortDescription:
      'Chewy organic rolled oats, golden raisins, and pure Vermont maple syrup.',
    longDescription:
      'Cozy, caramelly, and naturally sweet. Toasted organic oats meet pure maple and plump golden raisins. Tastes like a warm hug.',
    price: 4.25,
    image: cookieImg('photo-1490567674331-72de84996b27'),
    imageAlt: 'Oatmeal cookies with raisins on cooling rack',
    highlights: ['Pure maple', 'Toasted oats', 'Naturally sweet'],
  },
  {
    id: 'lemon-shortbread',
    slug: 'lemon-shortbread',
    name: 'Lemon Glow Shortbread',
    category: 'cookie',
    shortDescription:
      'Buttery-crisp shortbread with organic Meyer lemon zest and a bright glaze.',
    longDescription:
      'A sunbeam in cookie form. Crumbly, melt-in-your-mouth shortbread bursting with Meyer lemon zest, finished with a delicate lemon glaze.',
    price: 4.5,
    image: cookieImg('photo-1486427944299-d1955d23e34d'),
    imageAlt: 'Lemon glazed shortbread cookies',
    featured: true,
    highlights: ['Meyer lemon', 'Buttery-crisp', 'Bright glaze'],
  },
  // Milkshakes
  {
    id: 'cookies-and-cream-shake',
    slug: 'cookies-and-cream-shake',
    name: 'Cookies & Cream Shake',
    category: 'milkshake',
    shortDescription:
      'Organic oat-milk shake blended with crushed Double Cocoa Crinkles.',
    longDescription:
      'Thick, creamy, and loaded with crumbles of our Double Cocoa Crinkle cookie. Made with organic oat milk and our house vanilla bean base.',
    price: 8.5,
    image: cookieImg('photo-1572490122747-3968b75cc699'),
    imageAlt: 'Cookies and cream milkshake in a glass with whipped topping',
    bestseller: true,
    featured: true,
    highlights: ['Oat milk', 'Cookie chunks', 'House vanilla bean'],
  },
  {
    id: 'salted-maple-shake',
    slug: 'salted-maple-shake',
    name: 'Salted Maple Shake',
    category: 'milkshake',
    shortDescription:
      'Creamy oat-milk shake with pure maple and a pinch of flaky sea salt.',
    longDescription:
      'Sweet, salty, and impossibly smooth. Pure Vermont maple swirled with vanilla bean and finished with a kiss of Maldon sea salt.',
    price: 8.5,
    image: cookieImg('photo-1568901346375-23c9450c58cd'),
    imageAlt: 'Caramel-colored milkshake with whipped topping',
    highlights: ['Vermont maple', 'Maldon salt', 'Velvety smooth'],
  },
  {
    id: 'strawberry-shortbread-shake',
    slug: 'strawberry-shortbread-shake',
    name: 'Strawberry Shortbread Shake',
    category: 'milkshake',
    shortDescription:
      'Organic strawberries blended with Lemon Glow Shortbread crumbles.',
    longDescription:
      'A bright, summery shake of organic strawberries and oat milk, blended with crumbles of our Lemon Glow Shortbread. Tastes like sunshine.',
    price: 8.75,
    image: cookieImg('photo-1572490122747-3968b75cc699'),
    imageAlt: 'Pink strawberry milkshake',
    featured: true,
    highlights: ['Organic berries', 'Shortbread crumble', 'Bright & fresh'],
  },
  {
    id: 'cocoa-dream-shake',
    slug: 'cocoa-dream-shake',
    name: 'Cocoa Dream Shake',
    category: 'milkshake',
    shortDescription:
      'Deep, dreamy organic cocoa shake with house-made coconut whip.',
    longDescription:
      'Like drinking a chocolate cloud. Rich organic cacao, oat milk, and a generous swirl of our coconut whipped topping.',
    price: 8.75,
    image: cookieImg('photo-1623065422902-30a2d299bbe4'),
    imageAlt: 'Chocolate milkshake with coconut whipped cream',
    highlights: ['Organic cacao', 'Coconut whip', 'Decadent'],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function featuredProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}
