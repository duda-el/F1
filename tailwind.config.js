/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#E10600",
        "custom-black": "#15151E",
      },
    },
  },
  plugins: [],
};
