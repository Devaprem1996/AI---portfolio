import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './App.tsx',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Roboto"', '"Oxygen"', '"Ubuntu"', '"Cantarell"', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif'],
        display: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Roboto"', '"Oxygen"', '"Ubuntu"', '"Cantarell"', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif'],
        mono: ['"Fira Code"', '"Courier New"', 'monospace'],
      },
      colors: {
        brand: {
          dark: '#0a0a0a',
          gray: '#1a1a1a',
          accent: '#ff4d00',
          light: '#f5f5f5'
        }
      },
      spacing: {
        container: '1rem',
      }
    },
  },
  plugins: [],
};

export default config;
