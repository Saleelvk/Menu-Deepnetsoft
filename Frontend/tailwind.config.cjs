/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:["Poppins","serif"],
        Oswald:["Oswald", "sans-serif"],
        KellySlab:["Kelly Slab", "sans-serif"]
        
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/freepik__expand__67443.png')",
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)', 
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
        lg: '3px 3px 6px rgba(0, 0, 0, 0.5)', 
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}
