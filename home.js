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
    
    // 1. Setup the Observer Options
const observerOptions = {
    threshold: 0.2 // Starts when 20% of the element is visible
};

// 2. The Animation Function
const startCounting = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const container = entry.target;
            // Find all numbers within this specific container
            const counters = container.querySelectorAll('.num, .skill-num');

            counters.forEach((e) => {
                let start = 0;
                let end = parseInt(e.dataset.num);
                let duration = 2500; // Total time in ms
                
                // Safety check: if end is 0, don't interval
                if(end === 0) return e.textContent = 0;

                let count = setInterval(() => {
                    start++;
                    e.textContent = start;
                    if (start == end) {
                        clearInterval(count);
                    }
                }, duration / end);
            });

            // 3. Stop watching once the animation has triggered
            observer.unobserve(container);
        }
    });
};

// 4. Create the Observer
const counterObserver = new IntersectionObserver(startCounting, observerOptions);

// 5. Tell it what to watch
const workSection = document.querySelector(".work");
const skillSection = document.querySelector(".skills");

if (workSection) counterObserver.observe(workSection);
if (skillSection) counterObserver.observe(skillSection);


    // For Counting Effect End
    
    



  
    
    

// For Skills Counting Effect Start


const progressBars = document.querySelectorAll('.progress-bar div.count');

// 1. Define the "Watchman" (The Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // 2. Check if the bar is visible on screen
        if (entry.isIntersecting) {
            const bar = entry.target; // This is the specific bar that scrolled into view
            startAnimation(bar);      // Run your animation function
            observer.unobserve(bar);  // Stop watching this bar once it's started (so it doesn't repeat)
        }
    });
}, { threshold: 0.5 }); // 0.5 means start when 50% of the bar is visible

// 3. Tell the Observer which elements to watch
progressBars.forEach(bar => {
    observer.observe(bar);
});

// 4. Wrap your original logic in a function
function startAnimation(bar) {
    const target = parseInt(bar.getAttribute('data-target'));
    const span = bar.querySelector('span');
    let currentCount = 0;

    // Trigger width
    bar.style.width = target + '%';

    // Start counter
    const updateCounter = () => {
        const increment = target / 100; 
        if (currentCount < target) {
            currentCount += increment;
            span.innerText = Math.ceil(currentCount) + "%";
            requestAnimationFrame(updateCounter);
        } else {
            span.innerText = target + "%";
        }
    };
    updateCounter();
}






// For Skills Counting Effect End


// For Latest Services Info Box Start


const handleOnMouseMove2 = e => {
    const { currentTarget: target } = e;


    const rect = target.getBoundingClientRect(),

    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

    
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
    }



    for(const otherEx of document.querySelectorAll(".ls-info")) {
        otherEx.onmousemove = e => handleOnMouseMove(e);
    }




// For Latest Services Info Box End


