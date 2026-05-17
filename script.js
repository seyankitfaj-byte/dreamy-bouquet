const bouquetCanvas =
  document.getElementById("bouquetCanvas");

const finalCanvas =
  document.getElementById("finalCanvas");

const buttons =
  document.querySelectorAll(".flower-btn");

const resetBtn =
  document.getElementById("resetBtn");

const giftBtn =
  document.getElementById("giftBtn");

const closeGift =
  document.getElementById("closeGift");

const giftOverlay =
  document.getElementById("giftOverlay");

const finalNote =
  document.getElementById("finalNote");

const noteInput =
  document.getElementById("noteInput");

const MAX_FLOWERS = 15;

let flowerCount = 0;

/* FLOWER BUTTONS */

buttons.forEach(button => {

  button.addEventListener("click", () => {

    if(flowerCount >= MAX_FLOWERS){

      alert("Bouquet is full 💐");
      return;
    }

    const type =
      button.dataset.flower;

    createFlower(type);

    flowerCount++;
  });
});

/* CREATE FLOWER */

function createFlower(type){

  const assembly =
    document.createElement("div");

  assembly.classList.add(
    "flower-assembly"
  );

  /* CLUSTERED POSITION */

  const x =
    25 + Math.random() * 50;

  const y =
    55 + Math.random() * 40;

  const rotation =
    Math.random() * 30 - 15;

  const scale =
    0.8 + Math.random() * 0.3;

  assembly.style.left = `${x}%`;

  assembly.style.bottom = `${y}px`;

  assembly.style.setProperty(
    "--rotate",
    `${rotation}deg`
  );

  assembly.style.setProperty(
    "--scale",
    scale
  );

  /* STEM */

  const stem =
    document.createElement("div");

  stem.classList.add("stem");

  const stemHeight =
    120 + Math.random() * 60;

  stem.style.height =
    `${stemHeight}px`;

  stem.style.bottom =
    `-${stemHeight}px`;

  /* LEAVES */

  const leaf1 =
    document.createElement("div");

  leaf1.classList.add("leaf");

  leaf1.style.left = "-20px";

  leaf1.style.top =
    `${stemHeight * 0.3}px`;

  leaf1.style.transform =
    "rotate(-35deg)";

  const leaf2 =
    document.createElement("div");

  leaf2.classList.add("leaf");

  leaf2.style.right = "-20px";

  leaf2.style.top =
    `${stemHeight * 0.6}px`;

  leaf2.style.transform =
    "rotate(145deg)";

  stem.appendChild(leaf1);
  stem.appendChild(leaf2);

  /* FLOWER HEAD */

  const flowerHead =
    document.createElement("div");

  flowerHead.classList.add(
    "flower-head"
  );

  const bloom =
    document.createElement("div");

  bloom.classList.add(type);

  flowerHead.appendChild(bloom);

  assembly.appendChild(flowerHead);

  assembly.appendChild(stem);

  bouquetCanvas.appendChild(assembly);
}

/* RESET */

resetBtn.addEventListener("click", () => {

  bouquetCanvas.innerHTML = "";

  flowerCount = 0;
});

/* GIFT IT */

giftBtn.addEventListener("click", () => {

  if(flowerCount === 0){

    alert("Add flowers first 💐");
    return;
  }

  finalCanvas.innerHTML =
    bouquetCanvas.innerHTML;

  finalNote.textContent =
    noteInput.value.trim() ||
    "A bouquet crafted especially for you.";

  giftOverlay.classList.remove(
    "hidden"
  );
});

/* CLOSE */

closeGift.addEventListener("click", () => {

  giftOverlay.classList.add(
    "hidden"
  );
});