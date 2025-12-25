/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Avenir Next', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

