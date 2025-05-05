/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      backgroundImage: {
        'login-pattern': "url('https://images.pexels.com/photos/6573889/pexels-photo-6573889.jpeg')",
        'register-pattern': "url('https://images.pexels.com/photos/4039921/pexels-photo-4039921.jpeg')",
      }
    },
  },
  plugins: [],
};