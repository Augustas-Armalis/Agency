//Load in


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
  onComplete: function () {
    gsap.to(".split", {
      yPercent: 1000, // Move the text back down
      duration: 1,
      delay: 1, // Add a delay before starting the downward animation
      ease: "power1.inOut"
    });
  }
});

