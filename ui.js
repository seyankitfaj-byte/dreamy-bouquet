function updateUI() {

  const total =
    bouquetState.flowers.length;

  const wrapBtn =
    document.querySelector(
      ".gift-btn"
    );

  if (total === 0) {
    wrapBtn.disabled = true;
  } else {
    wrapBtn.disabled = false;
  }
}

function wrapBouquet() {

  document.body.classList.add(
    "wrapped-mode"
  );

  setTimeout(() => {

    alert(
      "🌸 Bouquet wrapped beautifully!"
    );

  }, 500);
}