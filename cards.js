function main() {
  //Setting colors
  let colors = [
    "green",
    "blue",
    "pink",
    "yellow",
    "red",
    "blueviolet",
    "cyan",
    "orange",
  ];
  let back = "rgb(238, 222, 222)";

  //Card objects

  function Card(color) {
    // this.id = id,
    (this.flipped = false), (this.color = color), (element = null);
  }

  Card.prototype = {
    flip: function () {
      if (this.flipped === true) {
        this.flipped = false;
        this.element.style.backgroundColor = back;
      } else {
        this.flipped = true;
        this.element.style.backgroundColor = this.color;
      }
    },
  };

  //Initialization of cards

  let deck = [];
  for (let i = 0; i < colors.length; i++) {
    deck.push(new Card(colors[i]));
    deck.push(new Card(colors[i]));
  }

  //Shuffle function
  //From https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
  function shuffle(array) {
    var i = array.length,
      j = 0,
      temp;
    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  //Setting location of cards
  function deal() {
    let ranNums = shuffle([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]);
    for (let i = 0; i < deck.length; i++) {
      element = document.querySelector(".card#" + CSS.escape(ranNums[i]));
      deck[i].element = element;
    }
  }
  //Call deal function
  deal();

  //Begin Game

  //Track number of matches found
  let matches = 0;
  let locked = false
  //Select all cards
  let cards = document.querySelectorAll(".card");

  //User Selects Cards
  let ind1, ind2;
  let first = true;
  function clickLogic() {
    if (locked) {
      return;
    }
    let loc = this.id;
    let ind = deck.findIndex((obj) => {
      return obj.element === this;
    });
    if (first) {
      ind1 = ind;
      deck[ind1].flip();
      deck[ind1].element.removeEventListener("click", clickLogic);
      first = false;
    } else {
      locked = true;
      ind2 = ind;
      deck[ind2].flip();
      if (deck[ind1].color === deck[ind2].color) {
        deck[ind2].element.removeEventListener("click", clickLogic);
        matches += 1;
        locked = false;
        if (matches === 8) {
          if (setTimeout(() => alert("You Win!"), 1500)) {
          } else window.location.reload();
        }
      } else {
        deck[ind1].element.addEventListener("click", clickLogic);
        setTimeout(() => {
          deck[ind1].flip();
          deck[ind2].flip();
          locked = false;
        }, 1000);
      }
      first = true;
    }
  }
  cards.forEach((card) => card.addEventListener("click", clickLogic));
}

main();
