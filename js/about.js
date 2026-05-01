<<<<<<< HEAD
// Header Hide on Scroll Code Start




let lastScrollY = window.scrollY;
const header1 = document.getElementById("header-1");
const header2 = document.getElementById("header-2");

window.addEventListener("scroll", () =>{

const currentScrollY = window.scrollY;

if(currentScrollY > lastScrollY){
  if(currentScrollY > 100){
    header1.classList.add("hidden");
    header1.classList.remove("visible");

    header2.classList.add("hidden");
    header2.classList.remove("visible");
  }
}

  else{
    if(currentScrollY <= 100){
    header1.classList.add("visible");
    header1.classList.remove("hidden");

    header2.classList.add("hidden");
    header2.classList.remove("visible");
  }

  else{
    header1.classList.add("hidden");
    header1.classList.remove("visible");

    header2.classList.add("visible");
    header2.classList.remove("hidden");
  }
}

lastScrollY = currentScrollY;


});







// const header =document.querySelector("header");
// let lastScrollY = window.scrollY;

// window.addEventListener('scroll', () => {
//   if (window.scrollY > lastScrollY) {
//     // Scrolling down
//     header.style.top = '-15vh'; // Hide
//   } else {
//     // Scrolling up
//     header.style.top = '0'; // Show
//   }
//   lastScrollY = window.scrollY;
// });

// Header Hide on Scroll Code End
=======
// Header Hide on Scroll Code Start




let lastScrollY = window.scrollY;
const header1 = document.getElementById("header-1");
const header2 = document.getElementById("header-2");

window.addEventListener("scroll", () =>{

const currentScrollY = window.scrollY;

if(currentScrollY > lastScrollY){
  if(currentScrollY > 100){
    header1.classList.add("hidden");
    header1.classList.remove("visible");

    header2.classList.add("hidden");
    header2.classList.remove("visible");
  }
}

  else{
    if(currentScrollY <= 100){
    header1.classList.add("visible");
    header1.classList.remove("hidden");

    header2.classList.add("hidden");
    header2.classList.remove("visible");
  }

  else{
    header1.classList.add("hidden");
    header1.classList.remove("visible");

    header2.classList.add("visible");
    header2.classList.remove("hidden");
  }
}

lastScrollY = currentScrollY;


});







// const header =document.querySelector("header");
// let lastScrollY = window.scrollY;

// window.addEventListener('scroll', () => {
//   if (window.scrollY > lastScrollY) {
//     // Scrolling down
//     header.style.top = '-15vh'; // Hide
//   } else {
//     // Scrolling up
//     header.style.top = '0'; // Show
//   }
//   lastScrollY = window.scrollY;
// });

// Header Hide on Scroll Code End
>>>>>>> temp-fix
