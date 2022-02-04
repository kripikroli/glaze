module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        niveau: "'niveau-grotesk', sans-serif",
        ivy: "'ivypresto-display', serif",
        gordita: "'Gordita', sans-serif",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
