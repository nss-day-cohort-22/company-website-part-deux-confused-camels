//created nav bar object
const home = {
    'name' : 'Home',
    'link' : "../index.html"
}

const products = {
    'name' : 'Products',
    'link' : "../products/products.html"
}

const about = {
    'name' : 'About',
    'link' : "../about/about.html"
}

const contact = {
    'name' : 'Contact',
    'link' : "../contact/contact.html"
}


//create blank nav bar array
const navBar = [];

//create array of objects into navBar
navBar.push(home, products, about, contact);

//pushing to local storage
const navBarString = JSON.stringify(navBar);
localStorage.setItem("navBarTastic", navBarString);