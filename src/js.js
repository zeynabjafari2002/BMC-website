var prev=document.querySelector(".prev");
var next=document.querySelector(".next");
var appleSlide=document.querySelector(".apple-slide");
var samsungSlide=document.querySelector(".samsung-slide");
next.addEventListener("click",function(){
    samsungSlide.classList.toggle("hidden");
    appleSlide.classList.toggle("hidden")
})
prev.addEventListener("click",function(){
    appleSlide.classList.toggle("hidden");
    samsungSlide.classList.toggle("hidden")
})

// input
var prevInput=document.querySelector(".prev-input");
var nextInput=document.querySelector(".next-input");
prevInput.addEventListener("click",function(){
    appleSlide.classList.remove("hidden");
    samsungSlide.classList.add("hidden");
})
nextInput.addEventListener("click",function(){
    appleSlide.classList.add("hidden");
    samsungSlide.classList.remove("hidden");
})



//  nav list
var liList=document.getElementById("hidden")
function removeClassName(){
    liList.classList.remove("hidden")
}
function addClassName(){
    liList.classList.add("hidden")
}





// back to top
var toTop=document.querySelector(".to-top");
window.addEventListener("scroll" , function (){
    if(this.window.pageYOffset>500){
        toTop.classList.add("fixed");
    }
    else{
        toTop.classList.remove("fixed")
    }
})
