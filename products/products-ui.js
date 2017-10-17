let buttons = document.getElementsByClassName("buy");
let modalToChange = document.getElementById("modal");
let closeButton = document.getElementById("closeModal");


// $("button").click(function(){
//     const updateProductsDB = JSON.parse(localStorage.getItem("productsBrowserDB"));
//     let currentButton = $(this).val("id");
//     console.log(currentButton);
//     $("#modal").css("display", "block");
// });


for (let i = 0; i < buttons.length; i++) {//array is returned in buttons variable above - loop through all buttons with class "buy"
    let currentItem = buttons[i]; 
    currentItem.addEventListener("click", function(){//listen for a buy button to be clicked
        let buttonClicked = this.id; //specific id of the clicked button is stored 
        let howMany = this.previousElementSibling.value; //get the value of the select box option selected for the clicked button
        let newSelectBox = this.previousElementSibling; //target the select box to adjust it's html
        console.log(newSelectBox);
        let changedStock = this.previousElementSibling.previousElementSibling; //target the stock section to adjust the html
        const updateProductsDB = JSON.parse(localStorage.getItem("productsBrowserDB")); //gets the products db from browser storage
        for (let p in updateProductsDB) {//go through the object of products from browser storage
        let currentArray = updateProductsDB[p]; //object contains arrays.  loop through for comparisson.  see below
        
        for (var j = 0; j < currentArray.length; j++) {
           
            var productObject = currentArray[j]; //object containing the product 
            
            if (buttonClicked === productObject.name) { //if the id of the clicked button matches the name of section it is in (see controller) execute functions
                let newStock = productObject.stock;
                newStock -= howMany; //subtract select box selection from stock of the product object
                productObject.stock = newStock; //updates the value to be sent back to DB
                changedStock.innerHTML = newStock; //update stock on the page
                let newSelect = productObject.select; //old number of select options to be updated
                newSelect -= howMany; //update by subtracting selected amount            
                productObject.select = newSelect; //update data to be sent back to DB
                let newSelectOptions = ``;//create a variable to hold the newly created select options
                for (let k = 1; k <= newSelect; k++) {
                    newSelectOptions += `<option value="${k}">${k}</option>`;
                }
                newSelectBox.innerHTML = newSelectOptions;
                const newData = JSON.stringify(updateProductsDB)
                localStorage.setItem("productsBrowserDB", newData);
            }
        }   
        }
    });  
    
}    
 

// closeButton.onclick = function() {
//     modalToChange.style.display = "none";
// }