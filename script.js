"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //No guess
  if (!guess) {
    document.querySelector(".message").textContent =
      "⛔️ Please enter a number.";

    //Correct guess
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct!";
    document.querySelector(".number").textContent = secretNumber;

    highScore++;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".highscore").textContent = highScore;

    //Guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over";
      document.querySelector(".score").textContent = 0;
    }

    //Guess too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over";
      document.querySelector(".score").textContent = 0;
    }
  }
});
