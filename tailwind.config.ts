import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './lib/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm bakery palette
        cream: {
          50: '#FBF7F0',
          100: '#F6EFE2',
          200: '#EFE2C9',
          300: '#E5D0A6',
          400: '#D9BC83',
        },
        cocoa: {
          50: '#F5EDE5',
          100: '#E7D4C2',
          200: '#C9A98A',
          300: '#A57E54',
          400: '#7A5836',
          500: '#5A3E22',
          600: '#432C16',
          700: '#2E1D0E',
          800: '#1F1309',
          900: '#120A04',
        },
        gold: {
          50: '#FBF3DD',
          100: '#F4E2A8',
          200: '#E9C76A',
          300: '#D8A93E',
          400: '#B68724',
          500: '#8E6717',
        },
        sage: {
          50: '#EEF3EC',
          100: '#D6E1D1',
          200: '#A8BCA0',
          300: '#7C9772',
          400: '#56724C',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(67, 44, 22, 0.18)',
        warm: '0 20px 50px -20px rgba(67, 44, 22, 0.30)',
      },
      backgroundImage: {
        'paper-grain':
          "radial-gradient(rgba(122,88,54,0.05) 1px, transparent 1px)",
        'warm-fade':
          'linear-gradient(180deg, #FBF7F0 0%, #F6EFE2 60%, #EFE2C9 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
