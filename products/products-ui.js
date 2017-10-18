//pulls product list from local storage
let list = (JSON.parse(localStorage.getItem("productsBrowserDB"))).products

//pageList will hold the particular items for each page depending on which page the user is on
let pageList = [];
let currentPage = 1;
let numberPerPage = 4
let numberOfPages = 1
let pageNumberButtons = document.getElementsByClassName("paginatorPageNumber")

//this function loads the initial list on the first page
function load(){
    numberOfPages = getNumberOfPages();
    loadList()
}

// calculate number of pages by dividing the total number of items by the number of items per page
function getNumberOfPages() {
    return Math.ceil(list.length / numberPerPage);
}

// next page will add one to the current page and load that list. nextPage is called on the onclick on the next button in the div with the id "pagination-bar" in products.html
function nextPage() {
    currentPage += 1;
    loadList();
}

// previous page will subtract one from the current page and load that list. previousPage is called on the onclick on the previous button in the div with the id "pagination-bar" in products.html
function previousPage() {
    currentPage -= 1;
    loadList();
}

// allows user to jump to a particular page number. pageJump is called on the onclick on the page buttons in the div with the id "pagination-bar" in products.html
function pageJump(a) {
    currentPage = a
    loadList()
}

// this will calculate which items appear on each page
function loadList() {
    
    // Enable / disable page button
    for (let index = 0; index < pageNumberButtons.length; index++) {
        if (currentPage == pageNumberButtons[index].value){
            pageNumberButtons[index].disabled = true
        } else {
            pageNumberButtons[index].disabled = false
        }
        
    }

    /*start point on array is one less than the page number multiplied by 4 (the number of items per page)*/
    let begin = ((currentPage - 1) * numberPerPage);
    /*end point is the beginning point plus 4 (the number of items per page)*/
    let end = begin + numberPerPage;

    /*this will pull the correct 4 items from the array for that page */
    pageList = list.slice(begin, end);
    drawList();    // draws out our data
    check();         // determines the states of the pagination buttons
}

// innerHTML to write to DOM for each page
function drawList() {
    
    document.getElementById("products-ul").innerHTML = ""

    for (r = 0; r < pageList.length; r++) {
        let currentObject = pageList[r]

        let stockSelectOptions = ``;
        for (var s = 1; s <= currentObject.select; s++) {
            stockSelectOptions += `<option value="${s}">${s}</option>`;
        }
        
        document.getElementById("products-ul").innerHTML += `
        <li class="products-li d-flex flex-row pt-3 pb-3">
            <img class="product-img" src="${currentObject.image}" alt="${currentObject.name}">
            <div class="side-content d-flex flex-column pt-3 container-fluid">
                <p class="product-name">${"Line: " + currentObject.name}</p>
                <p class="product-price">${"Price: $" + currentObject.price}</p>
                <p class="product-description">${"Description: " + currentObject.description}</p>
                <p class="product-stock">${"Current Stock: " + currentObject.stock}</p>
                <select class="stock-select" id="${currentObject.name.replace(/ /g, "") + "Select"}" name="stock-select">${stockSelectOptions}</select>
                <button class="buy" id="${currentObject.name.replace(/ /g, "")}" onclick="productModal()">Buy Now</button>
            </div>
        </li>
        `
    }
}


//this hides the previous button on the first page and next arrow on the last page. 
function check() {

//if current page is equal to 1, then set value of hidden on the previous button to true, if not set it to false
    document.getElementById("next").disabled = currentPage === numberOfPages ? true : false;
 //if current page is the last page, then set the value of hidden on the next button to true, if not, set it to false
    document.getElementById("previous").disabled = currentPage === 1 ? true : false;
}

function productModal() {
    document.getElementById("modal").style.display = "block"
}

document.getElementById("closeModal").onclick = function() {
    document.getElementById('modal').style.display = "none";
}

window.onload = load()