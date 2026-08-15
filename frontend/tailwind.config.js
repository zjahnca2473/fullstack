/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        black: '#14181B',

        // Neutral — "paper / ink" en vez de gris frío genérico
        gray: {
          50: '#FAFAF8',
          100: '#F1F1EC',
          200: '#E3E3DE',
          300: '#CFCFC8',
          400: '#A8A8A0',
          500: '#83837A',
          600: '#5B6169',
          700: '#43474D',
          800: '#2B2E33',
          900: '#14181B',
        },

        // Productos / acciones primarias — pino-teal
        blue: {
          50: '#EAF3F1',
          100: '#D3E7E2',
          200: '#A8D0C6',
          300: '#7CB8A9',
          400: '#4B9683',
          500: '#2C7C68',
          600: '#1F6F5C',
          700: '#195A4B',
          800: '#163F35',
          900: '#0F2C25',
        },

        // Categorías — ciruela
        purple: {
          50: '#F3EEF2',
          100: '#E4D6E2',
          200: '#C9ADC6',
          300: '#AD84A9',
          400: '#92618D',
          500: '#7A4A75',
          600: '#653B61',
          700: '#4F2E4C',
          800: '#3A2237',
          900: '#271724',
        },

        // Usuarios — índigo grisáceo
        indigo: {
          50: '#EEF0F4',
          100: '#D9DEE8',
          200: '#B3BDD1',
          300: '#8D9CBA',
          400: '#6C7CA0',
          500: '#556289',
          600: '#445071',
          700: '#343E59',
          800: '#252C40',
          900: '#171B28',
        },

        // Ventas / éxito — musgo
        green: {
          50: '#EEF3EA',
          100: '#D9E6D0',
          200: '#B3CDA1',
          300: '#8CB373',
          400: '#6C9A52',
          500: '#57813F',
          600: '#476B34',
          700: '#38542A',
          800: '#293D1F',
          900: '#1B2814',
        },

        // Peligro — barro/ladrillo
        red: {
          50: '#FBEEEA',
          100: '#F3D6CB',
          200: '#E4AC97',
          300: '#D48263',
          400: '#C15F3D',
          500: '#B3452C',
          600: '#963823',
          700: '#782C1B',
          800: '#582012',
          900: '#3D160C',
        },

        // Advertencia — mostaza
        yellow: {
          50: '#FAF4E7',
          100: '#F2E3C1',
          200: '#E3C784',
          300: '#D3AA4D',
          400: '#C0912E',
          500: '#A6741C',
          600: '#8A5F16',
          700: '#6B4A11',
          800: '#4C350C',
          900: '#322308',
        },

        'primary-50': '#EAF3F1',
        'primary-100': '#D3E7E2',
        'primary-200': '#A8D0C6',
        'primary-300': '#7CB8A9',
        'primary-400': '#4B9683',
        'primary-500': '#2C7C68',
        'primary-600': '#1F6F5C',
        'primary-700': '#195A4B',
        'primary-800': '#163F35',
        'primary-900': '#0F2C25',
        'farmacia-green': '#476B34',
        'farmacia-red': '#B3452C',
        'farmacia-yellow': '#A6741C',
      },

      // Radios más contenidos y precisos (menos "burbuja")
      borderRadius: {
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.625rem',
        '2xl': '0.875rem',
        '3xl': '1.1rem',
      },

      // Sombras planas y sutiles en vez de difusas
      boxShadow: {
        sm: '0 1px 2px 0 rgba(20,24,27,0.05)',
        DEFAULT: '0 1px 3px 0 rgba(20,24,27,0.07), 0 1px 2px -1px rgba(20,24,27,0.05)',
        md: '0 1px 3px 0 rgba(20,24,27,0.06), 0 1px 2px -1px rgba(20,24,27,0.04)',
        lg: '0 2px 6px -1px rgba(20,24,27,0.08), 0 1px 3px -1px rgba(20,24,27,0.05)',
        xl: '0 4px 10px -2px rgba(20,24,27,0.10), 0 2px 4px -2px rgba(20,24,27,0.06)',
        '2xl': '0 8px 20px -4px rgba(20,24,27,0.14)',
      },
    },
  },
  plugins: [],
}