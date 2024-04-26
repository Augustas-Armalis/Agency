document.addEventListener("DOMContentLoaded", function () {
  document.body.style.overflow = "hidden";
  setTimeout(function () {
    document.body.style.overflow = "auto";
  }, 4000);
});

window.onload = function () {
  const bars = document.querySelector(".bars");
  const menu = document.querySelector(".menu");
  const navItems = document.querySelectorAll(".navigation-item");
  let menuOpen = false;
  let lenisInstance;

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

  setTimeout(initializeLenis, 5000);

  bars.addEventListener("click", function (e) {
    this.classList.toggle("active");
    menuOpen = !menuOpen;
    if (menuOpen) {
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
      document.body.style.overflow = 'hidden';
      if (lenisInstance) {
        lenisInstance.destroy();
        lenisInstance = null;
      }
    } else {
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
      document.body.style.overflow = 'auto';
      initializeLenis();
    }
  });
};

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

const video = document.getElementById('bgVideo', 'bgVideo-foto');
gsap.set(video, { opacity: 0 });
const fadeInAnimation = () => {
  gsap.to(video, { duration: 2, opacity: 1, ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)" });
};
const delay = 5;
gsap.delayedCall(delay, fadeInAnimation);

const arrow = document.querySelector('.arrow');
gsap.set(arrow, { opacity: 0 });
const fadeInArrow = () => {
  gsap.to(arrow, { duration: 2, opacity: 1, ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)" });
};
const arrowDelay = 6.6;
gsap.delayedCall(arrowDelay, fadeInArrow);

const circleAppear = document.querySelector('.circle');
gsap.set(circleAppear, { opacity: 0 });
const circleFadeInAnimation = () => {
  gsap.to(circleAppear, { duration: 1, opacity: 1, ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)" });
};
const circleDelay = 4;
gsap.delayedCall(circleDelay, circleFadeInAnimation);

const circleElement = document.querySelector('.circle');
const mouse = { x: 0, y: 0 };
const previousMouse = { x: 0, y: 0 };
const circle = { x: 0, y: 0 };
let currentScale = 0;
let currentAngle = 0;

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
  const maxVelocity = 100;
  const minPlaybackRate = 0.5;
  const maxPlaybackRate = 1;
  calculateMouseVelocity();
  const newPlaybackRate = minPlaybackRate + (mouseVelocity / maxVelocity) * (maxPlaybackRate - minPlaybackRate) * 0.05;
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

const spinningImg = document.querySelector('#spinning-img');
const img = spinningImg.querySelector('img');
const hoverTrigger = document.querySelector('#hover-trigger');

const initialRotation = gsap.to(img, {
  rotation: 360,
  duration: 4,
  repeat: -1,
  ease: "linear"
});

function changeSpeed1(speed) {
  gsap.to(initialRotation, {
    timeScale: speed,
    duration: 0.25,
    ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)"
  });
}

hoverTrigger.addEventListener('mouseenter', () => {
  console.log("hover event triggered for the first set of code");
  changeSpeed1(4);
});

hoverTrigger.addEventListener('mouseleave', () => {
  console.log("mouseleave event triggered for the first set of code");
  changeSpeed1(1);
});

const spinner = document.querySelector('#spinning-img1');
const image = spinner.querySelector('img');
const trigger = document.querySelector('#hover-trigger1');

const rotationAnimation = gsap.to(image, {
  rotation: 360,
  duration: 4,
  repeat: -1,
  ease: "linear"
});

function changeSpeed2(speed) {
  gsap.to(rotationAnimation, {
    timeScale: speed,
    duration: 0.25,
    ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)"
  });
}

trigger.addEventListener('mouseenter', () => {
  console.log("hover event triggered for the second set of code");
  changeSpeed2(4);
});

trigger.addEventListener('mouseleave', () => {
  console.log("mouseleave event triggered for the second set of code");
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


let cardSmth
if (window.innerWidth <= 768) {
  cardSmth = 6;
} else {
  cardSmth = 1;
}



gsap.set(".flying-card", { yPercent: 130 });

gsap.to(".flying-card", {
  scrollTrigger: {
    trigger: ".third-container",
    start: "top",
    end: () => "+=" + (containerWidth * cardSmth),
    scrub: 1,
    pin: ".third-container"
  },
  yPercent: 0,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  duration: 1,
  stagger: 1,
});


gsap.set(".flying-card1", { yPercent: 130 });

gsap.to(".flying-card1", {
  scrollTrigger: {
    trigger: ".third-container1",
    start: "top",
    end: () => "+=" + (containerWidth * cardSmth),
    scrub: 1,
    pin: ".third-container1"
  },
  yPercent: 0,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  duration: 1,
  stagger: 1,
});



gsap.from(".title4", {
  scrollTrigger: {
    trigger: ".title4",
    toggleActions: "restart none restart reverse"
  },
  yPercent: 100,
  duration: 0.4,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  stagger: 0.2,
});

gsap.from(".title41", {
  scrollTrigger: {
    trigger: ".title41",
    toggleActions: "restart none restart reverse"
  },
  yPercent: 100,
  duration: 0.4,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  stagger: 0.2,
});

gsap.from(".title42", {
  scrollTrigger: {
    trigger: ".title42",
    toggleActions: "restart none restart reverse"
  },
  yPercent: 100,
  duration: 0.4,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  stagger: 0.2,
});

gsap.from(".title43", {
  scrollTrigger: {
    trigger: ".title43",
    toggleActions: "restart none restart reverse"
  },
  yPercent: 100,
  duration: 0.4,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  stagger: 0.2,
});

gsap.from(".title44", {
  scrollTrigger: {
    trigger: ".title44",
    toggleActions: "restart none restart reverse"
  },
  yPercent: 100,
  duration: 0.4,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  stagger: 0.2,
});

gsap.from(".title45", {
  scrollTrigger: {
    trigger: ".title45",
    toggleActions: "restart none restart reverse"
  },
  yPercent: 100,
  duration: 0.4,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  stagger: 0.2,
});

gsap.from(".fourth-text", {
  delay: 0.5,
  scrollTrigger: {
    trigger: ".fourth-text",
    toggleActions: "restart none restart restart"
  },
  opacity: 0,
  duration: 1,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  stagger: 0.5,
});

gsap.from(".fourth-text1", {
  delay: 0.5,
  scrollTrigger: {
    trigger: ".fourth-text1",
    toggleActions: "restart none restart restart"
  },
  opacity: 0,
  duration: 1,
  ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  stagger: 0.5,
});


let currentScroll = 0;
let isScrollingDown = true;
let tween;
let isDragging = false;
let initialDragX = 0;
let dragPercentage = 100; // Added to track drag percentage
let currentDirection = 1; // Default direction

// Calculate total width of marquee content
const marqueeWidth = document.querySelector('.marquee-inner').offsetWidth;

let scrollImageEx
if (window.innerWidth <= 768) {
  scrollImageEx = 9;
} else {
  scrollImageEx = 15;
}


// Function to create GSAP animation
function createAnimation() {
  tween = gsap.to(".marquee-inner", {
    x: -marqueeWidth / 2, // Initial position
    repeat: -1, // Repeat indefinitely
    duration: scrollImageEx, // Adjust duration as needed
    ease: "linear",
  }).totalProgress(0.5);
}

// Initialize animation
createAnimation();



// Start dragging
function startDrag(event) {
  if (event.target.classList.contains('marquee-part')) {
    isDragging = true;
    initialDragX = event.clientX || event.touches[0].clientX;
    gsap.set(tween, { timeScale: 0 }); // Pause animation when dragging starts
  }
}

// Continue dragging
function drag(event) {
  if (isDragging) {
    const clientX = event.clientX || event.touches[0].clientX;
    const dragDistance = clientX - initialDragX;
    let sensitivity = 1; // Default sensitivity for desktop
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      sensitivity = 6; // High sensitivity for mobile devices
    }
    dragPercentage = dragDistance / (window.innerWidth * sensitivity); // Update drag percentage with sensitivity
    tween.progress(tween.progress() - dragPercentage); // Adjust animation progress based on drag distance
    initialDragX = clientX;
  }
}


// End dragging
function endDrag() {
  if (isDragging) {
    isDragging = false;
    // Calculate the direction based on drag percentage and reverse it
    currentDirection = dragPercentage > 0 ? -1 : 1;
    // Resume animation with adjusted timeScale and smooth transition
    gsap.to(tween, {
      timeScale: currentDirection,
      duration: 0.7, // Smooth transition duration
      onComplete: () => {
        // Adjust tween progress after transition
        tween.progress(tween.progress() - dragPercentage);
        // Reset drag percentage
        dragPercentage = 0;
      }
    });
  }
}

// Event listeners for mouse events
window.addEventListener('mousedown', startDrag);
window.addEventListener('mousemove', drag);
window.addEventListener('mouseup', endDrag);

// Event listeners for touch events
window.addEventListener('touchstart', startDrag);
window.addEventListener('touchmove', drag);
window.addEventListener('touchend', endDrag);

window.addEventListener("scroll", function () {
  if (window.pageYOffset > currentScroll) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }

  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1,
  });

  currentScroll = window.pageYOffset;
});



const secondaryVideo = document.getElementById('bgVideo-foto');

const pauseSecondaryVideo = () => {
  secondaryVideo.pause();
};
const playSecondaryVideo = () => {
  secondaryVideo.play();
};
let isSecondaryVideoPlaying = false;
let mouseXSecondary = 0;
let mouseYSecondary = 0;
let prevMouseXSecondary = 0;
let prevMouseYSecondary = 0;
let mouseVelocitySecondary = 0;
window.addEventListener('mousemove', (event) => {
  mouseXSecondary = event.clientX;
  mouseYSecondary = event.clientY;
});
window.addEventListener('mouseout', () => {
  pauseSecondaryVideo();
  isSecondaryVideoPlaying = false;
});
const calculateMouseVelocitySecondary = () => {
  const deltaXSecondary = mouseXSecondary - prevMouseXSecondary;
  const deltaYSecondary = mouseYSecondary - prevMouseYSecondary;
  const distanceSecondary = Math.sqrt(deltaXSecondary * deltaXSecondary + deltaYSecondary * deltaYSecondary);
  const elapsedTimeSecondary = 0.016;
  mouseVelocitySecondary = distanceSecondary / elapsedTimeSecondary;
  prevMouseXSecondary = mouseXSecondary;
  prevMouseYSecondary = mouseYSecondary;
};
const updatePlaybackRateSecondary = () => {
  const maxVelocitySecondary = 100;
  const minPlaybackRateSecondary = 0.5;
  const maxPlaybackRateSecondary = 1;
  calculateMouseVelocitySecondary();
  const newPlaybackRateSecondary = minPlaybackRateSecondary + (mouseVelocitySecondary / maxVelocitySecondary) * (maxPlaybackRateSecondary - minPlaybackRateSecondary) * 0.05;
  gsap.to(secondaryVideo, { playbackRate: newPlaybackRateSecondary, duration: 0.5 });
};
const handleMouseMovementSecondary = () => {
  if (!isSecondaryVideoPlaying) {
    playSecondaryVideo();
    isSecondaryVideoPlaying = true;
  }
  clearTimeout(window.mouseMoveTimeoutSecondary);
  window.mouseMoveTimeoutSecondary = setTimeout(() => {
    pauseSecondaryVideo();
    isSecondaryVideoPlaying = false;
  }, 100);
};
window.addEventListener('mousemove', () => {
  updatePlaybackRateSecondary();
  handleMouseMovementSecondary();
});
const backgroundVideoSecondary = document.getElementById('bgVideo-foto');
const pauseBackgroundVideoSecondary = () => {
  backgroundVideoSecondary.pause();
};
const playBackgroundVideoSecondary = () => {
  backgroundVideoSecondary.play();
};
window.addEventListener('touchstart', () => {
  playBackgroundVideoSecondary();
});
window.addEventListener('touchend', () => {
  pauseBackgroundVideoSecondary();
});








//scrolling 3 things








//1nd

let verticalPosition = 0;
let scrollingDownIs = true;
let animationProgression;
let isUserInteracting = false;
let initialInteractionX = 0;
let interactionPercent = 100;
let currentOrientation = 1;

function initializeAnimation() {
  const contentWidth = document.querySelector('.marquee-inner2').offsetWidth;

  animationProgression = gsap.to(".marquee-inner2", {
    x: -contentWidth / 2,
    repeat: -1,
    duration: 15,
    ease: "linear",
  }).totalProgress(0.5);
}

window.addEventListener('load', initializeAnimation);

function startInteraction(event) {
  if (event.target.classList.contains('marquee-part3')) {
    isUserInteracting = true;
    initialInteractionX = event.clientX || event.touches[0].clientX;
    gsap.set(animationProgression, { timeScale: 0 });
  }
}

function continueInteraction(event) {
  if (isUserInteracting) {
    const clientX = event.clientX || event.touches[0].clientX;
    const interactionDistance = clientX - initialInteractionX;
    let sensitivity = 1;
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      sensitivity = 6;
    }
    interactionPercent = interactionDistance / (window.innerWidth * sensitivity);
    animationProgression.progress(animationProgression.progress() - interactionPercent);
    initialInteractionX = clientX;
  }
}

function endInteraction() {
  if (isUserInteracting) {
    isUserInteracting = false;
    currentOrientation = interactionPercent > 0 ? -1 : 1;
    gsap.to(animationProgression, {
      timeScale: currentOrientation,
      duration: 0.7,
      onComplete: () => {
        animationProgression.progress(animationProgression.progress() - interactionPercent);
        interactionPercent = 0;
      }
    });
  }
}

window.addEventListener('mousedown', startInteraction);
window.addEventListener('mousemove', continueInteraction);
window.addEventListener('mouseup', endInteraction);

window.addEventListener('touchstart', startInteraction);
window.addEventListener('touchmove', continueInteraction);
window.addEventListener('touchend', endInteraction);

window.addEventListener("scroll", function () {
  if (window.pageYOffset > verticalPosition) {
    scrollingDownIs = true;
  } else {
    scrollingDownIs = false;
  }

  gsap.to(animationProgression, {
    timeScale: scrollingDownIs ? -1 : 1,
  });

  verticalPosition = window.pageYOffset;
});










//2nd

let currentPosition = 0;
let isMovingForward = true;
let animationSequence;
let isDraggingNow = false;
let initialDragPos = 0;
let currentDragPercent = 100; // Updated variable name
let currentMotionDirection = 1; // Default direction

// Function to start GSAP animation
function initializeSequence() {
  // Calculate total width of marquee content
  const marqueeWidth = document.querySelector('.marquee-inner3').offsetWidth;

  animationSequence = gsap.to(".marquee-inner3", {
    x: -marqueeWidth / 2, // Initial position
    repeat: -1, // Repeat indefinitely
    duration: 15, // Adjust duration as needed
    ease: "linear",
  }).totalProgress(0.5);
}

// Initialize animation after the DOM is fully loaded
window.addEventListener('load', initializeSequence);

// Pause animation on mouseenter with transition


// Start dragging
function beginDragging(event) {
  if (event.target.classList.contains('marquee-part4')) {
    isDraggingNow = true;
    initialDragPos = event.clientX || event.touches[0].clientX;
    gsap.set(animationSequence, { timeScale: 0 }); // Pause animation when dragging starts
  }
}

// Continue dragging
function dragEvent(event) {
  if (isDraggingNow) {
    const clientX = event.clientX || event.touches[0].clientX;
    const dragDistance = clientX - initialDragPos;
    let sensitivity = 1; // Default sensitivity for desktop
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      sensitivity = 6; // High sensitivity for mobile devices
    }
    currentDragPercent = dragDistance / (window.innerWidth * sensitivity); // Updated variable name
    animationSequence.progress(animationSequence.progress() - currentDragPercent); // Adjust animation progress based on drag distance
    initialDragPos = clientX;
  }
}

// End dragging
function endDraggingEvent() {
  if (isDraggingNow) {
    isDraggingNow = false;
    // Calculate the direction based on drag percentage and reverse it
    currentMotionDirection = currentDragPercent > 0 ? -1 : 1;
    // Resume animation with adjusted timeScale and smooth transition
    gsap.to(animationSequence, {
      timeScale: currentMotionDirection,
      duration: 0.7, // Smooth transition duration
      onComplete: () => {
        // Adjust tween progress after transition
        animationSequence.progress(animationSequence.progress() - currentDragPercent);
        // Reset drag percentage
        currentDragPercent = 0;
      }
    });
  }
}

// Event listeners for mouse events
window.addEventListener('mousedown', beginDragging);
window.addEventListener('mousemove', dragEvent);
window.addEventListener('mouseup', endDraggingEvent);

// Event listeners for touch events
window.addEventListener('touchstart', beginDragging);
window.addEventListener('touchmove', dragEvent);
window.addEventListener('touchend', endDraggingEvent);

window.addEventListener("scroll", function () {
  if (window.pageYOffset > currentPosition) {
    isMovingForward = true;
  } else {
    isMovingForward = false;
  }

  gsap.to(animationSequence, {
    timeScale: isMovingForward ? 1 : -1,
  });

  currentPosition = window.pageYOffset;
});



//3rd

let yPosCustom = 0;
let isScrollingForwardCustom = true;
let tweenAnimationCustom;
let isDraggingCustom = false;
let initialDragXCustom = 0;
let dragPercentCustom = 100;
let currentDirectionCustom = 1;

function initiateTweenCustom() {
  const marqueeWidthCustom = document.querySelector('.marquee-inner4').offsetWidth;

  tweenAnimationCustom = gsap.to(".marquee-inner4", {
    x: -marqueeWidthCustom / 2,
    repeat: -1,
    duration: 15,
    ease: "linear",
  }).totalProgress(0.5);
}

window.addEventListener('load', initiateTweenCustom);



function beginDragCustom(event) {
  if (event.target.classList.contains('marquee-part5')) {
    isDraggingCustom = true;
    initialDragXCustom = event.clientX || event.touches[0].clientX;
    gsap.set(tweenAnimationCustom, { timeScale: 0 });
  }
}

function dragCustom(event) {
  if (isDraggingCustom) {
    const clientXCustom = event.clientX || event.touches[0].clientX;
    const dragDistanceCustom = clientXCustom - initialDragXCustom;
    let sensitivityCustom = 1;
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      sensitivityCustom = 6;
    }
    dragPercentCustom = dragDistanceCustom / (window.innerWidth * sensitivityCustom);
    tweenAnimationCustom.progress(tweenAnimationCustom.progress() - dragPercentCustom);
    initialDragXCustom = clientXCustom;
  }
}

function endDraggingCustom() {
  if (isDraggingCustom) {
    isDraggingCustom = false;
    currentDirectionCustom = dragPercentCustom > 0 ? -1 : 1;
    gsap.to(tweenAnimationCustom, {
      timeScale: currentDirectionCustom,
      duration: 1,
      onComplete: () => {
        tweenAnimationCustom.progress(tweenAnimationCustom.progress() - dragPercentCustom);
        dragPercentCustom = 0;
      }
    });
  }
}

window.addEventListener('mousedown', beginDragCustom);
window.addEventListener('mousemove', dragCustom);
window.addEventListener('mouseup', endDraggingCustom);

window.addEventListener('touchstart', beginDragCustom);
window.addEventListener('touchmove', dragCustom);
window.addEventListener('touchend', endDraggingCustom);

window.addEventListener("scroll", function () {
  if (window.pageYOffset > yPosCustom) {
    isScrollingForwardCustom = true;
  } else {
    isScrollingForwardCustom = false;
  }

  gsap.to(tweenAnimationCustom, {
    timeScale: isScrollingForwardCustom ? -1 : 1,
  });

  yPosCustom = window.pageYOffset;
});
