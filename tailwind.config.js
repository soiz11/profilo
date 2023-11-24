/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
       screens: {
         'xxs':"380px",
         'xs':'480px',
      //   'sm': '640px',
      //   'md': '768px', 
      //   'lg': '1024px',  
      //   'xl': '1280px',
      //   '2xl': '1536px',**/

      //   '2xl': {'max': '1535px'},
      // // => @media (max-width: 1535px) { ... }

      // 'xl': {'max': '1279px'},
      // // => @media (max-width: 1279px) { ... }

      // 'lg': {'max': '1023px'},
      // // => @media (max-width: 1023px) { ... }

      // 'md': {'max': '767px'},
      // // => @media (max-width: 767px) { ... }

      // 'sm': {'max': '639px'},
       },

      keyframes: {
        'switching': {
          '0%': {
            transform: 'translateY(0)',
          },
          '25%': {
            transform: 'translateY(0)',
          },
          '37.5%': {
            transform: 'translateY(-60px)',
          },
          '62.5%': {
            transform: 'translateY(-60px)',
          },
          '75%': {
            transform: 'translateY(-120px)',
          },
          '100%': {
            transform: 'translateY(-120px)',
          },
        },
      },

      animation:{
        'switching': 'switching 6s ease-out infinite alternate'
      }
      
    },
  },
  plugins: [],
}
