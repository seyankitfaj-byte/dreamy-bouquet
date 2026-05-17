const FLOWERS = {
  sunflower() {
    return `
      <div class="flower-head sunflower-head">
        <div class="sun-center"></div>
      </div>
    `;
  },

  tulip() {
    return `
      <div class="flower-head tulip-head">
        <div class="tulip-petal left"></div>
        <div class="tulip-petal right"></div>
        <div class="tulip-petal center"></div>
      </div>
    `;
  },

  daisy() {
    return `
      <div class="flower-head daisy-head">
        <div class="daisy-center"></div>
      </div>
    `;
  },

  leaf() {
    return `
      <div class="flower-head leaf-head">
        <div class="leaf-shape"></div>
      </div>
    `;
  }
};