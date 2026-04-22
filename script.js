// Highlight active nav link based on current page
// Get the current page name from the URL
// Example: "/about.html" -> "about.html"
document.body.classList.add("is-loading");
const currentPage = 
    window.location.pathname.split("/").pop() || "index.html";

// Select all navigation links inside the site nav
const navLinks = document.querySelectorAll(".site-nav a");

// Lopp through each link
navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});

//change colours on a timer (brand moments)

const title = document.getElementById("brandTitle");
const tagline = document.getElementById("brandTagline");

if (title && tagline){
    const themes = [
        { name: "Default", color: "#F10036"},
        { name:"IWD Pink", color: "#ff4fb8"},
        { name:"Wimbledon Green", color: "#1e8e3e"},
    ];

    let index = 0;

    setInterval(() => {
        index = (index + 1) % themes.length;
        const nextColor = themes[index].color;

        document.documentElement.style
          .setProperty("--brand-color", nextColor);

    }, 4000);
}

    // smooth page fade
    
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("is-loading");
});


    document.querySelectorAll("a[href$='.html']").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("is-leaving");

    setTimeout(() => {
      window.location.href = link.href;
    }, 250);
  });
});

    // Reveal On Scroll (Premium Effect)

const items = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.15 }
);

items.forEach((el) => observer.observe(el));


function initCarousel() {
  // 1) Find the carousel on the page.
  // If the page doesn't have a carousel, stop the function.
  const carousel = document.querySelector("[data-carousel]");
  if (!carousel) return;

  // 2) Get the main parts we need to make the carousel work.
  const track = carousel.querySelector("[data-carousel-track]"); // the moving row
  const slides = Array.from(carousel.querySelectorAll("[data-slide]")); // all slides
  const prevBtn = carousel.querySelector("[data-carousel-prev]"); // previous button
  const nextBtn = carousel.querySelector("[data-carousel-next]"); // next button
  const dotsWrap = carousel.parentElement.querySelector("[data-carousel-dots]"); // dot container

  // Safety checks (stops silent bugs)
  if (!track || slides.length === 0 || !prevBtn || !nextBtn || !dotsWrap) return;

  // 3) Track which slide we're on
  let currentIndex = 0;

  // 4) Autoplay timer variable
  let timerId = null;

  // 5) Create dots automatically (one dot per slide)
  dotsWrap.innerHTML = ""; // NOTE: clears old dots if the script runs again
  const dots = slides.map((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";

    // NOTE: "is-active" is our active class name (CSS must match)
    dot.className = "carousel-dot" + (i === 0 ? " is-active" : "");

    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);

    dot.addEventListener("click", () => {
      goToSlide(i);
      restartAutoplay();
    });

    dotsWrap.appendChild(dot);
    return dot;
  });

  // 6) Move to a slide
  function goToSlide(index) {
    currentIndex = index;

    // NOTE: This moves the whole track left by 100% per slide.
    // Slide 0 => 0%
    // Slide 1 => -100%
    // Slide 2 => -200%
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update dots
    dots.forEach((d) => d.classList.remove("is-active"));
    dots[currentIndex].classList.add("is-active");
  }

  // 7) Next slide (loops back to 0 at the end)
  function next() {
    const nextIndex = (currentIndex + 1) % slides.length;
    // NOTE: % modulus is “wrap around”
    goToSlide(nextIndex);
  }

  // 8) Previous slide (loops to end at the beginning)
  function prev() {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    // NOTE: adding slides.length prevents going negative
    goToSlide(prevIndex);
  }

  // 9) Hook up button clicks
  nextBtn.addEventListener("click", () => {
    next();
    restartAutoplay();
  });

  prevBtn.addEventListener("click", () => {
    prev();
    restartAutoplay();
  });

  // 10) Autoplay functions
  function startAutoplay() {
    stopAutoplay(); // NOTE: prevents stacking multiple timers (the “too fast” bug)
    timerId = setInterval(next, 5000);
    // NOTE: 5000ms = 5 seconds (calmer + more consistent)
  }

  function stopAutoplay() {
    if (timerId) clearInterval(timerId);
    timerId = null;
  }

  function restartAutoplay() {
    startAutoplay();
  }

  // 11) Pause autoplay when user hovers (premium + gives control)
  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);

  // 12) Start on first slide
  goToSlide(0);
  startAutoplay();
}

// Run it once when the page is ready
document.addEventListener("DOMContentLoaded", () =>{
  initCarousel();
 });


 const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('is-open');
  navLinks.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', 
    toggle.classList.contains('is-open')
  );
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('is-open');
    navLinks.classList.remove('is-open');
  });
});