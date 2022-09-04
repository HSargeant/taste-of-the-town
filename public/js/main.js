const deleteBtn = document.querySelectorAll('.delete')
const deleteBtn2 = document.querySelectorAll('.delete2')
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
Array.from(deleteBtn2).forEach((el)=>{
    el.addEventListener('click', deleteReview2)
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
    if (windowConfirm) {
    const review = this.parentNode.parentNode.parentNode.parentNode.dataset.id || this.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.id
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
 
// async function updateReview(){
//     const review = document.querySelector('.edit').id
//     console.log(review)
//     try{
//         const response = await fetch('reviews/updateCheckin', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'review': review
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }