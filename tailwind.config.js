/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ededed",
        secondary: "#5a5f61",
      },

      screens: {
        xxs: "380px",
        xs: "480px",
        bxs: "580px",
        bigsm: "700px",
        bigmd: "820px",
        midwidth: "940px",
        "3xl": "1875px",
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
        switching: {
          "0%": {
            transform: "translateY(0)",
          },
          "25%": {
            transform: "translateY(0)",
          },
          "37.5%": {
            transform: "translateY(-60px)",
          },
          "62.5%": {
            transform: "translateY(-60px)",
          },
          "75%": {
            transform: "translateY(-120px)",
          },
          "100%": {
            transform: "translateY(-120px)",
          },
        },

        loading: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },

        letterspace: {
          "0%": {
            letterSpacing: "normal",
          },
          "35%": {
            letterSpacing: "1px",
          },
          "50%": {
            letterSpacing: "normal",
          },
          "85%": {
            letterSpacing: "1px",
          },
          "100%": {
            letterSpacing: "normal",
          },
        },
      },

      animation: {
        switching: "switching 6s ease-out infinite alternate",
        loading: "loading 4s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        letterspace: "letterspace 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
