/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "cyan-color" : "#2CE5B1",
        "cyan-deep" : "#285246",
        "nav-color" : "#5A5A5A"
      },
      width: {
        "button-width": "215px",
        "button-first" : "233px"
      },
      height: {
        "button-height": "50px", 
        "button-first" : "39px"
      },
      margin: {
        "button-margin": "20px",
      },
      padding: {
        "button-padding": "15px",
      },
      fontSize : {
         "title" : "45px",
         "title-1" : "35px",
         "title-2" : "40px",
         "title-3" : "30px",
         "content" : "14px",
         "sub-content" : "11px",
         "width-card-horiz" : "441px",
         "height-card-horiz" : "441px",
         "width-card-vert" : "441px",
         "height-card-vert" : "118px",
         "nav" : "14px",
      },
      lineHeight: {
        "tight": "1.2", 
        "normal": "1",  
        "loose": "1.8", 
        "normal-1" : "1.5"
      },
      fontWeight : {
        "weight-title" : "700",
        "weight-title-1" : "500",
        "weight-title-2" : "400",
        "weight-title-3" : "700",
        "weight-content" : "500",
        "weight-sub-content" : "500",
        "weight-nav" : "400"
      },
      fontFamily : {
        "family-title" : "Satoshi",
        "family-content" : "Satoshi",
        "family-title" : "Lufga",
        "family-nav" : "Inter"
      }
    },
  },
  plugins: [],
}

