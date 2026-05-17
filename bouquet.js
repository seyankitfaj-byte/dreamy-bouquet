const bouquetCanvas =
document.getElementById("bouquetCanvas");

const bouquetState = {
  flowers: [],
  maxFlowers: 15
};

function generateFlowerPosition(index) {

  const spread = 140;

  const angle =
    (-90 + (index * 14)) *
    (Math.PI / 180);

  const radius =
    40 + (index * 6);

  const centerX = 210;

  const x =
    centerX +
    Math.cos(angle) * radius;

  return {
    x,
    rotation:
      Math.random() * 20 - 10
  };
}

function createStem(height) {

  return `
    <div
      class="stem"
      style="height:${height}px"
    >
      <div class="stem-leaf left"></div>
      <div class="stem-leaf right"></div>
    </div>
  `;
}

function addFlower(type) {

  if (
    bouquetState.flowers.length >=
    bouquetState.maxFlowers
  ) return;

  const flower =
    document.createElement("div");

  flower.classList.add("flower");

  const pos =
    generateFlowerPosition(
      bouquetState.flowers.length
    );

  const stemHeight =
    120 + Math.random() * 120;

  flower.style.left =
    `${pos.x}px`;

  flower.style.bottom = "0";

  flower.style.transform =
    `rotate(${pos.rotation}deg)`;

  flower.innerHTML = `
    ${FLOWERS[type]()}
    ${createStem(stemHeight)}
  `;

  bouquetCanvas.appendChild(flower);

  bouquetState.flowers.push(flower);

  updateUI();
}

function resetBouquet() {

  bouquetCanvas.innerHTML = "";

  bouquetState.flowers = [];

  updateUI();
}