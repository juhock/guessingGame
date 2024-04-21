"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //No guess
  if (!guess) {
    displayMessage("⛔️ Please enter a number.");

    //Correct guess & highscore
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //wrong guess
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    displayMessage("Game Over");
    document.querySelector(".score").textContent = 0;
    document.querySelector("body").style.backgroundColor = "#AA0000";
    document.querySelector(".number").textContent = secretNumber;
  }
});

//again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  displayMessage("?");
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
