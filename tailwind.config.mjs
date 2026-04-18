/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink:    '#0D0D0D',
        paper:  '#FAFAF8',
        accent: '#C0392B',
        muted:  '#6B7280',
        border: '#D1D1CC',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
};
