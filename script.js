/*hamburger icon close and open {start} */
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}
document.getElementById('hamburger-icon').addEventListener('click', function() {
  document.getElementById('drawer').classList.add('open');
  document.body.classList.add('drawer-open');
});

document.getElementById('close').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('drawer').classList.remove('open');
  document.body.classList.remove('drawer-open');
});
/*hamburger icon close and open {End} */
/*search icon functioning {start} */
document.getElementById('search-icon').addEventListener('click', function() {
  const searchContainer = document.getElementById('search-container');
  searchContainer.classList.toggle('open');
});
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const placeholderTexts = ["Search...Tshirt", "Search...Shirt", "Search...Shoes", "Search...Jeans"];
  let currentIndex = 0;

  function updatePlaceholder() {
      searchInput.placeholder = placeholderTexts[currentIndex];
      currentIndex = (currentIndex + 1) % placeholderTexts.length;
  }

  setInterval(updatePlaceholder, 1500); // Change placeholder every 1.5 seconds
});
/*search icon functioning {End} */


































