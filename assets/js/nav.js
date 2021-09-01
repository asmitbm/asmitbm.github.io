var lastTop;

function stopScrolling() {
    lastTop = $(window).scrollTop();      
    $('body').addClass( 'noscroll' )          
         .css( { top: -lastTop } )        
         ;            
}

function continueScrolling() {                    

    $('body').removeClass( 'noscroll' );      
    $(window).scrollTop( lastTop );       
}                           

AOS.init();

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });


  //change button icon
 /* document.querySelector('button').addEventListener('click', function() {
    const icon = this.querySelector('i');
  
    if (icon.classList.contains('fa-sun-o')) {
      icon.classList.remove('fa-sun-o');
      icon.classList.add('fa-moon-o');
    } else {
      icon.classList.remove('fa-moon-o');
      icon.classList.add('fa-sun-o');
    }
  });*/

/*const toggle = document.getElementById("toggle");
const theme = window.localStorage.getItem("theme");*/

/* checks if the theme stored in localStorage is dark
if yes apply the dark theme to the body */
//if (theme === "dark") document.body.classList.add("dark");

// event listener stops when the change theme button is clicked
/*toggle.addEventListener("click", () => {
   document.body.classList.toggle("dark");
   if (theme === "dark") {
     window.localStorage.setItem("theme", "light");
   } else window.localStorage.setItem("theme", "dark");
});*/