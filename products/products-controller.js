const retrievedProductsDB = JSON.parse(localStorage.getItem("productsBrowserDB"));

const productsHTML = document.getElementById("products-ul");

for (let array in retrievedProductsDB) {
    let currentArray = retrievedProductsDB[array];
    for (let i = 0; i < 4; i++) {
        let currentObject = currentArray[i];
        let stockSelectOptions = ``;
        for (var s = 1; s <= currentObject.select; s++) {
            stockSelectOptions += `<option value="${s}">${s}</option>`;
        }
        productsHTML.innerHTML += `
            <li class="products-li d-flex flex-row pt-3 pb-3">
            <div>    
            <img class="product-img" src="${currentObject.image}" alt="${currentObject.name}">
            </div>
            <div class="side-content d-flex flex-column pt-3 container-fluid">
                <p class="product-name">${"Line: " + currentObject.name}</p>
                <p class="product-price">${"Price: $" + currentObject.price}</p>
                <p class="product-description">${"Description: " + currentObject.description}</p>
                <p class="product-stock">${"Current Stock: " + currentObject.stock}</p>
                <label class="product-select-label" for="#${currentObject.name.replace(/ /g, "")}">How many you want?</label>
                <select class="stock-select" id="${currentObject.name.replace(/ /g, "") + "Select"}" name="stock-select">${stockSelectOptions}</select>
                <button class="buy" id="${currentObject.name.replace(/ /g, "")} onclick="productModal()">Buy Now</button>
                </div>
            </li>
        `  
    }
}

