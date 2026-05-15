export const SITE = {
  name: 'Crumble Crunch Cookies',
  shortName: 'Crumble Crunch',
  tagline: 'Organic. Allergen-Safe. Irresistibly Delicious.',
  description:
    'Premium organic cookies and milkshakes baked in Tacoma, WA — 100% free from eggs, tree nuts, peanuts, shellfish, PGPR and the top 9 allergens. Cozy bakery treats everyone can enjoy.',
  url: 'https://crumblecrunchcookies.com',
  email: 'hello@crumblecrunchcookies.com',
  phone: '(253) 555-0188',
  address: {
    street: '1147 Pacific Avenue',
    city: 'Tacoma',
    region: 'WA',
    postalCode: '98402',
    country: 'US',
    full: '1147 Pacific Avenue, Tacoma, WA 98402',
  },
  hours: [
    { day: 'Monday', hours: 'Closed' },
    { day: 'Tuesday – Thursday', hours: '10:00 AM – 7:00 PM' },
    { day: 'Friday', hours: '10:00 AM – 9:00 PM' },
    { day: 'Saturday', hours: '9:00 AM – 9:00 PM' },
    { day: 'Sunday', hours: '10:00 AM – 5:00 PM' },
  ],
  social: {
    instagram: 'https://instagram.com/crumblecrunchcookies',
    facebook: 'https://facebook.com/crumblecrunchcookies',
    tiktok: 'https://tiktok.com/@crumblecrunchcookies',
  },
  // Top-9 allergens (US FDA FASTER Act) + PGPR
  allergensFree: [
    'Eggs',
    'Tree Nuts',
    'Peanuts',
    'Shellfish',
    'Fish',
    'Milk',
    'Soy',
    'Wheat',
    'Sesame',
    'PGPR',
  ] as const,
} as const;

export type AllergenName = (typeof SITE.allergensFree)[number];
