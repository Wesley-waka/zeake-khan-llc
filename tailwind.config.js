/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,vue,html}',
    './components/**/*.{js,ts,vue,html}',
    './layouts/**/*.{js,ts,vue,html}',
    './app.vue',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg')",
      },
      lineHeight: {
        'extra-loose': '2.5', // Example custom line height
      }
    },
  },
  plugins: [],
}

