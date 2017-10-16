//Database entries for use with index-controller.js
//Stringified and stored below

  let homePage = {
    "picture": "./index/images/chicken_sunglasses_b.jpg",
    "button": "./products/products.html",
    "title": "PLACEHOLDER",
    "body": "Pop-up helvetica edison bulb, godard trust fund etsy bushwick asymmetrical fingerstache palo santo truffaut tilde man bun four loko glossier. Tilde taxidermy selvage woke salvia you probably haven't heard of them cred chillwave. Gentrify trust fund bushwick, four loko hexagon yr echo park raclette kombucha offal mlkshk pug. Tote bag banh mi marfa chambray vice thundercats enamel pin, flexitarian lyft man bun farm-to-table. Squid umami aesthetic cred, post-ironic austin kickstarter fanny pack readymade mumblecore hot chicken roof party street art food truck fam. Leggings cloud bread small batch knausgaard cronut celiac jianbing. Ugh unicorn sriracha trust fund cloud bread fashion axe bushwick. Echo park shaman tumblr actually lomo. Fashion axe semiotics kogi keytar, typewriter four dollar toast selfies yuccie church-key butcher kombucha DIY normcore kale chips. Street art brooklyn yuccie photo booth pok pok vice locavore.",    
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
