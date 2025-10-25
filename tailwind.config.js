/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'cf-orange': '#f48120',
        'cf-dark-blue': '#1e2a4a',
        'cf-light-blue': '#3b82f6',
        'cf-gray': '#6b7280',
        'cf-light-gray': '#f3f4f6'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      }
    },
  },
  plugins: [],
}