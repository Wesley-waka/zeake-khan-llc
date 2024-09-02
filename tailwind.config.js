/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,vue,html}',
    './components/**/*.{js,ts,vue,html}',
    './layouts/**/*.{js,ts,vue,html}',
    './app.vue',
    './node_modules/preline/preline.js'
  ],
  theme: {
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'transparent': 'transparent',
        'black': '#000',
        'white': '#fff',
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#505050',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
    extend: {
      backgroundImage: {
        'custom-image': "url('https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg')",
      },
      lineHeight: {
        'extra-loose': '2.5', // Example custom line height
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
      },
      colors: {
        yellow: {
          500: '#F7F700', // Custom yellow color
        },
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

