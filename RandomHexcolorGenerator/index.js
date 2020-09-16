const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const headingSecLine = document.querySelector("#headingSecLine");

btn.addEventListener("click", function() {
  let hex = "#";
  for(let i = 0; i < 6; ++i) {
    hex += hexValues[generateRandomNumber()];
  }
  body.style.backgroundColor = hex;
  headingSecLine.textContent = hex;
});

function generateRandomNumber() {
  return Math.floor(Math.random() * hexValues.length);
}