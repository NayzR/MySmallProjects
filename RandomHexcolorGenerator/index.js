const btn = document.querySelector("#btn");
const bodyy = document.querySelector("body");
const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

btn.addEventListener("click", function() {
  let hex = "#";
  for(let i = 0; i < 6; ++i) {
    hex += hexValues[generateRandomNumber()];
  }
  console.log(hex);
  bodyy.style.backgroundColor = hex;
});

function generateRandomNumber() {
  return Math.floor(Math.random() * hexValues.length);
}