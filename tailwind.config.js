/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
      dropShadow: {
        'blue-100': '0 4px 4px rgba(219,234,254,0.5)',
        'blue-200': '0 4px 4px rgba(191,219,254,0.5)',
        'blue-300': '0 4px 4px rgba(147,197,253,0.5)',
        'blue-400': '0 4px 4px rgba(96,165,250,0.5)',
        'blue-500': '0 4px 4px rgba(59,130,246,0.5)',
        'blue-600': '0 4px 4px rgba(37,99,235,0.5)',
        'blue-700': '0 4px 4px rgba(29,78,216,0.5)',
        'blue-800': '0 4px 4px rgba(30,64,175,0.5)',
        'blue-900': '0 4px 4px rgba(30,58,138,0.5)',
      },
    },
  },
  plugins: [],
};