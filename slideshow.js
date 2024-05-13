

//https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_fading

let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.querySelectorAll(".project aside img");
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = 0;  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.opacity = 100;  
  setTimeout(carousel, 4500);    
}