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
        "button-first" : "233px",
        "width-card-horiz" : "205px",
         "width-card-vert" : "300px",
         "button-footer" : "277px"
      },
      height: {
        "button-height": "50px",
        "button-footer" : "50px",
        "button-first" : "39px",
        "height-card-vert" : "90px",
        "height-card-horiz" : "264px",
      },
      margin: {
        "button-margin": "20px",
      },
      padding: {
        "button-padding": "15px",
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        128: '32rem',
        136: '34rem',
        144: '36rem', 
      },
      fontSize : {
         "title" : "45px",
         "title-1" : "35px",
         "title-2" : "40px",
         "title-3" : "30px",
         "title-4" : "14px",
         "content-title-3" : "12px",
         "content" : "14px",
         "sub-content" : "11px",         
         "nav" : "14px",
         "footer-title" : "40px",
         "button" : "12px"
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
        "satoshi" : ["Satoshi", "sans-serif"],
        "inter" : ["Inter", "sand-serif"]
      }
    },
  },
  plugins: [],
}

