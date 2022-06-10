module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        redHat: ["Red Hat Mono", "sans-serif"],
      },
      colors: {
        oxfordBlue: "#031B39",
        xanadu: "#787B65",
        gold: "#b5a642",
        LightGray: "#C9CBC9",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-animation-delay"),
  ],
};
