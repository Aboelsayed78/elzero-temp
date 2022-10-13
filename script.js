
////////////// Increasing Skills On Scroll
let skills = document.querySelector(".skills"),
  skill_bar = document.querySelectorAll(".skill-bar .prog-bar");

skill_bar.forEach((bar) => {
  bar.style.width = bar.dataset.skill;
});

// window.onscroll = function () {
//   if (window.scrollY >= skills.offsetTop - 250) {
//     skill_bar.forEach((bar) => {
//       bar.style.width = bar.dataset.skill;
//     });
//   }
// };

////////////// Increasing Stats On Scroll
let stats = document.querySelector(".stats"),
  stat_num = document.querySelectorAll(".stat .num"),
  started = false; // Function not started

window.onscroll = function () {
  if (window.scrollY >= stats.offsetTop - 400) {
    if (!started) {
      stat_num.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal,
    count = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
        clearInterval(count);
      }
    }, 2000 / goal);
}

////////////// Time Down Counter
let days = document.querySelector("#days"),
		hours = document.querySelector("#hours"),
		minutes = document.querySelector("#minutes"),
		seconds = document.querySelector("#seconds");

let eve_counter = setInterval(() => {
let end_date = new Date('december 31 2022 23:59:59'),
		today = new Date;
		date_diff = end_date - today;

	days.textContent = Math.floor(date_diff / (1000 * 60 * 60 * 24));
	hours.textContent = Math.floor(date_diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
	minutes.textContent = Math.floor(date_diff % (1000 * 60 * 60) / (1000 * 60));
	seconds.textContent = Math.floor(date_diff % (1000 * 60) / (1000));
}, 1000);




