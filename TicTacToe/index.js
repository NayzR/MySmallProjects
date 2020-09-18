const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const a3 = document.querySelector("#a3");

const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");

const c1 = document.querySelector("#c1");
const c2 = document.querySelector("#c2");
const c3 = document.querySelector("#c3");

let currentTurn = "X";
let board = [["", "", ""], ["", "", ""], ["", "", ""]];
let b = false;
let roundCounter = 0;



a1.addEventListener("click", function() {
  if(a1.textContent === "X" || a1.textContent === "O") return;
  a1.textContent = currentTurn;
  board[0][0] = currentTurn;
  if(currentTurn === "X") currentTurn = "O";
  else currentTurn = "X";
  ++roundCounter;
  testForEnd();
});

a2.addEventListener("click", function() {
  if(a2.textContent === "X" || a2.textContent === "O") return;
  a2.textContent = currentTurn;
  board[0][1] = currentTurn;
  if(currentTurn === "X") currentTurn = "O";
  else currentTurn = "X"; 
  ++roundCounter;
  testForEnd();
});

a3.addEventListener("click", function() {
  if(a3.textContent === "X" || a3.textContent === "O") return;
  a3.textContent = currentTurn;
  board[0][2] = currentTurn;
  if(currentTurn === "X") currentTurn = "O";
  else currentTurn = "X";
  ++roundCounter;
  testForEnd();
});

b1.addEventListener("click", function() {
  if(b1.textContent === "X" || b1.textContent === "O") return;
  b1.textContent = currentTurn;
  board[1][0] = currentTurn;
  if(currentTurn === "X") currentTurn = "O";
  else currentTurn = "X"; 
  ++roundCounter;
  testForEnd();
});

b2.addEventListener("click", function() {
  if(b2.textContent === "X" || b2.textContent === "O") return;
  b2.textContent = currentTurn;
  board[1][1] = currentTurn;
  if(currentTurn === "X") currentTurn = "O";
  else currentTurn = "X"; 
  ++roundCounter;
  testForEnd();
});

b3.addEventListener("click", function() {
  if(b3.textContent === "X" || b3.textContent === "O") return;
  b3.textContent = currentTurn;
  board[1][2] = currentTurn;
  if(currentTurn === "X") currentTurn = "O";
  else currentTurn = "X"; 
  ++roundCounter;
  testForEnd();
});

c1.addEventListener("click", function() {
  if(c1.textContent === "X" || c1.textContent === "O") return;
  c1.textContent = currentTurn;
  board[2][0] = currentTurn;
  if(currentTurn === "X") currentTurn = "O";
  else currentTurn = "X"; 
  ++roundCounter;
  testForEnd();
});

c2.addEventListener("click", function() {
  if(c2.textContent === "X" || c2.textContent === "O") return;
  c2.textContent = currentTurn;
  board[2][1] = currentTurn;
  if(currentTurn === "X") currentTurn = "O";
  else currentTurn = "X"; 
  ++roundCounter;
  testForEnd();
});

c3.addEventListener("click", function() {
  if(c3.textContent === "X" || c3.textContent === "O") return;
  c3.textContent = currentTurn;
  board[2][2] = currentTurn;
  if(currentTurn === "X") currentTurn = "O";
  else currentTurn = "X"; 
  ++roundCounter;
  testForEnd();
});


function testForEnd() {
  if(board[0][0] != "" && (board[0][0] === board[0][1] && board[0][1] === board[0][2])) {
    alert("Player " + board[0][0] + " wins!");
    b = true;
  }

  else if(board[1][0] != "" && (board[1][0] === board[1][1] && board[1][1] === board[1][2])) {
    alert("Player " + board[1][0] + " wins!");
    b = true;
  }
  else if(board[2][0] != "" && (board[2][0] === board[2][1] && board[2][1] === board[2][2])) {
    alert("Player " + board[2][0] + " wins!");
    b = true;
  }

  else if(board[0][0] != "" && (board[0][0] === board[1][0] && board[1][0] === board[2][0])) {
    alert("Player " + board[0][0] + " wins!");
    b = true;
  }
  else if(board[0][1] != "" && (board[0][1] === board[1][1] && board[1][1] === board[2][1])) {
    alert("Player " + board[0][1] + " wins!");
    b = true;
  }
  else if(board[0][2] != "" && (board[0][2] === board[1][2] && board[1][2] === board[2][2])) {
    alert("Player " + board[0][2] + " wins!");
    b = true;
  }

  else if(board[0][0] != "" && (board[0][0] === board[1][1] && board[1][1] === board[2][2])) {
    alert("Player " + board[0][0] + " wins!");
    b = true;
  }
  else if(board[0][2] != "" && (board[0][2] === board[1][1] && board[1][1] === board[2][0])) {
    alert("Player " + board[0][2] + " wins!");
    b = true;
  }
  else if(roundCounter === 9) {
    alert("Draw!")
    b = true;
  }
  console.log(roundCounter)

  if(b) {
    board = [["", "", ""], ["", "", ""], ["", "", ""]];
    a1.textContent = "_";
    a2.textContent = "_";
    a3.textContent = "_";
    b1.textContent = "_";
    b2.textContent = "_";
    b3.textContent = "_";
    c1.textContent = "_";
    c2.textContent = "_";
    c3.textContent = "_";
    b = false;
    currentTurn = "X";
    roundCounter = 0;
  }
}