/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["SatoshiVariable", "sans-serif"],
        forum: ["Forum", "serif"],
      },
    },
  },
  plugins: [],
};
