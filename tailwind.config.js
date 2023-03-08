/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      400: ["thicccboi", "sans-serif"],
      500: ["thicccboi-medium", "sans-serif"],
      600: ["thicccboi-semibold", "sans-serif"],
      700: ["thicccboi-bold", "sans-serif"],
      800: ["thicccboi-extrabold", "sans-serif"],
    },
    fontSize: {
      bs: "1.063rem",
    },
    extend: {
      backgroundColor: {
        bg: "#090a1a",
        darkBlue: "#001aff",
      },
      textColor: {
        lightGray: "#9ca0d2",
      },
      borderColor: {
        darkBlue: "#001aff",
      },
    },
  },
  plugins: [],
};
