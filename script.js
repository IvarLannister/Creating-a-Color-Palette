const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 32;

const generatePalette = () => {
  container.innerHTML = ""; //clearing the container
  for (let index = 0; index < maxPaletteBoxes; index++) {
    // generating a random hex color code
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6)}`;

    // Creating a new 'li' element and inserting it to the container
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                       <span class="hex-value"${randomHex}></span>`;
    color.addEventListener("click", () => copyColor(color, randomHex));
    container.appendChild(color);
  }
};

generatePalette();

const copyColor = (elem, hexVal) => {
  const colorElement = elem.querySelector(".hex-value");
  // Copying the hex value, updating the text to copied,
  // and charging text back to original hex value after 1 second
  navigator.clipboard
    .writeText(hexVal)
    .then(() => {
      colorElement.innerText = "Verified";
      setTimeout(() => (colorElement.innerText = hexVal), 1000);
    })
    .catch(() => alert("Failed to copy the color code!")); // showing alert if color can't be copied
};

refreshBtn.addEventListener("click", generatePalette);
