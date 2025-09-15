module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // Extend Tailwind styles here
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"), // Opcional: Para ocultar barras de rolagem
  ],
};
