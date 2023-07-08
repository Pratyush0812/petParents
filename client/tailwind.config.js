/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports ={
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryBrown':'#3f2305',
        'lund':'#f2ead3',
        'darkCream':'#dfd7bf',
        'teal':'#008080',
        'white':'#ffffff',
      }
    },
    
  },
  plugins: [Myclass],
}
