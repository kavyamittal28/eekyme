import { theme } from './data/site.config.js';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: {
        display: theme.fonts.display,
        body: theme.fonts.body,
      },
      borderRadius: {
        card: '22px',
        chip: '999px',
        input: '14px',
      },
      boxShadow: {
        hard: '6px 6px 0 #0e0e0e',
        'hard-hover': '10px 10px 0 #0e0e0e',
        'hard-sm': '4px 4px 0 #0e0e0e',
        'hard-sm-hover': '6px 6px 0 #0e0e0e',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(-12deg)' },
          '50%':      { transform: 'rotate(-6deg)' },
        },
        fadein: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        wobble:  'wobble 4s ease-in-out infinite',
        fadein:  'fadein .2s ease-out',
      },
    },
  },
  plugins: [forms],
};
