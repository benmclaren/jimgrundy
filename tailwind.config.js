/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `themes/jg/layouts/**/*.html`,
    `content/**/*.md`
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({

        ...theme('colors'),

        'highlight': '#F6F6F6',
        'background': '#F5FDFC'
      })
    },
  },
  variants: {},
  plugins: []
}
