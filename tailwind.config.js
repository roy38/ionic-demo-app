/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'custom-gbl-c': '#F82C2C'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')
,require('@tailwindcss/typography')
],
};
