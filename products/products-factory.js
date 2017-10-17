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
        name: "The Drug Lord | Dark",
        description: "Say hello to my little friend.",
        price: "5",
        image: "./images/drugLord.jpg",
        stock: 20,
        select: 20
    },

    {
        name: "The Matrix | Reflective",
        description: "There is no spoon but we do have sporks.",
        price: "7",
        image: "./images/theMatrix.jpg",
        stock: 20,
        select: 20
    },
    {
        name: "The Morpheus | Ridiculous",
        description: "No body makes the first chicken jump",
        price: "10",
        image: "./images/theMorpheus.jpg",
        stock: 20,
        select: 20
    },
    {
        name: "The Rich Guys | Expensive Black",
        description: "When you can afford the whole bucket.",
        price: "20",
        image: "./images/theRichGuys.jpg",
        stock: 20,
        select: 20
    },
    {
        name: "The Sassies | Pink",
        description: "For a Diva Hen",
        price: "5",
        image: "./images/theSassy.jpg",
        stock: 20,
        select: 20
    },

    {
        name: "The Sky Blues",
        description: "When you know you cant fly but want to feel like you can",
        price: "7",
        image: "./images/theSkyBlues.jpg",
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
    }

]

const productsObject = {
    "products": productsDBArray
}

const productsString = JSON.stringify(productsObject);
localStorage.setItem("productsBrowserDB", productsString);
