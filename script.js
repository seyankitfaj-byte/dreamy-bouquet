let page = 1;

const text = {
  2: "I don’t know how to explain it… but you feel like home. Everything becomes lighter when I think of you.",
  3: "I remember the small moments… your smile, your voice, the silence that somehow felt warm with you.",
  4: "No matter where life takes us, I hope you find happiness. And if destiny allows it… we meet again."
};

function show(p) {
  document.querySelectorAll(".page").forEach(e => e.classList.remove("active"));
  document.getElementById("p" + p).classList.add("active");

  page = p;

  if (text[p]) type("t" + p, text[p]);

  burstHearts();
}

function nextPage() {
  if (page < 4) show(page + 1);
}

function restart() {
  show(1);
}

/* TYPE EFFECT */
function type(id, txt) {
  const el = document.getElementById(id);
  el.innerHTML = "";
  let i = 0;

  function run() {
    if (i < txt.length) {
      el.innerHTML += txt[i];
      i++;
      setTimeout(run, 20);
    }
  }

  run();
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

function burstHearts() {
  for (let i = 0; i < 6; i++) {
    setTimeout(heart, i * 80);
  }
}