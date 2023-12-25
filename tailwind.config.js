/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    // colors: {
    //   'my_color1': '#7BD3EA',
    //   'my_color2': '#A1EEBD',
    //   'my_color3': '#A1EEBD',
    //   'my_color4': '#F6F7C4',
    //   'my_color5': '#F6D6D6',
    //   'my_color6': '#FF90BC',
    //   'my_color7': '#F9F9E0',
    //   'my_color8':'#FF8080',
    //   'my_color9':'#CDFAD5',
    //   'my_color10': '#F6FDC3',
    //   'my_color11': '#A9A9A9',
    //   'my_color12':'#FECDA6',
    //   'my_color13': '#FF9130',
    //   'my_color14': '#FF5B22',
    //   'my_color15': '#FFB9B9',
    //   'my_color16': '#FFDDD2',
    //   'my_color17': '#FFACC7',
    //   'my_color18': '#FF8DC7',
    //   'my_color19': '#FF5959',
    //   'my_color20': '#867070',
    //   'my_color21': '#D5B4B4',
    //   'my_color22': '#F5EBEB',
    //   'my_color23': '#793FDF',
    //   'my_color24': '#7091F5',
    //   'my_color25': '#191825',
    //   'bg-color': 'black'


    // },

  
    extend: {
    
    },
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
    require('@tailwindcss/typography'),


  ],
  
}

