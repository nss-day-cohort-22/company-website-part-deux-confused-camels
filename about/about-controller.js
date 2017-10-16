//pull aboutString from local storage
const aboutDatabase = JSON.parse(localStorage.getItem("about"));
const aboutElement = document.getElementById("about-us");

//loop through original and modern problem/solution and insert into about-us section of about.html
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

//loop through each employee and add their information to the employee-info section of about.html
for (let i = 0; i < employeeDatabase.length; i++) {
    let currentEmployee = employeeDatabase[i];
    
    employeeElement.innerHTML += `
    <article class="employee">
        <img src="${currentEmployee.image}" class="employee-image">
        <h4 class="employee-name">${currentEmployee.name}</h4>
        <h6 class="employee-title">${currentEmployee.title}</h6>
    </article>
    `
}