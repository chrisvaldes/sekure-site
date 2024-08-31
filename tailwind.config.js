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
        "circle-card" : "#F3F3F3",
        "big-circle-card" : "#F3EFE0",
      },
      fontSize : {
        "logo-size" : "18px",
        "women-accueil-width" : "608px",
        "women-accueil-height" : "671px",
        "women-customer-width" : "430px",
        "women-customer-height" : "345px",
        "women-card-customer-width" : "690px",
        "women-card-customer-heigh" : "649px",
        "women-card-accueil-width" : "482px",
        "women-card-accueil-height" : "437px",
        "women-footer-width" : "486px",
        "women-footer-height" : "409px",
        "big-circle-width" : "134px",
        "big-circle-height" : "134px",
        "small-circle-width" : "57.43px",
        "small-circle-height" : "54.43px",
        "small-circle-width-1" : "30px",
        "small-circle-height-1" : "30px",
        "circle-width" : "180px",
        "circle-height" : "179px"
      },
      spacing : {
        "gap" : "13px",
        "line-height" : "47px",
        
      },
      fontWeight : {
        "weight" : "700"
      },
      fontFamily : {
        "font-family" : "Satoshi",
      }
    },
  },
  plugins: [],
}

