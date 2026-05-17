const bouquetCanvas =
document.getElementById("bouquetCanvas");

const flowers = [];

function addFlower(type){

  const flower =
  document.createElement("div");

  flower.classList.add("flower");

  const x =
  Math.random() * 60 + 20;

  const stemHeight =
  Math.random() * 140 + 120;

  flower.style.left = `${x}%`;

  flower.style.transform =
  `rotate(${Math.random()*20-10}deg)`;

  let bloom =
  `<div class="${type}"></div>`;

  if(type === "leaf"){
    bloom = `<div class="leaf"></div>`;
  }

  flower.innerHTML = `
    ${bloom}
    <div
      class="stem"
      style="height:${stemHeight}px"
    ></div>
  `;

  bouquetCanvas.appendChild(flower);

  flowers.push(flower);
}

function resetBouquet(){
  bouquetCanvas.innerHTML = "";
  flowers.length = 0;
}

function wrapBouquet(){
  document.body.classList.add("wrapped");
}