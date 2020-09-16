const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const headingSecLine = document.querySelector("#headingSecLine");

// Buttons to change the current color
const redplusbtn = document.querySelector("#redplusbtn");
const redminusbtn = document.querySelector("#redminusbtn");

const greenplusbtn = document.querySelector("#greenplusbtn");
const greenminusbtn = document.querySelector("#greenminusbtn");

const blueplusbtn = document.querySelector("#blueplusbtn");
const blueminusbtn = document.querySelector("#blueminusbtn");

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


/* event listener for the red plus button */
redplusbtn.addEventListener("click", function() {
  // create an char array of all parts of the hex value
  let curHexAsCharArr = headingSecLine.textContent.split("");
  // convert it to a integer so we can increase it by one
  let newRedInt = (parseInt(curHexAsCharArr[1], 16)*16) + parseInt(curHexAsCharArr[2], 16) + 1;
  // test if it is out of the hex range of 255 to start again from zero
  if(newRedInt > 255) newRedInt = 0;
  // convert it back to a string
  let newRedHex = newRedInt.toString(16).toUpperCase();
  // add a zero if it is only one char so the next line will work
  if(newRedInt < 16) newRedHex = "0" + newRedHex;
  // create the new hex value
  newRedHex = "#" + newRedHex + curHexAsCharArr[3] + curHexAsCharArr[4] + curHexAsCharArr[5] + curHexAsCharArr[6];
  // apply the new hex values
  body.style.backgroundColor = newRedHex;
  headingSecLine.textContent = newRedHex;
});

/* event listener for the red minus button */
redminusbtn.addEventListener("click", function() {
  // create an char array of all parts of the hex value
  let curHexAsCharArr = headingSecLine.textContent.split("");
  // convert it to a integer so we can decrease it by one
  let newRedInt = (parseInt(curHexAsCharArr[1], 16)*16) + parseInt(curHexAsCharArr[2], 16) - 1;
  // test if it is negative to go back up to 255
  if(newRedInt < 0) newRedInt = 255;
  // convert it back to a string
  let newRedHex = newRedInt.toString(16).toUpperCase();
  // add a zero if it is only one char so the next line will work
  if(newRedInt < 16) newRedHex = "0" + newRedHex;

  // create the new hex value
  newRedHex = "#" + newRedHex + curHexAsCharArr[3] + curHexAsCharArr[4] + curHexAsCharArr[5] + curHexAsCharArr[6];

  // apply the new hex values
  body.style.backgroundColor = newRedHex;
  headingSecLine.textContent = newRedHex;
});

/* event listener for the green plus button (works like the red buttons) */
greenplusbtn.addEventListener("click", function() {
  let curHexAsCharArr = headingSecLine.textContent.split("");
  let newRedInt = (parseInt(curHexAsCharArr[3], 16)*16) + parseInt(curHexAsCharArr[4], 16) + 1;
  if(newRedInt > 255) newRedInt = 0;
  let newRedHex = newRedInt.toString(16).toUpperCase();
  if(newRedInt < 16) newRedHex = "0" + newRedHex;
  newRedHex = "#"  + curHexAsCharArr[1] + curHexAsCharArr[2] + newRedHex + curHexAsCharArr[5] + curHexAsCharArr[6];
  body.style.backgroundColor = newRedHex;
  headingSecLine.textContent = newRedHex;
});

/* event listener for the green minus button (works like the red buttons) */
greenminusbtn.addEventListener("click", function() {
  let curHexAsCharArr = headingSecLine.textContent.split("");
  let newRedInt = (parseInt(curHexAsCharArr[3], 16)*16) + parseInt(curHexAsCharArr[4], 16) - 1;
  if(newRedInt < 0) newRedInt = 255;
  let newRedHex = newRedInt.toString(16).toUpperCase();
  if(newRedInt < 16) newRedHex = "0" + newRedHex;
  newRedHex = "#"  + curHexAsCharArr[1] + curHexAsCharArr[2] + newRedHex + curHexAsCharArr[5] + curHexAsCharArr[6];
  body.style.backgroundColor = newRedHex;
  headingSecLine.textContent = newRedHex;
});

/* event listener for the blue plus button (works like the red buttons) */
blueplusbtn.addEventListener("click", function() {
  let curHexAsCharArr = headingSecLine.textContent.split("");
  let newRedInt = (parseInt(curHexAsCharArr[5], 16)*16) + parseInt(curHexAsCharArr[6], 16) + 1;
  if(newRedInt > 255) newRedInt = 0;
  let newRedHex = newRedInt.toString(16).toUpperCase();
  if(newRedInt < 16) newRedHex = "0" + newRedHex;
  newRedHex = "#"  + curHexAsCharArr[1] + curHexAsCharArr[2] + curHexAsCharArr[3] + curHexAsCharArr[4] + newRedHex;
  body.style.backgroundColor = newRedHex;
  headingSecLine.textContent = newRedHex;
});

/* event listener for the blue minus button (works like the red buttons) */
blueminusbtn.addEventListener("click", function() {
  let curHexAsCharArr = headingSecLine.textContent.split("");
  let newRedInt = (parseInt(curHexAsCharArr[5], 16)*16) + parseInt(curHexAsCharArr[6], 16) - 1;
  if(newRedInt < 0) newRedInt = 255;
  let newRedHex = newRedInt.toString(16).toUpperCase();
  if(newRedInt < 16) newRedHex = "0" + newRedHex;
  newRedHex = "#"  + curHexAsCharArr[1] + curHexAsCharArr[2] + curHexAsCharArr[3] + curHexAsCharArr[4] + newRedHex;
  body.style.backgroundColor = newRedHex;
  headingSecLine.textContent = newRedHex;
});