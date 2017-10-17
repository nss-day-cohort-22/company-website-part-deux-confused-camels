const productsDBArray = [
    {
        name: "The Tom Selleck",
        description: "For the chicken that has that Magnum swagger.",
        price: "5",
        image: "./images/happy-chicken.jpg",
        stock: 20,
        select: 20
    },

    {
        name: "The Lady Gaga",
        description: "Hide that poker face behind these stylish anti-canabalism shades.",
        price: "7",
        image: "./images/gaga.jpg",
        stock: 20,
        select: 20
    },
    {
        name: "The Elton",
        description: "Say goodbye to the Yellow Brick road AND devoured hatchlings!",
        price: "10",
        image: "./images/elton.jpg",
        stock: 20,
        select: 20
    },
    {
        name: "The Dazed and Confused",
        description: "You might have the munchies, but not for your spawn!",
        price: "6",
        image: "./images/dazed.jpg",
        stock: 20,
        select: 20
    }


]

const productsObject = {
    "products": productsDBArray
}

const productsString = JSON.stringify(productsObject);

if (localStorage.getItem("productsBrowserDB") === null) {
    localStorage.setItem("productsBrowserDB", productsString);
} 
