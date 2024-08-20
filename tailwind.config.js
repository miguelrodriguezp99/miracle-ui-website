/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist"],
      },
      colors: {
        background: "#09090b",
        pwhite: "#FAFAFA",
        swhite: "#A1A1AA",
      },
    },
  },
  plugins: [],
};
