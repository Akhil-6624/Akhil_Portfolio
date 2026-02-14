var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "Java Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Select all radial bars
const radialBars = document.querySelectorAll('.radial-bar');

// Function to check if element is in viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100
  );
}

// Trigger animation when in viewport
function animateRadialBars() {
  radialBars.forEach((bar) => {
    if (isInViewport(bar)) {
      bar.classList.add('active');
    }
  });
}

// Listen for scroll and also trigger on load (for direct links)
window.addEventListener('scroll', animateRadialBars);
window.addEventListener('load', animateRadialBars);

