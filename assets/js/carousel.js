const container = document.querySelector('.carousel-container');

let scrollAmount = 0;
const scrollStep = container.clientWidth / 2; // Dynamically adjust scroll step
const scrollInterval = 10000; // Time between auto-scrolls (in milliseconds)

function autoScroll() {
  // Calculate the maximum scrollable width
  const maxScrollLeft = container.scrollWidth - container.clientWidth;

  // Check if we've reached the end of the scroll
  if (scrollAmount >= maxScrollLeft) {
    scrollAmount = 0;
    container.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    // Scroll the container horizontally by `scrollStep` pixels
    container.scrollBy({ left: scrollStep, behavior: 'smooth' });
    scrollAmount += scrollStep;
  }
}

// Start auto-scrolling at the defined interval
setInterval(autoScroll, scrollInterval);

