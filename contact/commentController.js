// Assign variables

let testArray=[]
let newComment = {}

// Display Comments or Emails

function displayMessages(type, displayElement, recepient) {
    let commentObjectParse = JSON.parse(localStorage.getItem("commentObjectStored"))
    
    document.getElementById(displayElement).innerHTML = ""
    
    //check messageType and display filter out comments / emails
    for (let index = 0; (index < commentObjectParse.length) && (index < 10); index++) {
        let element = commentObjectParse[index];
        let commentID = element.date.replace(/ /g, "")


        
        //Display messages by type - email / comment
        if((element.messageType === "comment") || (element.messageType === "email") && (recepient === "null")) {
            
            
            if (element.messageType === type) {
                document.getElementById(displayElement).innerHTML += `<div class="contactComment" id="${commentID}"></div>`
        
                let docDisplay = document.getElementById(commentID)
                
                docDisplay.innerHTML += `
                <div class="commentName"><h2>${element.name} :</h2></div>
                <div class="commentContent"><h4>${element.comment}</h4></div>
                <div class="commentdate"><p>${element.date}</p></div>
                `
                //If email, display a mailTo link
                if (type === "email") {
                    docDisplay.innerHTML += `
                    <div><a href="mailto:${element.email}?Subject=Response%20To%20Your%20Email" target="_top">${element.email}</a></div>
                    <button onclick="deleteMessage(${index})">Delete Message</button>
                    `
                }
                
                document.getElementById(displayElement).innerHTML += `<br></div>`
            }
        } else {
            
            if (element.messageType === type && element.contact === recepient) {

                document.getElementById(displayElement).innerHTML += `<div class="contactComment" id="${commentID}"></div>`
    
                let docDisplay = document.getElementById(commentID)
                
                docDisplay.innerHTML += `
                <div>${element.name}:</div>
                <div>${element.comment}</div>
                <div>${element.date}</div>
                `
                //If email, display a mailTo link
                if (type === "email") {
                    docDisplay.innerHTML += `
                    <div><a href="mailto:${element.email}?Subject=Response%20To%20Your%20Email" target="_top">${element.email}</a></div>
                    <button onclick="deleteMessage(${index})">Delete Message</button>
                    `
                }

                document.getElementById(displayElement).innerHTML += `<br></div>`
            }
        }
    }
    
    let commentObjectString = JSON.stringify(commentObjectParse)
    
    localStorage.setItem("commentObjectStored", commentObjectString)
}

// Add new coment from form and add it localStorage 
function getData() {
    
    let v = document.getElementById("select").value
    let w = document.querySelector('input[name="messageType"]:checked').value
    let x = document.getElementById("name").value;
    let y = document.getElementById("email").value;
    let z = document.getElementById("comentContent").value;
    
    newComment = {
        "contact": v,
        "messageType": w,
        "name": x,
        "email": y,
        "comment": z,
        "date": Date().substring(0, 24)
    }

    //Add to beggining of comment array
    let commentObjectParse = JSON.parse(localStorage.getItem("commentObjectStored"))
    commentObjectParse.unshift(newComment)
    
    //store array in localStorage
    let commentObjectString = JSON.stringify(commentObjectParse)
    localStorage.setItem("commentObjectStored", commentObjectString)
    document.getElementById("contactForm").reset()
    hideSelector()

    //Repopulate comment section
    displayMessages("comment", "commentOutput", "null")
}

function myFunction() {
    // Get the snackbar DIV
    let x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// Hide Contact Selector
hideSelector = function () {
    document.getElementById("selectDiv").style.display = "none"
}

// Determines if there are stored coments and displays them or creates a localStorage item
if (localStorage.getItem("commentObjectStored") === null) {
    localStorage.setItem("commentObjectStored", JSON.stringify(testArray))
} else {
    displayMessages("comment", "commentOutput", "null")
}

document.getElementById("messageButton").onclick = function() {document.getElementById("selectDiv").style.display = "block"}

document.getElementById("commentButton").onclick = function() {hideSelector()}