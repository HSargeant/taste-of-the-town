const deleteBtn = document.querySelectorAll('.delete')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
var formsSelect = document.querySelectorAll('select');

//Modal form select
//M.FormSelect.init(formsSelect);
//
document.addEventListener('DOMContentLoaded', function() {
   const modal = document.querySelectorAll('.modal');
   M.Modal.init(modal,"dismissible");

   const formsSelect = document.querySelectorAll('select');
   M.FormSelect.init(formsSelect);


 });

  
 

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteReview)
})
 
Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})
 
Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

//added a "windowConfirm" variable to open a confirmation window for deleting. 
async function deleteReview(){
    let windowConfirm = confirm("Are you sure you want to delete this review?")
    if (windowConfirm == true) {
    const review = this.parentNode.parentNode.parentNode.parentNode.dataset.id
        console.log(review)
 
    try{
        const response = await fetch('reviews/deleteCheckin', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'reviewId': review
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}}
 
//Add carousel
document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
      return `<span class="carousel__button"></span>`;
    });
  
    carousel.insertAdjacentHTML(
      "beforeend",
      `
          <div class="carousel__nav">
              ${buttonsHtml.join("")}
          </div>
      `
    );
  
    const buttons = carousel.querySelectorAll(".carousel__button");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        // un-select all the items
        items.forEach((item) =>
          item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("carousel__button--selected")
        );
  
        items[i].classList.add("carousel__item--selected");
        button.classList.add("carousel__button--selected");
      });
    });
  
    // Select the first item on page load
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
  });

