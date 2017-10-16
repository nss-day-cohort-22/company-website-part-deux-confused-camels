// Assign variables

let testArray=[]
let newComment = {}

// Display Comments or Emails
function displayMessages(type, displayElement) {
    document.getElementById(displayElement).innerHTML = ""

    let commentObjectParse = JSON.parse(localStorage.getItem("commentObjectStored"))
    
    //check messageType and display filter out comments / emails
    for (let index = 0; (index < commentObjectParse.length) && (index < 10); index++) {
        let element = commentObjectParse[index];

        if (element.messageType === type) {
            document.getElementById(displayElement).innerHTML += `
            <div>
            <div>${element.name}:</div>
            <div>${element.comment}</div>
            <div>${element.date}</div>
            `
            if (type === "email") {
                document.getElementById(displayElement).innerHTML += `
                <div><a href="mailto:${element.email}?Subject=Response%20To%20Your%20Email" target="_top">${element.email}</a></div>
                <button onclick="deleteMessage(${index})">Delete Message</button>
                `
            }

            document.getElementById(displayElement).innerHTML += `<br></div>`
        }
    }
    
    let commentObjectString = JSON.stringify(commentObjectParse)
    
    localStorage.setItem("commentObjectStored", commentObjectString)
}

// Add new coment from form and add it localStorage 
function getData() {
    
    let w = document.querySelector('input[name="messageType"]:checked').value
    let x = document.getElementById("test").elements[2].value;
    let y = document.getElementById("test").elements[3].value;
    let z = document.getElementById("test").elements[4].value;
    
    newComment = {
        "messageType": w,
        "name": x,
        "email": y,
        "comment": z,
        "date": Date().substring(0, 24)
    }

    let commentObjectParse = JSON.parse(localStorage.getItem("commentObjectStored"))

    commentObjectParse.unshift(newComment)
    
    let commentObjectString = JSON.stringify(commentObjectParse)

    localStorage.setItem("commentObjectStored", commentObjectString)


    displayMessages("comment", "testOutput")
}

function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}



// Determines if there are stored coments and displays them or creates a localStorage item
if (localStorage.getItem("commentObjectStored") === null) {
    localStorage.setItem("commentObjectStored", JSON.stringify(testArray))
} else {
    displayMessages("comment", "testOutput")
}