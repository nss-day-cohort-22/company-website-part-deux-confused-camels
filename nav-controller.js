// get nav bar from local storage
const storedNavBar = JSON.parse(localStorage.getItem("navBarTastic"));
const navEl = document.getElementById("nav");

//loop through nav array
for (let i = 0; i < storedNavBar.length; i++) {
    let currentNav = storedNavBar[i];

    navEl.innerHTML += `
    <a class="nav-item nav-link" href="${currentNav.link}">${currentNav.name}</a>
    `
    
}