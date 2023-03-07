/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'grigio': '#f9fafa',
        'deliveroo': '#00ccbc',
        'overlay_delivero': '#00998c',
        'facebook': '#4c69ba',
        'divgrey1': '#2e3333',
        'divgrey2': '#434848',
        'preferiti': '#ffeae4',
        'hover-blue': '#1e90ff',
        'orange-scuro': '#ff483b',
        'orange-chiaro': '#ff8100',
        'oliva-chiaro': '#bac3c3',

        
      },
    },
  },
  plugins: [],
}
