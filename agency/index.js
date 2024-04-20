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

  // Function to initialize the Lenis instance and its scroll event handling
  function initializeLenis() {
    lenisInstance = new Lenis();
    lenisInstance.on('scroll', (e) => {
      console.log(e);
    });
    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // Delay the initialization of Lenis by 5 seconds
  setTimeout(initializeLenis, 5000);

  bars.addEventListener("click", function (e) {
    this.classList.toggle("active");
    menuOpen = !menuOpen; // Toggle the menu state
    if (menuOpen) {
      // Code for opening navigation bar
      gsap.to(".menu", {
        duration: 1,
        display: "flex",
        ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)"
      });
      gsap.fromTo(".nav", {
        marginTop: "-100vh"
      }, {
        duration: 1,
        marginTop: "0",
        ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
        onComplete: function () {
          gsap.to(".navigation-item", {
            duration: 0,
            opacity: 1
          });
          gsap.to(".navigation-item", {
            duration: 0.6,
            y: 0,
            ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
            stagger: 0.1
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
        ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
        stagger: 0.1,
        onComplete: function () {
          gsap.to(".navigation", {
            duration: 0,
            opacity: 0
          });
          gsap.to(".nav", {
            duration: 1,
            marginTop: "-100vh",
            ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)"
          });
          gsap.to(".menu", {
            duration: 1,
            display: "none",
            ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)"
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
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  stagger: 0.05,
  delay: 1,
  onComplete: function () {
    gsap.to(".split", {
      yPercent: 1000,
      duration: 1,
      delay: 1,
      ease: "power1.inOut"
    });
  }
});

// Agency A Animation
gsap.set(".agency-a", { x: -130 });
gsap.to(".agency-a", {
  x: 0,
  duration: 1,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  delay: 4.4,
  onComplete: function () {
    gsap.to(".agency-a", {
      y: 0,
      duration: 1,
      ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)"
    });
  }
});

// Plans Animation
gsap.set(".plans", { x: -130 });
gsap.to(".plans", {
  x: 0,
  duration: 1,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  delay: 4.4,
  onComplete: function () {
    gsap.to(".plans", {
      y: 0,
      duration: 1,
      ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)"
    });
  }
});

// Bars Animation
gsap.set(".bars", { x: 100 });
gsap.to(".bars", {
  x: 0,
  duration: 1.5,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  delay: 4,
  onComplete: function () {
    gsap.to(".bars", {
      y: 0,
      duration: 1,
      ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)"
    });
  }
});

// Agency A1 Animation
gsap.set(".agency-a1", { x: -130 });
gsap.to(".agency-a1", {
  x: 0,
  duration: 1,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  delay: 5,
  onComplete: function () {
    gsap.to(".agency-a1", {
      y: 0,
      duration: 1,
      ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)"
    });
  }
});

// Bars1 Animation
gsap.set(".bars1", { x: 270 });
gsap.to(".bars1", {
  x: 0,
  duration: 1.2,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  delay: 5,
  onComplete: function () {
    gsap.to(".bars1", {
      y: 0,
      duration: 1,
      ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)"
    });
  }
});

// Land1 Animation
gsap.from(".land1", {
  yPercent: 100,
  duration: 0.5,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  stagger: 0.05,
  delay: 4,
  onComplete: function () {
    gsap.to(".land1", {
      duration: 1,
      delay: 1,
      ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)"
    });
  }
});

// Land2 Animation
gsap.from(".land2", {
  yPercent: 100,
  duration: 0.5,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  stagger: {
    amount: 0.5,
    from: "end",
    staggerDirection: -1
  },
  delay: 4,
  onComplete: function () {
    gsap.to(".land2", {
      duration: 1,
      delay: 1,
      ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)"
    });
  }
});

// Land3 Animation
gsap.from(".land3", {
  yPercent: 100,
  duration: 0.5,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  stagger: 0.05,
  delay: 4,
  onComplete: function () {
    gsap.to(".land3", {
      duration: 1,
      delay: 1,
      ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)"
    });
  }
});

// Shiner-Grider1 Animation
gsap.from(".shiner-grider1", {
  yPercent: -100,
  duration: 1,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  stagger: 0.05,
  delay: 4.2,
  onComplete: function () {
    gsap.to(".shiner-grider1", {
      duration: 1,
      delay: 1,
      ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)"
    });
  }
});

// Shiner-Grider2 Animation
gsap.from(".shiner-grider2", {
  xPercent: -100,
  duration: 1,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  stagger: 0.05,
  delay: 4.2,
  onComplete: function () {
    gsap.to(".shiner-grider2", {
      duration: 1,
      delay: 1,
      ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)"
    });
  }
});


// Fade In Background Video
const video = document.getElementById('bgVideo');
gsap.set(video, { opacity: 0 });
const fadeInAnimation = () => {
  gsap.to(video, { duration: 2, opacity: 1, ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)" });
};
const delay = 5; // Delay in seconds
gsap.delayedCall(delay, fadeInAnimation);

// Fade In Arrow
const arrow = document.querySelector('.arrow');
gsap.set(arrow, { opacity: 0 });
const fadeInArrow = () => {
  gsap.to(arrow, { duration: 2, opacity: 1, ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)" });
};
const arrowDelay = 6.6; // Delay in seconds
gsap.delayedCall(arrowDelay, fadeInArrow);

// Fade In Circle
const circleAppear = document.querySelector('.circle');
gsap.set(circleAppear, { opacity: 0 });
const circleFadeInAnimation = () => {
  gsap.to(circleAppear, { duration: 1, opacity: 1, ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)" });
};
const circleDelay = 4; // Delay in seconds
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
});

const speed = 0.4;

const tick = () => {
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;

  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;
  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;
  const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 10, 150);
  const scaleValue = (mouseVelocity / 150) * 0.5;
  currentScale += (scaleValue - currentScale) * speed;
  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
  if (mouseVelocity > 20) {
    currentAngle = angle;
  }
  const rotateTransform = `rotate(${currentAngle}deg)`;

  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

  window.requestAnimationFrame(tick);
}

tick();

//Background video mouse

const bgVideo = document.getElementById('bgVideo');
gsap.set(bgVideo, { opacity: 0 });
const fadeInVideo = () => {
  gsap.to(bgVideo, { duration: 2, opacity: 1, ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)" });
};
const fadeInDelay = 5;
gsap.delayedCall(fadeInDelay, fadeInVideo);
const pauseVideo = () => {
  bgVideo.pause();
};
const playVideo = () => {
  bgVideo.play();
};
let isVideoPlaying = false;
let mouseX = 0;
let mouseY = 0;
let prevMouseX = 0;
let prevMouseY = 0;
let mouseVelocity = 0;
window.addEventListener('mousemove', (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});
window.addEventListener('mouseout', () => {
  pauseVideo();
  isVideoPlaying = false;
});
const calculateMouseVelocity = () => {
  const deltaX = mouseX - prevMouseX;
  const deltaY = mouseY - prevMouseY;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  const elapsedTime = 0.016;
  mouseVelocity = distance / elapsedTime;
  prevMouseX = mouseX;
  prevMouseY = mouseY;
};
const updatePlaybackRate = () => {
  const maxVelocity = 400;
  const minPlaybackRate = 0.5;
  const maxPlaybackRate = 2;
  calculateMouseVelocity();
  const newPlaybackRate = minPlaybackRate + (mouseVelocity / maxVelocity) * (maxPlaybackRate - minPlaybackRate);
  gsap.to(bgVideo, { playbackRate: newPlaybackRate, duration: 0.5 });
};
const handleMouseMovement = () => {
  if (!isVideoPlaying) {
    playVideo();
    isVideoPlaying = true;
  }
  clearTimeout(window.mouseMoveTimeout);
  window.mouseMoveTimeout = setTimeout(() => {
    pauseVideo();
    isVideoPlaying = false;
  }, 100);
};
window.addEventListener('mousemove', () => {
  updatePlaybackRate();
  handleMouseMovement();
});
const backgroundVideo = document.getElementById('bgVideo');
const pauseBackgroundVideo = () => {
  backgroundVideo.pause();
};
const playBackgroundVideo = () => {
  backgroundVideo.play();
};
window.addEventListener('touchstart', () => {
  playBackgroundVideo();
});
window.addEventListener('touchend', () => {
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
  });
}

// Hover animation trigger for the first set of code
hoverTrigger.addEventListener('mouseenter', () => {
  console.log("hover event triggered for the first set of code");
  changeSpeed1(4); // Double the speed on hover
});

hoverTrigger.addEventListener('mouseleave', () => {
  console.log("mouseleave event triggered for the first set of code");
  changeSpeed1(1); // Restore original speed on hover out
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
  });
}

// Hover animation trigger for the second set of code
trigger.addEventListener('mouseenter', () => {
  console.log("hover event triggered for the second set of code");
  changeSpeed2(4); // Double the speed on hover
});

trigger.addEventListener('mouseleave', () => {
  console.log("mouseleave event triggered for the second set of code");
  changeSpeed2(1); // Restore original speed on hover out
});
