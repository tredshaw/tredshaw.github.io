/* Tailwind CSS Config - tailwind.config.js */
module.exports = {
  content: [
    "./src/**/*.{html,js,astro}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#105F80',     // Dark Teal
        primary_dark: '#07425B',     // Dark Teal

        secondary: '#30e6f8',   // Light Aqua
        secondary_dark: '#23c2d2',   // Light Aqua

        accent: '#ff6b6b',      // Coral

        base: '#F9FAFB',        // Off-white base
        base_dark: '#E2E2E3',   // Darker grey base

        text: '#1F2937',        // Dark slate text

        eddy_green : '#00FFB1',  // The green accent colour
        eddy_purple: '#B271F5',
      },

      backgroundColor: {
        primary: '#105F80',     // Dark Teal
        primary_dark: '#07425B',     // Dark Teal

        secondary: '#30e6f8',   // Light Aqua
        accent: '#ff6b6b',      // Coral

        base: '#F9FAFB',        // Off-white base
        base_dark: '#E2E2E3',   // Darker grey base

        text: '#1F2937',        // Dark slate text

        eddy_green : '#00FFB1',  // The green accent colour
        eddy_purple: '#B271F5',
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif', 'tracking-wide'],
        // heading: ['Inter', 'sans-serif'],
        // heading: ['Circular Std', 'sans-serif'],
      },
    },
  },
  plugins: [],
};