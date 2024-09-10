/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript and TypeScript files in the src folder
    "./public/**/*.html", // Include HTML files in the public folder
    "./pages/**/*.{js,jsx,ts,tsx}", // Include pages if you are using Next.js
    "./components/**/*.{js,jsx,ts,tsx}", // Include components if you are using a specific folder for them
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

        docslider: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },

      animation: {
        docslider: "docslider 20s linear infinite",
        switching: "switching 6s ease-out infinite alternate",
        loading: "loading 4s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        letterspace: "letterspace 3s ease-in-out infinite",
      },

      boxShadow: {
        docslider:
          "inset 10px 0 55px -10px rgba(0, 0, 0, 0.5), inset -10px 0 55px -10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
