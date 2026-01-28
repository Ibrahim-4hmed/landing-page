// variables
const sections = document.querySelectorAll(".section");

// Typewriter effect
const text = "ANC wireless headphones. 40+ hours";
const speed = 100;
let index = 0;

const element = document.getElementById("typewriter");
element.classList.add("cursor");

function type() {
  if (index <= text.length) {
    element.textContent = text.slice(0, index);
    index++;
    setTimeout(type, speed);
  } else {
    setTimeout(() => {
      index = 0;
      element.textContent = "";
      type();
    }, 2000);
  }
}
type();

const options = {
  threshold:0.5, //// 30% of section
}

//whatch the entier page 
const observerPage = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // optional (animate once)
        observerPage.unobserve(entry.target); 
      }
    });
  },
  {
    threshold: 0.2
  }
);

sections.forEach(section => observerPage.observe(section));