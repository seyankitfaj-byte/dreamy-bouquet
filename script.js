const bouquet = document.getElementById("bouquet");

const flowerButtons =
  document.querySelectorAll(".flower-btn");

const resetBtn =
  document.getElementById("resetBtn");

const wrapBtn =
  document.getElementById("wrapBtn");

const finalCard =
  document.getElementById("finalCard");

const finalBouquet =
  document.getElementById("finalBouquet");

const finalMessage =
  document.getElementById("finalMessage");

const createAgain =
  document.getElementById("createAgain");

const flowerPanel =
  document.getElementById("flowerPanel");

const MAX_FLOWERS = 20;

let flowerCount = 0;

/* ADD FLOWERS */

flowerButtons.forEach(button => {

  button.addEventListener("click", () => {

    if(flowerCount >= MAX_FLOWERS){

      alert("Bouquet is full 🌸");
      return;
    }

    const type = button.dataset.flower;

    createFlower(type);

    flowerCount++;
  });
});

/* CREATE FLOWER */

function createFlower(type){

  const flower =
    document.createElement("div");

  flower.classList.add("flower");

  const stem =
    document.createElement("div");

  stem.classList.add("stem");

  const head =
    document.createElement("div");

  head.classList.add("flower-head");

  /* RANDOMIZATION */

  const randomX =
    Math.random() * 240 - 120;

  const randomY =
    Math.random() * 100;

  const randomRotate =
    Math.random() * 40 - 20;

  const randomScale =
    0.75 + Math.random() * 0.5;

  const stemHeight =
    140 + Math.random() * 160;

  flower.style.left =
    `calc(50% + ${randomX}px)`;

  flower.style.bottom =
    `${150 + randomY}px`;

  flower.style.transform =
    `translateX(-50%)
    rotate(${randomRotate}deg)
    scale(${randomScale})`;

  stem.style.height =
    `${stemHeight}px`;

  stem.style.bottom =
    `-${stemHeight}px`;

  /* LEAF 1 */

  const leaf1 =
    document.createElement("div");

  leaf1.classList.add("leaf-shape");

  leaf1.style.left = "-25px";

  leaf1.style.top =
    `${stemHeight * 0.35}px`;

  leaf1.style.transform =
    "rotate(-35deg)";

  /* LEAF 2 */

  const leaf2 =
    document.createElement("div");

  leaf2.classList.add("leaf-shape");

  leaf2.style.right = "-25px";

  leaf2.style.top =
    `${stemHeight * 0.6}px`;

  leaf2.style.transform =
    "rotate(145deg)";

  stem.appendChild(leaf1);
  stem.appendChild(leaf2);

  /* FLOWER TYPES */

  switch(type){

    case "rose":
      head.classList.add("rose-head");
      break;

    case "tulip":
      head.classList.add("tulip-head");
      break;

    case "daisy":
      head.classList.add("daisy-head");
      break;

    case "sunflower":
      head.classList.add("sunflower-head");
      break;

    case "leaf":
      head.classList.add("single-leaf");
      break;
  }

  flower.appendChild(head);
  flower.appendChild(stem);

  bouquet.appendChild(flower);
}

/* RESET */

resetBtn.addEventListener("click", () => {

  const flowers =
    bouquet.querySelectorAll(".flower");

  flowers.forEach(flower => {
    flower.remove();
  });

  flowerCount = 0;
});

/* WRAP */

wrapBtn.addEventListener("click", () => {

  if(flowerCount === 0){

    alert("Add some flowers first 🌸");

    return;
  }

  finalBouquet.innerHTML =
    bouquet.innerHTML;

  const message =
    document
      .getElementById("giftMessage")
      .value
      .trim();

  finalMessage.innerText =
    message ||
    "A beautiful bouquet made with love 💐";

  finalCard.classList.remove("hidden");

  flowerPanel.style.opacity = "0";

  flowerPanel.style.pointerEvents = "none";
});

/* CREATE AGAIN */

createAgain.addEventListener("click", () => {

  finalCard.classList.add("hidden");

  flowerPanel.style.opacity = "1";

  flowerPanel.style.pointerEvents = "all";
});