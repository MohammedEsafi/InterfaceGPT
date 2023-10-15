const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        base: {
          background: 'hsl(var(--color-base-background))',
          foreground: 'hsl(var(--color-base-foreground))',
        },
        neutral: {
          surface: 'hsl(var(--color-neutral-surface))',
          'on-surface': 'hsl(var(--color-neutral-on-surface))',
          'surface-secondary': 'hsl(var(--color-neutral-surface-secondary))',
          'on-surface-secondary': 'hsl(var(--color-neutral-on-surface-secondary))',
        },
        brand: {
          surface: 'hsl(var(--color-brand-surface))',
          'on-surface': 'hsl(var(--color-brand-on-surface))',
          fill: 'hsl(var(--color-brand-fill))',
          'on-fill': 'hsl(var(--color-brand-on-fill))',
        },
        info: {
          surface: 'hsl(var(--color-info-surface))',
          'on-surface': 'hsl(var(--color-info-on-surface))',
          fill: 'hsl(var(--color-info-fill))',
          'on-fill': 'hsl(var(--color-info-on-fill))',
        },
        success: {
          surface: 'hsl(var(--color-success-surface))',
          'on-surface': 'hsl(var(--color-success-on-surface))',
          fill: 'hsl(var(--color-success-fill))',
          'on-fill': 'hsl(var(--color-success-on-fill))',
        },
        caution: {
          surface: 'hsl(var(--color-caution-surface))',
          'on-surface': 'hsl(var(--color-caution-on-surface))',
          fill: 'hsl(var(--color-caution-fill))',
          'on-fill': 'hsl(var(--color-caution-on-fill))',
        },
        warning: {
          surface: 'hsl(var(--color-warning-surface))',
          'on-surface': 'hsl(var(--color-warning-on-surface))',
          fill: 'hsl(var(--color-warning-fill))',
          'on-fill': 'hsl(var(--color-warning-on-fill))',
        },
        critical: {
          surface: 'hsl(var(--color-critical-surface))',
          'on-surface': 'hsl(var(--color-critical-on-surface))',
          fill: 'hsl(var(--color-critical-fill))',
          'on-fill': 'hsl(var(--color-critical-on-fill))',
        },
        inverse: {
          surface: 'hsl(var(--color-inverse-surface))',
          'on-surface': 'hsl(var(--color-inverse-on-surface))',
          fill: 'hsl(var(--color-inverse-fill))',
          'on-fill': 'hsl(var(--color-inverse-on-fill))',
        },
        hairline: {
          surface: 'hsl(var(--color-input-surface))',
          border: 'hsl(var(--color-input-border))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
