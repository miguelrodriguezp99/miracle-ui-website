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
        background: "#09090B",
        pwhite: "#FAFAFA",
        swhite: "#A1A1AA",
        pblack: "#09090B",
        pyellow: "#D1D130",
        pred: "#B91717",
        blurredbg: "#71717a",
      },
    },
  },
  plugins: [],
};
