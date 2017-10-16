const productsDBArray = [
    {
        name: "Test",
        description: "Test",
        price: "test",
        image: "./images/happy-chicken.jpg",
        stock: 20
    }

]

const productsObject = {
    "products": productsDBArray
}

const productsString = JSON.stringify(productsObject);

if (localStorage.getItem("productsBrowserDB") === null) {
    localStorage.setItem("productsBrowserDB", productsString);
} 
