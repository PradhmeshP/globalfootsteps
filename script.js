// Import GSAP and ScrollTrigger
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

// Animate feature cards
gsap.utils.toArray(".feature-card").forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
    },
  })
})

// Animate globe
gsap.to(".globe", {
  rotation: 360,
  duration: 20,
  ease: "none",
  repeat: -1,
})

// Parallax effect for hero section
gsap.to(".hero", {
  backgroundPosition: "50% 100%",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
})

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

// Form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault()
  // Here you would typically send the form data to a server
  alert("Thank you for your message! We will get back to you soon.")
  this.reset()
})

// Animated background gradient
const colors = ["#3498db", "#2ecc71", "#e74c3c", "#f39c12"]
let currentIndex = 0

function changeBackgroundColor() {
  currentIndex = (currentIndex + 1) % colors.length
  const nextIndex = (currentIndex + 1) % colors.length

  gsap.to("body", {
    backgroundImage: `linear-gradient(135deg, ${colors[currentIndex]}, ${colors[nextIndex]})`,
    duration: 5,
    ease: "power1.inOut",
  })
}

setInterval(changeBackgroundColor, 10000)

// Intersection Observer for feature cards
const featureCards = document.querySelectorAll(".feature-card")

const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px",
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate")
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

featureCards.forEach((card) => {
  observer.observe(card)
})

// Animate icons in feature cards
featureCards.forEach((card) => {
  const icon = card.querySelector("i")
  gsap.to(icon, {
    rotationY: 360,
    duration: 1,
    repeat: -1,
    ease: "power1.inOut",
    yoyo: true,
  })
})

// Responsive navigation
const navToggle = document.createElement("button")
navToggle.classList.add("nav-toggle")
navToggle.innerHTML = "<span></span><span></span><span></span>"
document.querySelector("nav").appendChild(navToggle)

navToggle.addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("show")
})

// Add some interactivity to the globe
const globe = document.querySelector(".globe")
globe.addEventListener("mousemove", (e) => {
  const { left, top, width, height } = globe.getBoundingClientRect()
  const x = (e.clientX - left) / width
  const y = (e.clientY - top) / height

  gsap.to(globe, {
    rotationY: -15 + x * 30,
    rotationX: 15 - y * 30,
    duration: 0.5,
    ease: "power2.out",
  })
})

globe.addEventListener("mouseleave", () => {
  gsap.to(globe, {
    rotationY: 0,
    rotationX: 0,
    duration: 0.5,
    ease: "power2.out",
  })
})

// Add a scroll-to-top button
const scrollToTopButton = document.createElement("button")
scrollToTopButton.classList.add("scroll-to-top")
scrollToTopButton.innerHTML = "↑"
document.body.appendChild(scrollToTopButton)

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopButton.classList.add("show")
  } else {
    scrollToTopButton.classList.remove("show")
  }
})

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
})

// Add this CSS to your styles.css file
/*
.scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: var(--primary-color);
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.scroll-to-top.show {
    opacity: 1;
}

.nav-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
}

.nav-toggle span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 5px 0;
}

@media (max-width: 768px) {
    .nav-toggle {
        display: block;
    }

    nav ul {
        display: none;
    }

    nav ul.show {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.9);
        padding: 20px;
    }

    nav ul.show li {
        margin: 10px 0;
    }

    nav ul.show li a {
        color: var(--text-color);
    }
}
*/

// This completes the JavaScript file with additional interactivity and responsiveness for the Global Footsteps website.

