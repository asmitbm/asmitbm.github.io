$.get("/assets/html/navigation.html", function(data){
    $("#navbar").replaceWith(data);
});

$.get("/assets/html/loader.html", function(data){
  $("#loading").replaceWith(data);
});
$(window).on('load', function(){
  setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( ".loader-wrapper" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( ".loader-wrapper" ).remove(); //makes page more lightweight 
  });  
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

// Wrap every letter in a span
var textWrapper = document.querySelector('.aboutme .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var animation3 = anime.timeline({loop: 1})
  .add({
    targets: '.aboutme .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 2000,
    autoplay: false
  }).add({
    targets: '.aboutme .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 2150,
    offset: '-=600',
    delay: (el, i) => 215 + 15 * i,
    autoplay: false
  });

  //rotating words TagCloud https://www.cssscript.com/animated-sphere-tag-cloud/  https://github.com/mcc108/TagCloud

  const myTagsa = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C++', 'React',
    'Python', 'Java', 'git',
    'django', 'Node.js', 'OpenCV',
    'GCP', 'MySQL', 'jQuery',
];

var tagCloud = TagCloud('.content', myTagsa,{

  // radius in px
  radius: 300,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  
  // interact with cursor move on mouse out
  keep: true
  
});

var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;

const myTagspa = [
  'JavaScript', 'CSS', 'HTML',
  'C', 'C++', 'React',
  'Python', 'Java', 'git',
  'django', 'Node.js', 'OpenCV',
  'GCP', 'MySQL', 'jQuery',
];

var tagCloud = TagCloud('.content_phone', myTagspa,{

// radius in px
radius: 200,

// animation speed
// slow, normal, fast
maxSpeed: 'fast',
initSpeed: 'fast',

// 0 = top
// 90 = left
// 135 = right-bottom
direction: 135,

// interact with cursor move on mouse out
keep: true

});

var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
var random_colorp = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content_phone').style.color = random_colorp;

document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/150
        const y = (window.innerHeight - e.pageY*speed)/200
        
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.myskills .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

var animation4 = anime.timeline({loop: 1})
  .add({
    targets: '.myskills .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    autoplay: false
  })
  .add({
    targets: '.myskills .line',
    translateX: [0, document.querySelector('.myskills .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 800,
    autoplay: false
  }).add({
    targets: '.myskills .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 350,
    offset: '-=775',
    delay: (el, i) => 30 * (i+1),
    autoplay: false
  });

function getScrollPercent() {
    var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
  }
 

window.addEventListener('scroll', () => {
const percentage = getScrollPercent();
animation4.seek(animation4.duration * (percentage * 0.018));
});
//Progress Bars
let progress = document.getElementById('progressbar');
        window.onscroll = function () {
            let totalHeight = document.body.scrollHeight + window.innerHeight;
            let progressHeight = (window.pageYOffset / totalHeight) * 28.1;
            progress.style.display = 'revert';
            progress.style.height = progressHeight + "%";
            let flowBar1 = document.getElementById('fe-bar');
            let flowBar2 = document.getElementById('be-bar');
            let flowBar3 = document.getElementById('cp-bar');
            let flowBar4 = document.getElementById('uiux-bar');
            if (progressHeight > 3) {

                flowBar1.style.animationName = 'animateskillbar11';
                flowBar2.style.animationName = 'animateskillbar22';
                flowBar3.style.animationName = 'animateskillbar33';
                flowBar4.style.animationName = 'animateskillbar44';
            }
            else {
                flowBar1.style.animationName = 'animateskillbar1';
                flowBar2.style.animationName = 'animateskillbar2';
                flowBar3.style.animationName = 'animateskillbar3';
                flowBar4.style.animationName = 'animateskillbar4';
            }

        }
