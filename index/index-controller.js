 //P O P U L A T E
//define our content as a parse of local storage. (getting the glasses info)
const indexPage = JSON.parse(localStorage.getItem("homePage"))
//defining indexEl to be used to GET the class stored in the html div
const indexEl = document.getElementsByClassName("homePage")[0]
//for in loop to go through each DB entry and pump out its info into the page
for (var key in indexPage) {
        const currentItem = indexPage[key];
        //for loop nested in the for in loop, to iterated through and define each detail
        for (var i = 0; i < currentItem.length; i++) {
            var detail = currentItem[i];           
// The meat and potatoes, the raw HTML spit out after the loop has iterated its info. All plugged in to the HTML div of course.
indexEl.innerHTML += `
  <section class="${key}">      
    <div class="img_container rounded">
       <img src="${detail.picture}" class="rounded" alt="Picture of chicken Glasses" height="600" width="900">
       <a href="${detail.button}" class="btn btn-dark bg-warning button">Shop Chicken Shades</a>  
    </div>
<br>
       <h1>${detail.title}</h1>
       <p class=bodyWrap>${detail.body}</p>
<br>
        <h4>A small video demonstrating the history of the chicken sunglasses:</h4>
        <iframe class="pb-5" width="560" height="315" src="${detail.video}" frameborder="0" allowfullscreen></iframe>
    
            `    
        }
}
