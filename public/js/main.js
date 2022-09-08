const deleteBtn = document.querySelectorAll('.delete')
const editBtn = document.querySelectorAll('.edit')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
var formsSelect = document.querySelectorAll('select');
const addReviewButton = document.querySelector('#addReview')
const modal = document.querySelector('#modalReview')
const editModal = document.querySelector('#modalEdit')

// addReviewButton.addEventListener('click',addreviewModal)

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteReview)
})
Array.from(editBtn).forEach((el)=>{
    el.addEventListener('click', openEditModal)
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

      const review = this.parentNode.parentNode.dataset.id ? this.parentNode.parentNode.dataset.id.trim() :this.parentNode.dataset.id.trim()
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
  }
}
 
//Add carousel
document.querySelectorAll(".carousel-local").forEach((carousel) => {
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


function addreviewModal(){
  modal.style.display="block"
}
function openEditModal(){
  console.log("click")
  editModal.style.display="block"
}

// When the user clicks anywhere outside of the modal, close it
function closeModal(){
    

  modal.style.display = "none"

  editModal.style.display = "none"

}
window.onclick = function(event) {
  if (event.target == modal || event.target == editModal ) {
      closeModal()
  }
}

// document.querySelector('.close-btn').addEventListener('click',closeModal)


//filter
let input = document.querySelector('#search')
input.addEventListener('keyup',filterCards)

function filterCards(){
  let section=document.querySelectorAll('.review-card')
  let txtValue;
  let filter = input.value.toUpperCase();
  let location = document.querySelectorAll('.template-info_location')

  for (i = 0; i < location.length; i++) {
    txtValue=location[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      section[i].style.display = "";
    } else {
        section[i].style.display = "none";
    }
  }
}