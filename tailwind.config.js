/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  experimental: {
    optimizeUniversalDefaults: true
  },
  theme: {
    fontFamily: {
      'sans': ['"Poppins", "Helvetica Neue", sans-serif'],
      'serif': ['"Frank Ruhl Libre", "Georgia", serif'],
    },
    fontSize: {
      'h1-desktop': ['3.938rem', {lineHeight: '120%', letterSpacing: '0%'}],
      'h2-desktop': ['2.75rem', {lineHeight: '120%', letterSpacing: '0%'}],
      'title-33-desktop': ['2.063rem', {lineHeight: '150%', letterSpacing: '0%'}],
      'title-33-serif-desktop': ['2.063rem', {lineHeight: '120%', letterSpacing: '0%'}],
      'title-33-light-desktop': ['2.063rem', {lineHeight: '120%', letterSpacing: '0%'}],
      'body-22-desktop': ['1.375rem', {lineHeight: '150%', letterSpacing: '0%'}],
      'body-18-desktop': ['1.125rem', {lineHeight: '150%', letterSpacing: '0%'}],
      'body-16-desktop': ['1rem', {lineHeight: '150%', letterSpacing: '0%'}],
      'body-14-desktop': ['0.875rem', {lineHeight: '150%', letterSpacing: '0%'}],
      'body-12-desktop': ['0.75rem', {lineHeight: '150%', letterSpacing: '0%'}],
      'button-14': ['0.875rem', {lineHeight: '150%', letterSpacing: '5%'},],
      'tab-14': ['0.875rem', {lineHeight: 'Auto', letterSpacing: '5%',}],
      'link-18-desktop': ['1.125rem', {lineHeight: '150%', letterSpacing: '0%'}],
      'link-14': ['0.875rem', {lineHeight: 'Auto', letterSpacing: '5%',}],
      'h1-mobile': ['2.75rem', {lineHeight: '120%', letterSpacing: '0%'}],
      'h2-mobile': ['2.063rem', {lineHeight: '120%', letterSpacing: '0%'}],
      'title-22-mobile': ['1.375rem', {lineHeight: '130%', letterSpacing: '0%'}],
      'title-22-serif-mobile': ['1.375rem', {lineHeight: '120%', letterSpacing: '0%'}],
      'title-22-light-mobile': ['1.375rem', {lineHeight: '130%', letterSpacing: '0%'}],
      'body-18-mobile': ['1.125rem', {lineHeight: '150%', letterSpacing: '0%'}],
      'body-16-mobile': ['1rem', {lineHeight: '150%', letterSpacing: '0%'}],
      'body-14-mobile': ['0.875rem', {lineHeight: '150%', letterSpacing: '0%'}],
      'body-12-mobile': ['0.75rem', {lineHeight: '150%', letterSpacing: '0%'}],
      'body-10-mobile': ['0.625rem', {lineHeight: '150%', letterSpacing: '0%'}],
      'link-16-mobile': ['1rem', {lineHeight: '150%', letterSpacing: '0%'}],
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      spacing: {},
      screens: {},
      dropShadow: {
        'strong': '0mm 0.2mm 1mm rgba(0, 0, 0, 1)'
      },
      gridTemplateCols: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      zIndex: {
        'navigation': '100'
      },
      colors: {
        'white': '#F7F7FF',
        'eggShell': '#F4F1DE',
        'cinereous': '#8A716A',
        'candyCotton': '#DAC4F7',
        'imperial': '#FB3640',
        'darkPurple': '#331832',
        'fuchsia': '#F038FF',
        'licorice': '#230C0F',
        'black': '#1E1E1E',
      },
      keyframes: {
        spin: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          }
        }
      },
      animation: {
        spin: 'spin 9s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
    },
  },
};
