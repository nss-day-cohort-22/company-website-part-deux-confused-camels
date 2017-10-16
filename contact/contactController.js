// Pull contact info database from localStorage

let contactInfoDatabaseParse = JSON.parse(localStorage.getItem("contactInfoDatabaseStored"))

// Query database and populate a set of links for contact

for (var index = 0; index < contactInfoDatabaseParse.length; index++) {
    let element = contactInfoDatabaseParse[index]

    document.getElementById("contactInfoLinks").innerHTML += `
    <div class="contactLink">
        <img src="${element.logo}">
        <h3>${element.name}</h3>
        <h4><a href="${element.location}">${element.tag}</a></h4>
    </div>
    `
}