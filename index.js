const hide=document.querySelector(".fa");
const navLinks=document.querySelector(".nav-links")
const show =document.querySelector(".fa-bars")

hide.addEventListener("click",()=>{
    navLinks.style.right="-200px"
})
show.addEventListener("click",()=>{
    navLinks.style.right="0px"
})
