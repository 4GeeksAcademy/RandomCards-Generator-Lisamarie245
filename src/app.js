/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  let cardSimbols = ["♦", "♥", "♠", "♣"];
  let cardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let randomSimbol =
    cardSimbols[Math.floor(Math.random() * cardSimbols.length)];
  let randomNumber = [Math.floor(Math.random() * cardNumbers.length)];

  function redSimbols() {
    const redColor =
      randomSimbol == "♦" || randomSimbol == "♥" ? "red" : "black";

    return redColor;
  }

  document.querySelector("#topSimbol").className = redSimbols() + " cardHeader";
  document.querySelector("#topSimbol").textContent = randomSimbol;

  //  Card Numbers
  document.querySelector("#cardNumber").innerHTML = randomNumber;

  //  Bottom Simbols
  document.querySelector("#bottomSimbol").className =
    redSimbols() + " cardFooter";
  document.querySelector("#bottomSimbol").textContent = randomSimbol;
};
