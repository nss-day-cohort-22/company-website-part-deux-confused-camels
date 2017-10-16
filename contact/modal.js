//Login Validation
login = function() {
    if (document.getElementById("adminLogin").elements[0].value === "camiller" && document.getElementById("adminLogin").elements[1].value === "password") {
        document.getElementById("modalTitle").innerHTML = "Emails"
        document.getElementById("modalContent").innerHTML = ""
        displayMessages("email", "modalContent")
    } else {
        document.getElementById("loginFailure").innerHTML = "Username or Password are invalid"
    }
}

//Modal functionality
modal = function() {
    document.getElementById('modal').style.display = "block"

    document.getElementById("modalTitle").innerHTML = "Admin Login"

    document.getElementById("modalContent").innerHTML = `
    <form id="adminLogin">
        <input type="text" name="userName" id="userName" value="User Name">
        <input type="text" name="password" id="password" value="Password">
    </form>
    <button onclick="login()">Login</button>
    <div id="loginFailure"></div>
    `
}

document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById('modal').style.display = "none";
}

deleteMessage = function (commentIndex) {
    let commentObjectParse = JSON.parse(localStorage.getItem("commentObjectStored"))
    commentObjectParse.splice(commentIndex, 1)
    localStorage.setItem("commentObjectStored", JSON.stringify(commentObjectParse))
    displayMessages("email", "modalContent")
}