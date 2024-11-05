const container = document.querySelector('.carousel-container');
console.log(container);

// const cloneContent = () => {
//   container.innerHTML += container.innerHTML;
// };

// cloneContent();

let scrollAmount = 0;
let scrollStep = 200; // Width of one image
let scrollInterval = 5000; // Time between scrolls (in milliseconds)
let maxScrollLeft = container.scrollWidth

// const infiniteScroll = () => {
//   container.scrollBy({ left: scrollStep, behavior: 'smooth' });// Scroll right

//   // If the scroll reaches the cloned content, reset it to create the infinite effect
//   if (container.scrollLeft >= maxScrollLeft) {
//     container.scrollLeft = 0;
//   }
// };

// const startScrolling = () => {
//   infiniteScroll();
//   requestAnimationFrame(startScrolling); // Use `requestAnimationFrame` for smoother animation
// };

// startScrolling();

function autoScroll() {
  // Scroll the container horizontally by `scrollStep` pixels
  container.scrollBy({ left: scrollStep, behavior: 'smooth' });
  scrollAmount += scrollStep;

  // Reset scroll position if we reach the end of the container
  if (scrollAmount >= container.scrollWidth - container.clientWidth) {
    scrollAmount = 0;
    container.scrollTo({ left: 0, behavior: 'smooth' });
  }
}

// Start auto - scrolling at the defined interval
setInterval(autoScroll, scrollInterval);

