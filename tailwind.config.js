/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      katakuri: ["Kantumruy Pro", 'sans-serif']
    },
    letterSpacing: {
      widest : '.5em',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'gradient-to-t': 'linear-gradient(to top, #007bff, #ffffff 100%)', 
       
      },
      colors: {
        'verde-dark2': '#17252A', 
        'verde-dark1': '#2B7A78',  
        'verde-ligth1':'#3AAFA9',
        'verde-ligth2' : '#DEF2F1',
        'blanco-pato' : '#FEFFFF', // blanco
      }
    }
  },
  plugins: [] // Debe estar fuera de theme
};
