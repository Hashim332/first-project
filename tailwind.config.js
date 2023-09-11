/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    theme: {
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
    },
    extend: {
      colors: {
        mirage: {
          50: "#f5f7fa",
          100: "#eaedf4",
          200: "#d1d9e6",
          300: "#a8b9d1",
          400: "#7993b7",
          500: "#58769f",
          600: "#455e84",
          700: "#394c6b",
          800: "#32415a",
          900: "#2d384d",
          950: "#1a202c",
        },
        secondary: {
          50: "#f5f6f6",
          100: "#e6e7e7",
          200: "#cfd2d1",
          300: "#aeb2b1",
          400: "#858b8a",
          500: "#6a706f",
          600: "#5a605f",
          700: "#4d5151",
          800: "#434747",
          900: "#3b3e3e",
          950: "#131414",
        },
      },
    },
  },
  plugins: [],
};
