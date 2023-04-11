const progressBars = document.querySelectorAll(".progress-bar");

progressBars.forEach((bar) => {
  bar.style.width = bar.textContent;
});
