let currentPage = 0;
const pages = document.querySelectorAll(".page");

function openLetter() {
  const name = document.getElementById("nameInput").value || "You";
  document.getElementById("userName").innerText = name;

  document.getElementById("cover").style.display = "none";
  document.getElementById("letterContainer").classList.remove("hidden");

  showPage(0);
}

// Page navigation
function showPage(index) {
  pages.forEach(p => p.classList.remove("active"));
  pages[index].classList.add("active");
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
}

// Floating hearts generator
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);