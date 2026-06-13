let pic = document.querySelector("#img")
let btn1 = document.querySelector("#onBtn")
let btn2 = document.querySelector("#offBtn")

btn1.addEventListener("click" , () => {
     pic.src = "images/image2.jpeg"
  
})
btn2.addEventListener("click" , () => {
     pic.src = "images/image1.jpeg"  
})