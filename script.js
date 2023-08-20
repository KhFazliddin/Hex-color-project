const colors = document.querySelectorAll(".color-box h2");

function generateColors() {
  colors.forEach((color) => {
    let heXCode = "#" + Math.random().toString(16).substring(2, 8);
    color.style.backgroundColor = heXCode;
    color.innerHTML = heXCode;
  });
}

generateColors();
