const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'hover-color': '#E9A80A',
      },
    },
  },
};
