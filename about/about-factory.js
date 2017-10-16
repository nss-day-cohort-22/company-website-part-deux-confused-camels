//ABOUT US
//Original reason Chicken Sunglasses were created
const original = {
    "problem": "Seeing the world through rose-colored glasses has been associated with having a positivity outlook for centuries. However, for chickens, seeing the world through rose-colored glasses has literally been life saving. Many people are unaware that chickens have a natural cannibalistic instinct, which is intensified at any sight of blood. Farmers would watch in horror, as their chickens would mercilessly peck each other to death. They were desperate to stop these mass murders but the chickens found loopholes in all of the farmers’ attempts!", 

    "solution": "Finally in the early 1900s, Andrew Jackson, Jr. created Chicken Sunglasses to help combat this issue. These rose-colored glasses made it more difficult for chickens to see blood and drastically reduced the amount of chicken cannibalism on farms. The effectiveness of Chicken Sunglasses was so great that they were regularly used until the early 1970s. Farmers that had thousands of chickens were growing tired of putting the Chicken Sunglasses on thousands of chickens so alternate ways to prevent chicken cannibalism were found, such as providing larger spaces for the chickens so they aren’t cooped up in close quarters."
}
//Modern reason why Chicken Sunglasses were revitalized
const modern = {
    "problem": "However, over the last ten years, owning chickens has become a hipster trend. This has had dire consequences. After decades of being almost non-existent, the rate of chicken cannibalism began to rise again, since the hipsters weren’t able to provide the adequate spaces for multiple chickens to safely cohabitate. Hipsters were in a “fowl” mood and at a loss of what to do.",
    
    "solution": "Thankfully, our founder was familiar with the rose-colored solution from over a century ago: Chicken Sunglasses! Since 2010, COMPANY-NAME has helped spare the lives of thousands of hipster chickens through our functional and fashionable Chicken Sunglasses!"
}

//Create an array of original problem/solution and the modern problem/solution
const aboutUs = [];

aboutUs.push(original, modern);

//stringify to local storage
const aboutString = JSON.stringify(aboutUs);
localStorage.setItem("about", aboutString);

//EMPLOYEES
//Objects containing employees
const founder = {
    "name": "John",
    "title": "Founder and CEO",
    "image": "/about/img/founderChicken.jpg"
}

const productManager = {
    "name": "Paul",
    "title": "Product Manager",
    "image": "/about/img/productChicken.jpg"
}

const socialManager = {
    "name": "Chris",
    "title": "Social Media Guru",
    "image": "/about/img/socialChicken.jpg"
}

const outreachCoordinator = {
    "name": "Kristen",
    "title": "Outreach Coordinator",
    "image": "/about/img/outreachChicken.jpg"
}

//employee array
const employees = [];

employees.push(founder, productManager, socialManager, outreachCoordinator);

//stringify to local storage
const employeeString = JSON.stringify(employees);
localStorage.setItem("employeeInfo", employeeString);

