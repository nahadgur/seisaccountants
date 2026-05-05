// tailwind.config.js
// SEIS Accountants design system - oxblood primary (#6B1F2E) for buttons,
// links, headings, and italic emphasis. Bone-paper background. Amber kept
// as a secondary/decorative accent for tape strips and editorial flourishes.
// Editorial serif display, modern sans body.
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand (oxblood) - primary for buttons, links, headings, italic
        // emphasis. #6B1F2E anchors the palette: warm, editorial, private-
        // bank, distinctly UK-mag rather than corporate-blue.
        brand: {
          50:  '#FAEEEE',
          100: '#F4D9DC',
          200: '#E9B0B7',
          300: '#D4A8B0',  // dusty pink, used on dark surfaces and tape
          400: '#A1404F',
          500: '#6B1F2E',  // primary
          600: '#571827',
          700: '#421120',
          800: '#2D0A16',
          900: '#18050B',
        },
        // Paper (bone) - warm off-white backgrounds. paper-50 near-white,
        // paper-100 the hero tone, paper-200 inset, paper-300+ for dividers.
        // Bone reads warmer than cream; pairs with teal for that
        // private-bank stationery feel.
        paper: {
          50:  '#FBFAF6',
          100: '#F2EFE5',  // main bone tone
          200: '#EAE5D6',
          300: '#DDD6C1',
          400: '#C3BAA0',
        },
        // Accent (amber) - reserved for CTAs, highlights, tape strips,
        // and italic emphasis. #C9821B is brass-warm, not yellow-gold.
        accent: {
          50:  '#FCF6EC',
          100: '#F7E8CB',
          200: '#EFCF94',
          300: '#E2B05B',
          400: '#D4972F',
          500: '#C9821B',  // primary accent
          600: '#A66913',
          700: '#7E4F0E',
          800: '#553509',
          900: '#2F1D04',
        },
        // Ink - text, borders. ink-900 is body text on bone; ink-500 muted
        // metadata. Avoid pure black; #0F1314 reads warmer on bone.
        ink: {
          100: '#E2DFD8',
          200: '#C2BEB4',
          300: '#9A9588',
          500: '#6B6759',
          700: '#3A372D',
          900: '#0F1314',
        },
      },
      fontFamily: {
        // Body: Inter (clean modern sans for reading)
        // Display: PT Serif (editorial serif for headings + italic accents)
        // Mono: system for metadata/captions where we want that editorial
        // "caption under figure" feel.
        sans:    ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        body:    ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        mono:    ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        'display-sm':  ['28px', { lineHeight: '1.05', letterSpacing: '-0.6px' }],
        'display-md':  ['34px', { lineHeight: '1.0',  letterSpacing: '-0.8px' }],
        'display-lg':  ['44px', { lineHeight: '0.98', letterSpacing: '-1.2px' }],
        'display-xl':  ['52px', { lineHeight: '0.95', letterSpacing: '-1.5px' }],
        'display-2xl': ['68px', { lineHeight: '0.92', letterSpacing: '-2px'   }],
      },
      letterSpacing: {
        tight:  '-0.5px',
        tighter:'-1px',
        widest: '0.2em',
      },
      borderRadius: {
        'xs': '2px',
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
      },
      keyframes: {
        'backdrop-in':  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'backdrop-out': { '0%': { opacity: '1' }, '100%': { opacity: '0' } },
        'modal-in':  { '0%': { opacity: '0', transform: 'scale(0.95) translateY(10px)' }, '100%': { opacity: '1', transform: 'scale(1) translateY(0)' } },
        'modal-out': { '0%': { opacity: '1', transform: 'scale(1) translateY(0)' }, '100%': { opacity: '0', transform: 'scale(0.95) translateY(10px)' } },
      },
      animation: {
        'backdrop-in':  'backdrop-in 0.2s ease-out',
        'backdrop-out': 'backdrop-out 0.2s ease-in',
        'modal-in':     'modal-in 0.3s ease-out',
        'modal-out':    'modal-out 0.2s ease-in',
      },
    },
  },
  plugins: [],
};
