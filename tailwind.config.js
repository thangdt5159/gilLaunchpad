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
    keyframes: {
      slide: {
        "0%, 100%": { transform: "translateX(0)" },
        "50%": { transform: "translateX(-50px)" },
      },
    },
    animation: {
      slide: "slide 5s linear infinite",
    },
    extend: {
      boxShadow: {
        common: "0 5px 30px 10px hsla(0,0%,7%,.3)",
      },
      backgroundImage: {
        bgGrad:
          "linear-gradient(151.03deg,rgba(31,8,68,.8) 15.06%,rgba(79,42,138,.25) 95.6%)",
        bgGrad2: "linear-gradient(91.82deg,#f727d2 22.38%,#a52cef 108.71%)",
      },
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
