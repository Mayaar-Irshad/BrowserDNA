module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      transitionProperty: {
        'all': 'all',
      },
      colors: {
        primary: {
          500: '#6366f1',
          600: '#4f46e5',
        },
        secondary: {
          500: '#10b981',
          600: '#059669',
        },
        dark: {
          800: '#1e293b',
          900: '#0f172a',
        },
      },
    },
  },
  plugins: [],
}