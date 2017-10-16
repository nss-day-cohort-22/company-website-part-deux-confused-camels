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
        let changedStock = this.previousElementSibling.previousElementSibling; //target the stock section to adjust the html
        const updateProductsDB = JSON.parse(localStorage.getItem("productsBrowserDB")); //gets the products db from browser storage
        for (let p in updateProductsDB) {//go through the object of products from browser storage
        let currentArray = updateProductsDB[p]; //object contains arrays.  loop through for comparisson.  see below
        
        for (var j = 0; j < currentArray.length; j++) {
           
            var productObject = currentArray[j]; 
            
            if (buttonClicked === productObject.name) { //if the id of the clicked button matches the name of section it is in (see controller) execute functions
                let newSelectOptions = ``;
                newStock = productObject.stock;
                newStock -= howMany; //subtract select box selection from stock of the product object
                productObject.stock = newStock;
                changedStock.innerHTML = newStock; //update stock on the page
                for (let k = 1; k <= newStock.length; k++) {
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