let number = document.querySelectorAll(".box .number");
let section = document.querySelector(".stats");
let progressSection = document.querySelector(".our-skills");
let theProgress = document.querySelectorAll(".the-progress span");
let countDownDate = new Date("Dec 31,2023 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  document.querySelector(".days").innerHTML = days;
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".hours").innerHTML = hours;
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".minutes").innerHTML = minutes;

  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".seconds").innerHTML = seconds;
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

let started = false;
window.onscroll = function () {
  if (window.scrollY >= progressSection.offsetTop) {
    theProgress.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      number.forEach((num) => {
        startCount(num);
      });
    }
    started = true;
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
number.forEach((num) => {
  startCount(num);
});
