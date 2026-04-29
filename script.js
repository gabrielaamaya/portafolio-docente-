window.addEventListener("scroll", function(){

let header = document.querySelector("header");

if(window.scrollY > 50){
header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
}else{
header.style.boxShadow = "none";
}

});