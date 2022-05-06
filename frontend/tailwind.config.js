const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [
    // './pages/**/*.{js,ts,jsx,tsx}',
    // './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        h1: { fontSize: config('theme.fontSize.3xl') },
        h2: { fontSize: config('theme.fontSize.2xl') },
        h3: { fontSize: config('theme.fontSize.xl') },
        h4: { fontSize: config('theme.fontSize.lg') },
        h5: { fontSize: config('theme.fontSize.base') },
        h6: { fontSize: config('theme.fontSize.sm') },
      })
    }),
  ],
}
