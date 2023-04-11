// 1. Select Elements
let search = document.querySelector(".search");
let close = document.querySelector(".close");
let searchWrapper = document.querySelector(".search-wrapper");

// 2. Attach Events
search.addEventListener("click", () => {
  searchWrapper.classList.add("active");
});

close.addEventListener("click", () => {
  searchWrapper.classList.remove("active");
});
