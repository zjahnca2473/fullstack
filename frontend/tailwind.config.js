/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        white: '#141922', // superficies elevadas (cards/modales)

        // Shell oscuro — invertido (50 = fondo de página, 900 = texto principal)
        gray: {
          50: '#0A0D12', 100: '#10141B', 200: '#1B2029', 300: '#262C38',
          400: '#4A5262', 500: '#7A8496', 600: '#9AA3B5', 700: '#BAC1D0',
          800: '#D8DCE6', 900: '#F4F6FA',
        },

        // Acentos — orden normal de Tailwind (50 claro -> 900 oscuro),
        // anclados en un tono 600 vívido/neón por módulo
        blue: {   // Productos
          50: '#F1F8FE', 100: '#E3F1FC', 200: '#C9E3F9', 300: '#A8D2F5',
          400: '#7FBBEF', 500: '#57A6EA', 600: '#2F8FE0', 700: '#2570B3',
          800: '#184F80', 900: '#0F3355',
        },
        purple: { // Categorías
          50: '#F8F3FE', 100: '#F1E7FD', 200: '#E4D0FB', 300: '#D3B0F9',
          400: '#C08FF6', 500: '#AD6EF3', 600: '#9A4EF0', 700: '#7A3AC2',
          800: '#5C2B94', 900: '#401D66',
        },
        indigo: { // Usuarios
          50: '#F4F5FF', 100: '#E9ECFE', 200: '#D5DAFC', 300: '#BAC3FA',
          400: '#9BA7F7', 500: '#7C8CF5', 600: '#6577F2', 700: '#4E5FC9',
          800: '#3A4699', 900: '#272F6B',
        },
        green: {  // Ventas / éxito
          50: '#F1FCF7', 100: '#E0F8EC', 200: '#C2EFD9', 300: '#99E2C1',
          400: '#6BD4AA', 500: '#3FC593', 600: '#22B37D', 700: '#1B8F63',
          800: '#146B4A', 900: '#0D4A33',
        },
        red: {    // Peligro
          50: '#FEF4F5', 100: '#FCE8EA', 200: '#FAD5D8', 300: '#F5B3B9',
          400: '#F08D96', 500: '#E96774', 600: '#E14352', 700: '#B93340',
          800: '#90252F', 900: '#691A21',
        },
        yellow: { // Advertencia
          50: '#FEFAF3', 100: '#FCF2E2', 200: '#F9E5C7', 300: '#F4D3A1',
          400: '#EEBE74', 500: '#E7A947', 600: '#E0961A', 700: '#B87814',
          800: '#8F5C0F', 900: '#67420A',
        },
        orange: { // Usado en el modal de detalle de venta (Total)
          50: '#FEF6F3', 100: '#FCE9E2', 200: '#F9D4C7', 300: '#F4B9A1',
          400: '#EE9E74', 500: '#E78347', 600: '#E06B1A', 700: '#B85614',
          800: '#8F420F', 900: '#672F0A',
        },

        'primary-50': '#F1F8FE', 'primary-100': '#E3F1FC', 'primary-200': '#C9E3F9',
        'primary-300': '#A8D2F5', 'primary-400': '#7FBBEF', 'primary-500': '#57A6EA',
        'primary-600': '#2F8FE0', 'primary-700': '#2570B3', 'primary-800': '#184F80',
        'primary-900': '#0F3355',
        'farmacia-green': '#22B37D',
        'farmacia-red': '#E14352',
        'farmacia-yellow': '#E0961A',
      },

      borderRadius: {
        md: '0.375rem', lg: '0.5rem', xl: '0.625rem', '2xl': '0.875rem', '3xl': '1.1rem',
      },

      boxShadow: {
        sm: '0 1px 2px 0 rgba(0,0,0,0.4)',
        DEFAULT: '0 1px 3px 0 rgba(0,0,0,0.45), 0 1px 2px -1px rgba(0,0,0,0.3)',
        md: '0 2px 8px 0 rgba(0,0,0,0.45), 0 1px 2px -1px rgba(0,0,0,0.3)',
        lg: '0 4px 16px -2px rgba(0,0,0,0.5), 0 2px 6px -2px rgba(0,0,0,0.3)',
        xl: '0 8px 28px -4px rgba(0,0,0,0.55), 0 4px 10px -4px rgba(0,0,0,0.35)',
        '2xl': '0 16px 48px -8px rgba(0,0,0,0.65)',
      },
    },
  },
  plugins: [],
}