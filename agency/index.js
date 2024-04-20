//Navigation Menu

window.onload = function () {
  const bars = document.querySelector(".bars");
  const menu = document.querySelector(".menu");
  const navItems = document.querySelectorAll(".navigation-item");

  bars.addEventListener("click", function (e) {
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
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

gsap.set(".bars1", { x: 100 });

gsap.to(".bars1", {
  x: 0,
  duration: 1.5,
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
  stagger: 0.05,
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


// Target the video element
const video = document.getElementById('bgVideo');

// Set initial opacity to 0
gsap.set(video, { opacity: 0 });

// Define the fade in animation
const fadeInAnimation = () => {
  gsap.to(video, { duration: 2, opacity: 1, ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)" });
};

// Add delay before starting the animation
const delay = 5; // Delay in seconds
gsap.delayedCall(delay, fadeInAnimation);




// Target the circle element
const circleAppear = document.querySelector('.circle');

// Set initial opacity to 0
gsap.set(circleAppear, { opacity: 0 });

// Define the fade in animation
const circleFadeInAnimation = () => {
  gsap.to(circleAppear, { duration: 1, opacity: 1, ease: "cubic-bezier(0.770, 0.000, 0.175, 1.000)" });
};

// Add delay before starting the animation
const circleDelay = 4; // Delay in seconds
gsap.delayedCall(circleDelay, circleFadeInAnimation);


// mouse

console.clear();

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






const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
