/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Dancing: ["Dancing Script"],
        Pacifico: ["Pacifico"],
        Rochester: ["Rochester"],
        Nunito: ["Nunito"],
      },
    },
  },
  plugins: [],

  corePlugins: {
    preflight: false, // <== disable this!
  },
};
