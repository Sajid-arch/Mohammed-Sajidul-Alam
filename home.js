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

// Auto Text Typing Effect Code Start 


const textArray = ["Web Developer.", "Freelancer."];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100; // Base typing speed
let deletingSpeed = 50; // Base deleting speed
let pauseTime = 1500; // Pause time before deleting (1.5 seconds)

function typeEffect() {
    const element = document.getElementById("auto-text");
    let currentText = textArray[textIndex];
    let displayedText = currentText.substring(0, charIndex);

    element.innerHTML = displayedText + "<span class='cursor'>|</span>"; // Add cursor

    if (!isDeleting && charIndex < currentText.length) {
        charIndex++;
        setTimeout(typeEffect, typingSpeed);
    } 
    else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, deletingSpeed);
    } 
    else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            textIndex = (textIndex + 1) % textArray.length;
        }
        setTimeout(typeEffect, pauseTime);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Auto Text Typing Effect Code End





// Moving Border Effect Code Start 



    const handleOnMouseMove = e => {
    const { currentTarget: target } = e;


    const rect = target.getBoundingClientRect(),

    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

    
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
    }



    for(const otherEx of document.querySelectorAll(".other-ex")) {
        otherEx.onmousemove = e => handleOnMouseMove(e);
    }


    // Moving Border Effect Code End 



   // For Counting Effect Start


  // For Works Counting Effect
    
    let works = document.querySelectorAll(".num");
    let work = document.querySelector(".work");
    let workCounterStarted = false;

  // For Skills Counting Effect
    
    let skills = document.querySelectorAll(".skill-num");
    let skill = document.querySelector(".skills");
    let skillCounterStarted = false;

    // Logics for both Counting Effects

    window.onscroll = () => {

      // Logic for Works Counting Effect


      if(work && !workCounterStarted){
        let scrollPosition = window.scrollY || window.pageYoffset;
        let triggerpoint = work.offsetTop - innerHeight;
        
        if(scrollPosition >= triggerpoint){
          workCounterStarted = true;

          works.forEach((e) => {
            let start = 0;
            let end = e.dataset.num;

            let count = setInterval(() => {
            start++;
            e.textContent = start;
            if(start == end) {
            clearInterval(count);
        }
      }, 2500 / end)
          })
        }
      }

      // Logic for Skills counting Effect

      if(skill && !skillCounterStarted){
        let scrollPosition = window.scrollY || window.pageYoffset;
        let triggerpoint = skill.offsetTop - innerHeight;
        
        if(scrollPosition >= triggerpoint){
          skillCounterStarted = true;

          skills.forEach((e) => {
            let start = 0;
            let end = e.dataset.num;

            let count = setInterval(() => {
            start++;
            e.textContent = start;
            if(start == end) {
            clearInterval(count);
        }
      }, 2500 / end)
          })
        }
      }
    }


    // For Counting Effect End
    
    



  
    
    

// For Skills Counting Effect End





