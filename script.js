let current = 1;

const pages = {
  2: "I don’t know how to explain it… but you feel like home to me. Every word you say stays in my mind longer than it should.",
  3: "I remember the small moments… the laughs, the silence, the way everything felt lighter when you were around.",
  4: "No matter where life takes us, I hope you find happiness. And if destiny allows… maybe we meet again someday."
};

function showPage(num) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + num).classList.add("active");

  current = num;

  if (pages[num]) typeText("text" + num, pages[num]);

  burstHearts();
}

function nextPage() {
  if (current < 4) showPage(current + 1);
}

function restart() {
  showPage(1);
}

/* TYPING EFFECT */
function typeText(id, text) {
  const el = document.getElementById(id);
  el.innerHTML = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 25);
    }
  }

  typing();
}

/* HEARTS */
function heart() {
  const h = document.createElement("div");
  h.classList.add("heart");
  h.innerHTML = "💖";

  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = (3 + Math.random() * 3) + "s";

  document.querySelector(".hearts").appendChild(h);

  setTimeout(() => h.remove(), 6000);
}

setInterval(heart, 250);

/* BURST EFFECT */
function burstHearts() {
  for (let i = 0; i < 8; i++) {
    setTimeout(heart, i * 100);
  }
}