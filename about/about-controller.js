//pull aboutString from local storage
const aboutDatabase = JSON.parse(localStorage.getItem("about"));
const aboutElement = document.getElementById("about-us");

//loop through original and modern problem/solution and insert into about.html
for (let i = 0; i < aboutDatabase.length; i++) {
    let currentAbout = aboutDatabase[i];

    aboutElement.innerHTML += `
    <article>
        <p>${currentAbout.problem}</p>
        <p>${currentAbout.solution}</p>
    </article>
    `    
}