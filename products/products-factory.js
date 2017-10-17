const productsDBArray = [
    {
        name: "The Tom Selleck | Slate Grey",
        description: "For the chicken that has that Magnum swagger.",
        price: "5",
        image: "./images/happy-chicken.jpg",
        stock: 20,
        select: 20
    },

    {
        name: "The Lady Gaga | Slate Grey",
        description: "Hide that poker face behind these stylish anti-canabalism shades.",
        price: "7",
        image: "./images/gaga.jpg",
        stock: 20,
        select: 20
    },
    {
        name: "The Elton | Slate Grey",
        description: "Say goodbye to the Yellow Brick road AND devoured hatchlings!",
        price: "10",
        image: "./images/elton.jpg",
        stock: 20,
        select: 20
    },
    {
        name: "The Dazed and Confused | Slate Grey",
        description: "You might have the munchies, but not for your spawn!",
        price: "6",
        image: "./images/dazed.jpg",
        stock: 20,
        select: 20
    },
    {
        name: "The Tom Selleck | Indigo",
        description: "For the chicken that has that Magnum swagger.",
        price: "5",
        image: "./images/happy-chicken.jpg",
        stock: 20,
        select: 20
    },

    {
        name: "The Lady Gaga | Indigo",
        description: "Hide that poker face behind these stylish anti-canabalism shades.",
        price: "7",
        image: "./images/gaga.jpg",
        stock: 20,
        select: 20
    },
    {
        name: "The Elton | Indigo",
        description: "Say goodbye to the Yellow Brick road AND devoured hatchlings!",
        price: "10",
        image: "./images/elton.jpg",
        stock: 20,
        select: 20
    },
    {
        name: "The Dazed and Confused | Indigo",
        description: "You might have the munchies, but not for your spawn!",
        price: "6",
        image: "./images/dazed.jpg",
        stock: 20,
        select: 20
    },
    {
        name: "The Tom Selleck | Jaded Jade",
        description: "For the chicken that has that Magnum swagger.",
        price: "5",
        image: "./images/happy-chicken.jpg",
        stock: 20,
        select: 20
    },

    {
        name: "The Lady Gaga | Jaded Jade",
        description: "Hide that poker face behind these stylish anti-canabalism shades.",
        price: "7",
        image: "./images/gaga.jpg",
        stock: 20,
        select: 20
    },
    {
        name: "The Elton | Jaded Jade",
        description: "Say goodbye to the Yellow Brick road AND devoured hatchlings!",
        price: "10",
        image: "./images/elton.jpg",
        stock: 20,
        select: 20
    },
    {
        name: "The Dazed and Confused | Jaded Jade",
        description: "You might have the munchies, but not for your spawn!",
        price: "6",
        image: "./images/dazed.jpg",
        stock: 20,
        select: 20
    },
    {
        name: "The Tom Selleck | Blue Velvet",
        description: "For the chicken that has that Magnum swagger.",
        price: "5",
        image: "./images/happy-chicken.jpg",
        stock: 20,
        select: 20
    },

    {
        name: "The Lady Gaga | Blue Velvet",
        description: "Hide that poker face behind these stylish anti-canabalism shades.",
        price: "7",
        image: "./images/gaga.jpg",
        stock: 20,
        select: 20
    },
    {
        name: "The Elton | Blue Velvet",
        description: "Say goodbye to the Yellow Brick road AND devoured hatchlings!",
        price: "10",
        image: "./images/elton.jpg",
        stock: 20,
        select: 20
    },
    {
        name: "The Dazed and Confused | Blue Velvet",
        description: "You might have the munchies, but not for your spawn!",
        price: "6",
        image: "./images/dazed.jpg",
        stock: 20,
        select: 20
    },
    {
        name: "The Tom Selleck | Razzle Red",
        description: "For the chicken that has that Magnum swagger.",
        price: "5",
        image: "./images/happy-chicken.jpg",
        stock: 20,
        select: 20
    },

    {
        name: "The Lady Gaga | Razzle Red",
        description: "Hide that poker face behind these stylish anti-canabalism shades.",
        price: "7",
        image: "./images/gaga.jpg",
        stock: 20,
        select: 20
    },
    {
        name: "The Elton | Razzle Red",
        description: "Say goodbye to the Yellow Brick road AND devoured hatchlings!",
        price: "10",
        image: "./images/elton.jpg",
        stock: 20,
        select: 20
    },
    {
        name: "The Dazed and Confused | Razzle Red",
        description: "You might have the munchies, but not for your spawn!",
        price: "6",
        image: "./images/dazed.jpg",
        stock: 20,
        select: 20
    },

]

const productsObject = {
    "products": productsDBArray
}

const productsString = JSON.stringify(productsObject);
localStorage.setItem("productsBrowserDB", productsString);
