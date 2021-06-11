// For (.memory-card) cards in css which is matched to memory-card in html
const cards = document.querySelectorAll(".memory-card");

// Setting up the variables
let hasFlippedCard = false; // action of flipping the card
let lockBoard = false; // if not a match this locks the board until the cards flip back
let firstCard, secondCard; // activates first or second cards

function flipCard() {
  if (lockBoard) return; //returns to the function if true
  if (this === firstCard) return; //prevents double click from removing eventListener
  //works with the resetBoard function

  this.classList.add(flip);
  // condition for the if statement is if card has not been flipped... then this is the first click
  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = this; // .memory-card is the this

    return; // if true the return statement stops the excution, "else" not true it continues
  }
  // second click
  secondCard = this; // .memory-card is the this

  checkForMatch(); // calling the function below
}

function checkForMatch() {
  // tag in each card's html... data-framework = "name of the element its holding" so the color of the card
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  // This is a "Conditional (ternary) Operator" used to replace the original if/else statement logic
  // (isMatch) is the condition,
  //(disableCards) is the truthy expression to execute if true,
  // and (unflipCards) is the falsy expression to execute if false

  isMatch ? disableCards() : unflipCards();
}

// if it's a match this removes EventListener and displays the cards and leaves them displayed
function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

// if it's not a match this sets the cards back by removing the flip class from them
function unflipCards() {
  lockBoard = true; // not a match will only unlock after cards flip back

  // setTimeout gives a little time between the flipping of the cards
  setTimeout(() => {
    firstCard.classList.remove(flip);
    secondCard.classList.remove(flip);

    resetBoard();
  }, 1500);
}

//works to prevent cards from being double clicked and removing eventListener
(function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
})();

cards.forEach((card) => addEventListener("click", flipCard));
