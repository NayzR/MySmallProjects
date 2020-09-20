const inp1 = document.querySelector("#inp1");
const inp2 = document.querySelector("#inp2");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2")

btn1.addEventListener("click", function() {
  let binNum = inp1.value;
  if(binNum === "") {
    result1.textContent = "Empty Input! Try again.";
    return;
  }
  if(isNotValidBinary(binNum)) {
    result1.textContent = "Wrong Input! Try again."
    return;
  }
  let intNum = parseInt(binNum, 2);
  result1.textContent = "Result: " + intNum;
});

btn2.addEventListener("click", function() {
  let intNum = inp2.value;
  if(intNum === "") {
    result2.textContent = "Empty Input! Try again.";
    return;
  }
  intNum = parseInt(intNum);
  if(isNaN(intNum)) {
    result2.textContent = "Wrong Input! Try again."
    return;
  }
  let binNum = intNum.toString(2);
  result2.textContent = "Result: " + binNum;
});

function isNotValidBinary(num) {
  numAsArray = num.split("");
  let returnValue = false;
  numAsArray.forEach(element => {
    if(!(element === "0" || element === "1")) {
      returnValue = true;
    }
  });
  return returnValue;
}