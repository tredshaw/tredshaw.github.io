/* Tailwind CSS Config - tailwind.config.js */
module.exports = {
  content: [
    "./src/**/*.{html,js,astro}"
  ],
  theme: {
    extend: {
      colors: {
        primary:        'var(--color-primary)',
        primary_dark:   'var(--color-primary-dark)',
        secondary:      'var(--color-secondary)',
        secondary_dark: 'var(--color-secondary-dark)',
        accent:         'var(--color-accent)',
        base:           'var(--color-base)',
        base_dark:      'var(--color-base-dark)',
        text:           'var(--color-text)',
        eddy_green:     '#00FFB1',
        eddy_purple:    '#B271F5',
        // v2 additions
        surface:        'var(--color-surface)',
        aqua:           'var(--color-aqua)',
        coral:          'var(--color-coral)',
        green:          'var(--color-green)',
        fg2:            'var(--color-fg-2)',
        fg3:            'var(--color-fg-3)',
      },

      fontFamily: {
        sans:    ['var(--font-body)', 'sans-serif'],
        display: ['var(--font-heading)', 'serif'],
      },

      transitionTimingFunction: {
        brand: 'cubic-bezier(.22, .61, .36, 1)',
      },

      borderRadius: {
        card: 'var(--radius-card)',
        pill: 'var(--radius-pill)',
      },
    },
  },
  plugins: [],
};
