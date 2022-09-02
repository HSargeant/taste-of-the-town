const deleteBtn = document.querySelectorAll('.delete')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
 
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.querySelectorAll('.modal');
    M.Modal.init(modal,"dismissible");
 
    var formsSelect = document.querySelectorAll('select');
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
 
async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
 
async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }

}