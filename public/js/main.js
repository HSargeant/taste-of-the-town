const deleteBtn = document.querySelectorAll('.delete')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
var formsSelect = document.querySelectorAll('select');
M.FormSelect.init(formsSelect);

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
 
async function deleteReview(){
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
}
 
async function updateReview(){
    const review = document.querySelector('.edit').id
    console.log(review)
    try{
        const response = await fetch('reviews/updateCheckin', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'review': review
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}