const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
console.log('hi');
btn.addEventListener("click", function() {
  let hex = "#";
  for(let i = 0; i < 6; ++i) {
    hex += hexValues[6];
  }
  console.log(hex);
  body.style.backgroundColor(hex);
});

