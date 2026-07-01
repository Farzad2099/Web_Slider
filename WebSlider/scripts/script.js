let selectedSlide=0;
function changeSlide(slideNumber){
let width=getComputedStyle( document.getElementsByClassName("mySlider")[0]).width;
width=parseInt(width);

let slides= document.getElementsByClassName("slides")[0];
slides.style.marginLeft=-(slideNumber*width)+"px";

let navButtons=document.getElementsByClassName("nav")[0].getElementsByTagName("span");
for(let i=0;i<navButtons.length;i++){
    /*
    navButtons[i].style.backgroundColor="rgba(255,255,255,0.8)";
    navButtons[i].style.borderColor="black";
    navButtons[i].style.borderRadius="50%";
    */
    navButtons[i].classList.remove("activeNavButton");
    selectedSlide=slideNumber;
}        
/*
navButtons[slideNumber].style.backgroundColor="black";
navButtons[slideNumber].style.borderColor="white";
navButtons[slideNumber].style.borderRadius="25%";
*/
navButtons[slideNumber].classList.add("activeNavButton");
}

function next(){
    selectedSlide++;
    if(selectedSlide>3){
        selectedSlide=0;
    }
    changeSlide(selectedSlide);
}

function pre(){
    selectedSlide--;
    if(selectedSlide<0){
        selectedSlide=3;
    }
    changeSlide(selectedSlide);
}
changeSlide(0);

/*
setTimeout(function(){
    changeSlide(2);
},2000);
*/
let interVal=setInterval(function(){
    next();
},2000);

function disableInterval(){
    clearInterval(interVal);
   
}

function enableInterval(){
    interVal=setInterval(next,2000);
    
}