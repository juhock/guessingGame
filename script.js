const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent =
      "⛔️ Please enter a number.";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct!";
    highScore++;
    document.querySelector(".highscore").textContent = highScore;
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too high!";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low!";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
