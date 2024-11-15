/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        cream: {
          50: '#FFFDF9',
          100: '#FFF8E8',
          200: '#FFE8CC',
          300: '#FFD8A8',
          400: '#FFC583',
          500: '#FFB15C',
          600: '#FF9838',
          700: '#FF8016',
          800: '#EE6C00',
          900: '#CC5D00',
        },
        primary: {
          50: '#F4F9FF',
          100: '#E9F3FF',
          200: '#D4E7FF',
          300: '#BEDAFF',
          400: '#A9CEFF',
          500: '#93C2FF',
          600: '#7EB6FF',
          700: '#69AAFF',
          800: '#549EFF',
          900: '#3F92FF',
        },
        accent: {
          peach: {
            light: '#FFB4A1',
            DEFAULT: '#FF8C73',
            dark: '#FF6347',
          },
          mint: {
            light: '#7FFFD4',
            DEFAULT: '#48D1CC',
            dark: '#20B2AA',
          },
          lavender: {
            light: '#E6E6FA',
            DEFAULT: '#DCD0FF',
            dark: '#B19CD9',
          },
          coral: {
            light: '#FFB6C1',
            DEFAULT: '#FF7F87',
            dark: '#FF6B6B',
          },
          peach: '#FFB4A2',
          mint: '#A5FFD6',
        },
        gradient: {
          start: '#FFB4A1',
          middle: '#DCD0FF',
          end: '#7FFFD4',
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
        'blob': '69% 31% 61% 39% / 47% 52% 48% 53%',
        'blob-2': '31% 69% 29% 71% / 52% 47% 53% 48%',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'cream': '0 4px 20px -2px rgba(255, 177, 92, 0.2)',
        'glow': '0 0 15px rgba(255, 177, 92, 0.3)',
        'inner-glow': 'inset 0 2px 10px rgba(255, 177, 92, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'cream-gradient': 'linear-gradient(135deg, #FFF8E8 0%, #FFE8CC 100%)',
        'cream-radial': 'radial-gradient(circle at center, #FFF8E8 0%, #FFE8CC 100%)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient 10s ease infinite',
        'spin-slow': 'spin 15s linear infinite',
        'spin-reverse-slow': 'spin-reverse 15s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'bounce': 'bounce 1s infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'spin-reverse': {
          'to': {
            'transform': 'rotate(-360deg)'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          }
        },
        'blob': {
          '0%': {
            borderRadius: '69% 31% 61% 39% / 47% 52% 48% 53%',
          },
          '50%': {
            borderRadius: '31% 69% 29% 71% / 52% 47% 53% 48%',
          },
          '100%': {
            borderRadius: '69% 31% 61% 39% / 47% 52% 48% 53%',
          }
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
          '50%': {
            opacity: .5,
            transform: 'scale(1.2)',
          },
        },
      },
    },
  },
  plugins: [],
}
