let list = (JSON.parse(localStorage.getItem("productsBrowserDB"))).products
let pageList = new Array();
let currentPage = 1;
let numberPerPage = 4
let numberOfPages = 1
let pageNumberButtons = document.getElementsByClassName("paginatorPageNumber")

function load(){
    numberOfPages = getNumberOfPages();
    loadList()
}

function getNumberOfPages() {
    return Math.ceil(list.length / numberPerPage);
}

function nextPage() {
    currentPage += 1;
    loadList();
}

function previousPage() {
    currentPage -= 1;
    loadList();
}

function pageJump(a) {
    currentPage = a
    loadList()
}

function loadList() {
    for (let index = 0; index < pageNumberButtons.length; index++) {
        if (currentPage == pageNumberButtons[index].value){
            pageNumberButtons[index].disabled = true
        } else {
            pageNumberButtons[index].disabled = false
        }
        
    }

    let begin = ((currentPage - 1) * numberPerPage);
    let end = begin + numberPerPage;

    pageList = list.slice(begin, end);
    drawList();    // draws out our data
    check();         // determines the states of the pagination buttons
}

function drawList() {
    // document.getElementById("list").innerHTML = "";
    
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
                <button class="buy" id="${currentObject.name.replace(/ /g, "")}">Buy Now</button>
            </div>
        </li>
        `
    }
}

function check() {
    document.getElementById("next").hidden = currentPage == numberOfPages ? true : false;
    document.getElementById("previous").hidden = currentPage == 1 ? true : false;
}

window.onload = load()