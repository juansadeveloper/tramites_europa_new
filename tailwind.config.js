/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // background: "#C4C4C4",
        background: "#EBEBEB", 
        // background: "#FAFAFA",
        container: "#FAFAFA", 
        blue: "#135AE4",
        darkwhite: "white"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};


