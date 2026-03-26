/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef5ff",
          100: "#dae9ff",
          200: "#bdd8ff",
          300: "#90beff",
          400: "#5f9dfc",
          500: "#3f7ff0",
          600: "#2f65d8",
          700: "#2852b0",
          800: "#27478e",
          900: "#243d72"
        }
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px -25px rgba(29, 78, 216, 0.45)",
      },
      keyframes: {
        floatIn: {
          "0%": { opacity: "0", transform: "translateY(26px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floatIn: "floatIn 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};
