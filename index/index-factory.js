//Database entries for use with index-controller.js
//Stringified and stored below
  let homePage = {
    "picture": "./index/images/chicken_sunglasses_b.jpg",
    "button": "./products/products.html",
    "title": "Welcome to Camels Chicken Sunglasses!",
    "body": "We are CCS. The only source for modern day trendy eyewear for the hipster chick that doesnt want to go into a baby boomer blood rage. Our products are 100% made in the US and set the trends for all of the industry. Whether you're a rooster or a hen, we have a style to match your needs. Click on the button to get started!",    
    "video": "https://www.youtube.com/embed/5xQD5G10W4U",
  }
//taking data arrays and storing it into another array variable
let indexContent = [homePage]
let indexCS = {
    "homePage": indexContent
  }
//Stringifying the Database to be stored in our browser for use by the controller file.
const indexString = JSON.stringify(indexCS)
localStorage.setItem("homePage", indexString)
