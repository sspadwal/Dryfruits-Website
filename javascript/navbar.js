


// --------------------menu------------------


const menu = document.querySelector('.menu')
const openMenuBtn= document.querySelector(".open-menu-btn")
const closeMenuBtn= document.querySelector(".close-menu-btn")
// console.log(menu)    
// console.log(openMenuBtn)
console.log(closeMenuBtn);
[openMenuBtn,closeMenuBtn].forEach(btn => {
    btn.addEventListener('click', ()=>{

        console.log(btn);
         menu.classList.toggle('open');
         menu.style.transition=" transform 0.5s ease"

    }) 

});

menu.addEventListener("transitioned", function(){
    this.removeattribute("style");
})

menu.querySelectorAll(".dropdown > i ").forEach((arrow)=>{


    arrow.addEventListener('click',function(){
        this.closest(".dropdown").classList.toggle("active")
    })

})