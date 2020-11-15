var tab=document.querySelectorAll('.side');
for(i=0; i<tab.length; i++){
    tab[i].style.display="none";
}
window.onload=function(){
    document.querySelectorAll(".side").forEach(elem =>{ 
        elem.parentElement.addEventListener('click', function(){
            if(elem.style.display=="block"){
                elem.style.display="none"
                
            }else{
                elem.style.display="block"
                
            }
        })        
    })
}
    
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector(".navigation");
var header = document.getElementById("header");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
var accueil = document.querySelector(".accueil");
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    accueil.style.marginLeft='20%'
  } else {
    navbar.classList.remove("sticky");
    accueil.style.marginLeft='0%'
  }
} 
