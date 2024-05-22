/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        "dm-sans": ["DM Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        "solid-heading": "#42446E",
        "solid-heading-dark": "#CCCCCC",
        bluesky: "#13B0F5",
        pink1: "#E70FAA",
        "light-content": "#A7A7A7",
        "dark-content": "#666666",
        "dark-mode": "#191919",
        "badge-green-600": "#018C0F",
        "badge-green-300": "#D7FFE0",
      },
      fontSize: {
        "4.5xl": ["42px", "52px"],
      },
    },
  },
  plugins: [],
};
