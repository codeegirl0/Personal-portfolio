// Show and Hide The Nav List
let closeIcon= document.getElementsByClassName('fa-solid')[0];
let list= document.getElementById('list')
closeIcon.addEventListener('click', ()=>{
    closeIcon.classList.toggle('fa-bars');
    closeIcon.classList.toggle('fa-xmark');
    list.classList.toggle('hide')
    list.classList.toggle('show')
})