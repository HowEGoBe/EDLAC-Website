/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#3dd5f3',
        ink: '#0a0a0c',
        panel: '#121216'
      },
      backgroundImage: {
        'radial-lux': 'radial-gradient(circle at top left, rgba(61, 213, 243, 0.15), transparent 50%), radial-gradient(circle at bottom right, rgba(31, 81, 255, 0.1), transparent 55%)'
      },
      boxShadow: {
        soft: '0 18px 44px rgba(0,0,0,0.25)'
      }
    }
  },
  plugins: []
};
