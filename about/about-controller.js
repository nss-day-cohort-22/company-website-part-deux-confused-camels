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

//pull employeeString from local storage
const employeeDatabase = JSON.parse(localStorage.getItem("employeeInfo"));
const employeeElement = document.getElementById("employee-info");

for (let i = 0; i < employeeDatabase.length; i++) {
    let currentEmployee = employeeDatabase[i];
    
    employeeElement.innerHTML += `
    <article class="employee">
        <img src="${currentEmployee.image}" class="employee-image">
        <h3 class="employee-name">${currentEmployee.name}</h3>
        <h4 class="employee-title">${currentEmployee.title}</h4>
    </article>
    `
}