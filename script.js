const message = `
Every moment with you feels like
a beautiful dream wrapped in warm light.
...
`;

const typewriter = document.getElementById("typewriter");
let index = 0;

function typeText() {
  if (index < message.length) {
    typewriter.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeText, 45);
  }
}

const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");

  if (index === 0) {
    setTimeout(typeText, 1200);
  }
});

/* MUSIC */
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const vinyl = document.querySelector(".vinyl");

let isPlaying = false;

musicToggle.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    vinyl.classList.add("rotate");
  } else {
    music.pause();
    vinyl.classList.remove("rotate");
  }
  isPlaying = !isPlaying;
});

/* PETALS */
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), 10000);
}
setInterval(createPetal, 600);

/* COUNTDOWN */
const countdown = document.getElementById("countdown");
const targetDate = new Date("December 25, 2026");

setInterval(() => {
  const now = new Date();
  const diff = targetDate - now;

  countdown.innerHTML =
    Math.floor(diff / 86400000) + "d " +
    Math.floor(diff / 3600000 % 24) + "h " +
    Math.floor(diff / 60000 % 60) + "m " +
    Math.floor(diff / 1000 % 60) + "s";
}, 1000);

/* THEME */
document.getElementById("themeToggle")
.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});