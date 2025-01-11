// tailwind.config.js
module.exports = {
  content: [
    "./index.html",  // If you're using an HTML file
    "./quizz.html",  // If you're using an HTML file
    "./**/*.html",    // If you're using HTML files inside subdirectories
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        
        'hero-pattern':
         "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)) url('images/hero-banner.jpg')",
     }),
    },
    animation: {
      fadeOut: 'fadeOut 4s ease-out', 
    },
    keyframes: {
      fadeOut: {
        '0%': {
          opacity: "0"/* Start offscreen */
        },
        '50%': {
          opacity:"0.5" /* End at the center of the viewport */
        },
        '100%': {
          opacity:"1" /* End at the center of the viewport */
        }
      },
    },
  },
  plugins: [],
}
