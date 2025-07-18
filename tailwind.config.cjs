/* Tailwind CSS Config - tailwind.config.js */
module.exports = {
  content: [
    "./src/**/*.{html,js,astro}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#033e57',     // Dark Teal
        secondary: '#30e6f8',   // Light Aqua
        accent: '#ff6b6b',      // Coral
        base: '#F9FAFB',        // Off-white base
        text: '#1F2937',        // Dark slate text
        primary_dark: '#033042',     // Dark Teal
      },

      backgroundColor: {
        primary: '#033e57',     // Dark Teal
        secondary: '#30e6f8',   // Light Aqua
        accent: '#ff6b6b',      // Coral
        base: '#F9FAFB',        // Off-white base
        text: '#1F2937',        // Dark slate text
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Circular Std', 'sans-serif'],
      },
    },
  },
  plugins: [],
};