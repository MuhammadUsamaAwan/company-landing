/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    colors: {
      dark: 'rgb(6,6,6)',
      darker: 'rgba(6,6,6,0.7)',
      border: 'hsla(0,0%,100%,0.1)',
      body: '#acacac',
      'body-light': '#65676b',
      primary: '#059dff',
      white: '#ffffff',
      'bg-light': '#f5f8fa',
      'bg-light-2': '#d8d8d8',
      tertiary: '#6549d5',
      pink: '#e33fa1',
      secondary: '#fb5343',
      transparent: 'transparent',
      black: '#000000',
      darkest: '#0f0f11',
      'bg-1': '#333333',
      blackest: '#0f0f11',
    },
  },
  darkMode: 'class',
  plugins: [],
};
