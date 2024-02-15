/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        "charcoal-grey": "hsl(235, 18%, 26%)",
        "grey": "hsl(231, 7%, 60%)",
        "white": "hsl(0, 0%, 100%)"
  
      },
  
      fontFamily : {
        "roboto" : ['Roboto', "sans-serif"]
      },
    },
  },
  plugins: [],
}

