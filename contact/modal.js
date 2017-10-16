let recepientVar = "null"

//Login Validation
login = function() {
    if (document.getElementById("adminLogin").elements[0].value === "camiller" && document.getElementById("adminLogin").elements[1].value === "password") {
        document.getElementById("modalTitle").innerHTML = "Emails"
        document.getElementById("modalContent").innerHTML = ""
        document.getElementsByClassName("modal-filter")[0].innerHTML = `
        <div>
            <select id="recepientSelecter"> 
                <option value="null" selected>Sort By Recepient :</option> 
                <option value="John" >John- Founder and CEO</option> 
                <option value="Paul">Paul- Product Manager</option>
                <option value="Chris">Chris- Social Media Guru</option>
                <option value="Kristen">Kristen- Outreach Coordinator</option>
            </select>
            <button id="filerRecipient" onclick="filterRecepient()">Filter</button>
        <div>
        `
        displayMessages("email", "modalContent", "null")
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
    displayMessages("email", "modalContent", "null")
}

filterRecepient = function() {
    displayMessages("email", "modalContent", document.getElementById("recepientSelecter").value)
}