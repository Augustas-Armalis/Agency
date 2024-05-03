// Navigation Menu

document.addEventListener("DOMContentLoaded", function () {
  // Disable scrolling
  document.body.style.overflow = "hidden";

  // Re-enable scrolling after 4 seconds
  setTimeout(function () {
    document.body.style.overflow = "auto";
  }, 4000);
});


window.onload = function () {
  const bars = document.querySelector(".bars");
  const menu = document.querySelector(".menu");
  const navItems = document.querySelectorAll(".navigation-item");
  let menuOpen = false; // Track if the menu is open
  let lenisInstance; // Track the Lenis instance
  let menuOpen = false;
  let lenisInstance;

  // Function to initialize the Lenis instance and its scroll event handling
  function initializeLenis() {
    lenisInstance = new Lenis();
    lenisInstance.on('scroll', (e) => {
@@ -31,14 +24,12 @@ window.onload = function () {
    requestAnimationFrame(raf);
  }

  // Delay the initialization of Lenis by 5 seconds
  setTimeout(initializeLenis, 5000);

  bars.addEventListener("click", function (e) {
    this.classList.toggle("active");
    menuOpen = !menuOpen; // Toggle the menu state
    menuOpen = !menuOpen;
    if (menuOpen) {
      // Code for opening navigation bar
      gsap.to(".menu", {
        duration: 1,
        display: "flex",
@@ -63,15 +54,12 @@ window.onload = function () {
          });
        }
      });
      // Disable scrolling when menu is open
      document.body.style.overflow = 'hidden';
      // Destroy the Lenis instance when the menu is open
      if (lenisInstance) {
        lenisInstance.destroy();
        lenisInstance = null;
      }
    } else {
      // Code for closing navigation bar
      gsap.to(".navigation-item", {
        duration: 0.5,
        y: "-100%",
@@ -94,15 +82,12 @@ window.onload = function () {
          });
        }
      });
      // Enable scrolling when menu is closed
      document.body.style.overflow = 'auto';
      // Reinitialize Lenis when the menu is closed
      initializeLenis();
    }
  });
};

// Split Animation
gsap.from(".split", {
  yPercent: 100,
  duration: 0.5,
@@ -119,7 +104,6 @@ gsap.from(".split", {
  }
});

// Agency A Animation
gsap.set(".agency-a", { x: -130 });
gsap.to(".agency-a", {
  x: 0,
@@ -135,7 +119,6 @@ gsap.to(".agency-a", {
  }
});

// Plans Animation
gsap.set(".plans", { x: -130 });
gsap.to(".plans", {
  x: 0,
@@ -151,7 +134,6 @@ gsap.to(".plans", {
  }
});

// Bars Animation
gsap.set(".bars", { x: 100 });
gsap.to(".bars", {
  x: 0,
@@ -167,7 +149,6 @@ gsap.to(".bars", {
  }
});

// Agency A1 Animation
gsap.set(".agency-a1", { x: -130 });
gsap.to(".agency-a1", {
  x: 0,
@@ -183,7 +164,6 @@ gsap.to(".agency-a1", {
  }
});

// Bars1 Animation
gsap.set(".bars1", { x: 270 });
gsap.to(".bars1", {
  x: 0,
@@ -199,7 +179,6 @@ gsap.to(".bars1", {
  }
});

// Land1 Animation
gsap.from(".land1", {
  yPercent: 100,
  duration: 0.5,
@@ -215,7 +194,6 @@ gsap.from(".land1", {
  }
});

// Land2 Animation
gsap.from(".land2", {
  yPercent: 100,
  duration: 0.5,
@@ -235,7 +213,6 @@ gsap.from(".land2", {
  }
});

// Land3 Animation
gsap.from(".land3", {
  yPercent: 100,
  duration: 0.5,
@@ -251,7 +228,6 @@ gsap.from(".land3", {
  }
});

// Shiner-Grider1 Animation
gsap.from(".shiner-grider1", {
  yPercent: -100,
  duration: 1,
@@ -267,7 +243,6 @@ gsap.from(".shiner-grider1", {
  }
});

// Shiner-Grider2 Animation
gsap.from(".shiner-grider2", {
  xPercent: -100,
  duration: 1,
@@ -283,44 +258,37 @@ gsap.from(".shiner-grider2", {
  }
});


// Fade In Background Video
const video = document.getElementById('bgVideo');
gsap.set(video, { opacity: 0 });
const fadeInAnimation = () => {
  gsap.to(video, { duration: 2, opacity: 1, ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)" });
};
const delay = 5; // Delay in seconds
const delay = 5;
gsap.delayedCall(delay, fadeInAnimation);

// Fade In Arrow
const arrow = document.querySelector('.arrow');
gsap.set(arrow, { opacity: 0 });
const fadeInArrow = () => {
  gsap.to(arrow, { duration: 2, opacity: 1, ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)" });
};
const arrowDelay = 6.6; // Delay in seconds
const arrowDelay = 6.6;
gsap.delayedCall(arrowDelay, fadeInArrow);

// Fade In Circle
const circleAppear = document.querySelector('.circle');
gsap.set(circleAppear, { opacity: 0 });
const circleFadeInAnimation = () => {
  gsap.to(circleAppear, { duration: 1, opacity: 1, ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)" });
};
const circleDelay = 4; // Delay in seconds
const circleDelay = 4;
gsap.delayedCall(circleDelay, circleFadeInAnimation);


// Mouse Animation
const circleElement = document.querySelector('.circle');
const mouse = { x: 0, y: 0 };
const previousMouse = { x: 0, y: 0 };
const circle = { x: 0, y: 0 };
let currentScale = 0;
let currentAngle = 0;

// Function to handle mouse movement
window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
@@ -356,8 +324,6 @@ const tick = () => {

tick();

//Background video mouse

const bgVideo = document.getElementById('bgVideo');
gsap.set(bgVideo, { opacity: 0 });
const fadeInVideo = () => {
@@ -395,11 +361,11 @@ const calculateMouseVelocity = () => {
  prevMouseY = mouseY;
};
const updatePlaybackRate = () => {
  const maxVelocity = 400;
  const maxVelocity = 100;
  const minPlaybackRate = 0.5;
  const maxPlaybackRate = 2;
  calculateMouseVelocity();
  const newPlaybackRate = minPlaybackRate + (mouseVelocity / maxVelocity) * (maxPlaybackRate - minPlaybackRate);
  const newPlaybackRate = minPlaybackRate + (mouseVelocity / maxVelocity) * (maxPlaybackRate - minPlaybackRate) * 0.05;
  gsap.to(bgVideo, { playbackRate: newPlaybackRate, duration: 0.5 });
};
const handleMouseMovement = () => {
@@ -431,68 +397,154 @@ window.addEventListener('touchend', () => {
  pauseBackgroundVideo();
});

// Define variables for the first set of code
const spinningImg = document.querySelector('#spinning-img');
const img = spinningImg.querySelector('img');
const hoverTrigger = document.querySelector('#hover-trigger');

// Initial rotation animation for the first set of code
const initialRotation = gsap.to(img, {
  rotation: 360,
  duration: 4,
  repeat: -1,
  ease: "linear"
});

// Function to change spinning speed for the first set of code
function changeSpeed1(speed) {
  gsap.to(initialRotation, {
    timeScale: speed,
    duration: 0.25, // Smooth transition duration
    ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)" // Easing function for smooth transition
    duration: 0.25,
    ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)"
  });
}

// Hover animation trigger for the first set of code
hoverTrigger.addEventListener('mouseenter', () => {
  console.log("hover event triggered for the first set of code");
  changeSpeed1(4); // Double the speed on hover
  changeSpeed1(4);
});

hoverTrigger.addEventListener('mouseleave', () => {
  console.log("mouseleave event triggered for the first set of code");
  changeSpeed1(1); // Restore original speed on hover out
  changeSpeed1(1);
});

// Define variables for the second set of code
const spinner = document.querySelector('#spinning-img1');
const image = spinner.querySelector('img');
const trigger = document.querySelector('#hover-trigger1');

// Initial rotation animation for the second set of code
const rotationAnimation = gsap.to(image, {
  rotation: 360,
  duration: 4,
  repeat: -1,
  ease: "linear"
});

// Function to change spinning speed for the second set of code
function changeSpeed2(speed) {
  gsap.to(rotationAnimation, {
    timeScale: speed,
    duration: 0.25, // Smooth transition duration
    ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)" // Easing function for smooth transition
    duration: 0.25,
    ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)"
  });
}

// Hover animation trigger for the second set of code
trigger.addEventListener('mouseenter', () => {
  console.log("hover event triggered for the second set of code");
  changeSpeed2(4); // Double the speed on hover
  changeSpeed2(4);
});

trigger.addEventListener('mouseleave', () => {
  console.log("mouseleave event triggered for the second set of code");
  changeSpeed2(1); // Restore original speed on hover out
  changeSpeed2(1);
});

const containerWidth = document.querySelector(".first-container").offsetWidth;

const textWidth = document.querySelector(".moving-sideways").offsetWidth;

let multiplier;
if (window.innerWidth <= 768) {
  multiplier = 4;
} else {
  multiplier = 1.5;
}

let sliderWidth
if (window.innerWidth <= 768) {
  sliderWidth = 500;
} else {
  sliderWidth = 1100;
}

const initialX = containerWidth + sliderWidth;
gsap.set(".moving-sideways", { x: initialX });

gsap.to(".moving-sideways", {
  scrollTrigger: {
    trigger: ".first-container",
    start: "top",
    end: () => "+=" + (containerWidth * multiplier),
    scrub: 1,
    pin: ".first-container"
  },
  x: -textWidth + 20,
  ease: "none",
  duration: 5
});

let multipliertext;
if (window.innerWidth <= 768) {
  multipliertext = 3;
} else {
  multipliertext = 1.1;
}


const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char, i) => {

  const bg = char.dataset.bgColor
  const fg = char.dataset.fgColor

  const text = new SplitType(char, { types: 'chars' })

  gsap.fromTo(text.chars,
    {
      color: bg,
    },
    {
      color: fg,
      duration: 0.9,
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-container",
        start: "top",
        pin: true,
        end: () => "+=" + (containerWidth * multipliertext),
        scrub: true,
        markers: false,
        toggleActions: 'play play reverse reverse'
      }
    })
})

gsap.from(".title", {
  scrollTrigger: {
    trigger: ".title",
    toggleActions: "restart none reverse restart"
  },
  yPercent: 100,
  duration: 0.4,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  stagger: 0.2,
});

gsap.from(".below-sideways-moving-text", {
  delay: 0.5,
  scrollTrigger: {
    trigger: ".below-sideways-moving-text",
    toggleActions: "restart none reverse restart"
  },
  opacity: 0,
  duration: 1,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  stagger: 0.5,
});
