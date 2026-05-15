// Server-safe allergen data (no React, no 'use client')
// Used by both server pages and the client AllergenBadge component.

export type AllergenType =
  | 'egg-free'
  | 'nut-free'
  | 'peanut-free'
  | 'shellfish-free'
  | 'fish-free'
  | 'dairy-free'
  | 'gluten-free'
  | 'soy-free'
  | 'sesame-free'
  | 'pgpr-free';

export interface AllergenInfo {
  label: string;
  description: string;
}

export const ALLERGEN_INFO: Record<AllergenType, AllergenInfo> = {
  'egg-free': {
    label: 'Egg-Free',
    description:
      'No eggs or egg-derived ingredients are used in our recipes or kitchen.',
  },
  'nut-free': {
    label: 'Tree Nut-Free',
    description:
      'Free from almonds, cashews, walnuts, pecans, and all other tree nuts.',
  },
  'peanut-free': {
    label: 'Peanut-Free',
    description:
      'Produced in a peanut-free facility with strict cross-contact protocols.',
  },
  'shellfish-free': {
    label: 'Shellfish-Free',
    description:
      'No shellfish or shellfish-derived ingredients ever enter our kitchen.',
  },
  'fish-free': {
    label: 'Fish-Free',
    description: 'No fish or fish-derived ingredients are used in any recipe.',
  },
  'dairy-free': {
    label: 'Dairy-Free',
    description:
      'Made without milk, butter, whey, casein, or any dairy-derived ingredients.',
  },
  'gluten-free': {
    label: 'Gluten-Free',
    description:
      'Crafted with certified gluten-free flours and dedicated equipment.',
  },
  'soy-free': {
    label: 'Soy-Free',
    description: 'No soy or soy-derived emulsifiers, lecithins, or oils.',
  },
  'sesame-free': {
    label: 'Sesame-Free',
    description: 'No sesame seeds, tahini, or sesame-derived ingredients.',
  },
  'pgpr-free': {
    label: 'PGPR-Free',
    description:
      'Contains zero Polyglycerol Polyricinoleate (PGPR) — just real ingredients.',
  },
};

export function getAllergenInfo(type: AllergenType): AllergenInfo {
  return ALLERGEN_INFO[type];
}

// Curated default set used across product cards & trust bars
export const DEFAULT_ALLERGENS: AllergenType[] = [
  'egg-free',
  'nut-free',
  'peanut-free',
  'shellfish-free',
  'pgpr-free',
];

export const ALL_ALLERGENS: AllergenType[] = [
  'egg-free',
  'nut-free',
  'peanut-free',
  'shellfish-free',
  'fish-free',
  'dairy-free',
  'soy-free',
  'sesame-free',
  'gluten-free',
  'pgpr-free',
];
