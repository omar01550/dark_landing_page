//show and remove nanvbar


let bars=document.querySelector(".fa-bars");
let navBar=document.querySelector("nav");



bars.addEventListener("click",function(){

    navBar.classList.toggle("show")

    if(navBar.classList.contains("show")){
       bars.style.color="white";
    }else{
       bars.style.color="black";
    }
})


let scrollToTop=document.querySelector(".scroll-to-top");


scrollToTop.onclick=function(){
    scroll();
}

window.addEventListener("scroll",function(){
  if(window.scrollY>=600){
      scrollToTop.style.display="block" ;
  }else{
    scrollToTop.style.display="none" ;
  }
})




function scroll(){
   window.scrollTo({
     top:0,
     left:0,
     behavior:"smooth"
   })
};

//sections animation
   //second section
let sectionSecond=document.querySelector(".second");
let cards=document.querySelectorAll(".second .card");


window.addEventListener("scroll",function(){
   if(window.scrollY >= sectionSecond.offsetTop-190){
      cards.forEach((card)=>{
         card.style.transform="translateY(0)";
      })
   }
})



//section three
let sectionThree=document.querySelector(".three");
let img=document.querySelector(".three img");
let content=document.querySelector(".three .content");

window.addEventListener("scroll",function(){
   if(window.scrollY >= sectionSecond.offsetTop-130){
      content.style.transform="translateX(0)";
      img.style.transform="translateX(0)";
   }
})
