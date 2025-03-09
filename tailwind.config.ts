import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Primary colors - JavaScript inspired
        'js-yellow': {
          50: '#FFFDF0',
          100: '#FFFBE0',
          200: '#FFF7C2',
          300: '#FFF3A3',
          400: '#FFEA85',
          500: '#F7DF1E', // Official JavaScript yellow
          600: '#E6C60A',
          700: '#CCA800',
          800: '#A38500',
          900: '#7A6400',
          950: '#483B00',
        },

        // Secondary colors - Swiss inspired red
        'swiss-red': {
          50: '#FFF1F1',
          100: '#FFE1E1',
          200: '#FFC7C7',
          300: '#FF9F9F',
          400: '#FF6B6B',
          500: '#FF0000', // Swiss flag red
          600: '#DB0000',
          700: '#B70000',
          800: '#930000',
          900: '#7A0000',
          950: '#4C0000',
        },

        // Accent colors - Alpine-inspired blues
        'alpine-blue': {
          50: '#F0F7FF',
          100: '#E0F0FF',
          200: '#BFE0FF',
          300: '#94CBFF',
          400: '#64B0FF',
          500: '#3990FF', // Alpine-inspired blue
          600: '#2170DB',
          700: '#1858B7',
          800: '#124693',
          900: '#0F3A7A',
          950: '#0A254C',
        },

        // Neutral colors - Modern slate with slight warmth
        'code-slate': {
          50: '#F8F9FC',
          100: '#F1F2F6',
          200: '#E2E5ED',
          300: '#D0D4E0',
          400: '#A8AFBF',
          500: '#8792A8',
          600: '#666F87',
          700: '#4B5066',
          800: '#333848',
          900: '#21242D', // Dark editor background
          950: '#131519',
        },

        // Tertiary colors - Zurich-inspired
        'zurich-teal': {
          50: '#F0FDFC',
          100: '#CCFBF7',
          200: '#99F3EE',
          300: '#5CECE3',
          400: '#2CDACE',
          500: '#0EBCB0',
          600: '#099E94',
          700: '#087F76',
          800: '#06625C',
          900: '#054E49',
          950: '#022E2C',
        },

        // Extended color - Plum (for accessible contrast with yellows)
        'syntax-plum': {
          50: '#F9F5FF',
          100: '#F2E9FE',
          200: '#E5D4FD',
          300: '#CBAEFB',
          400: '#B182F6',
          500: '#9355F1',
          600: '#7A31E0',
          700: '#6521C2',
          800: '#531D9D',
          900: '#371764',
          950: '#230E40',
        },
      },
    },
  },
  plugins: [],
};
export default config;
