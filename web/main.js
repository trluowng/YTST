const menuBar = document.querySelector(".menu-bar")
menuBar.addEventListener("click",function(){
    menuBar.classList.toggle("active")
    document.querySelector(".menu-items").classList.toggle("active")
})
const Button=document.querySelector(".button")
Button.addEventListener("click",function(){
    alert("dmm con chó ngu test nút")
})