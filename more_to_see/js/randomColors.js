function randomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
};

function changeColors() {
  document.getElementById("blink-182").style.color = randomColor();
};

setInterval(changeColors, 600);
changeColors();