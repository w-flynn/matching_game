function main () {
    //Setting colors
    let colors = []
    let back = ''

    //Card objects

    function Card(id,color) {
        this.id = id,
        this.loc = null,
        this.flipped = false,
        this.color = color
    }

    Card.prototype = {
        flip: function() {
            let card = document.querySelector('selector'); 
            if (this.flipped === true) {
                this.flipped = false;
                card.style.backgroundColor = back;
            }
            else {
                this.flipped = true;
                card.style.backgroundColor = this.color;
            }
        }
    }

    //Initialization of cards

    let deck = []
    for (let i=0; i < images.length; i++) {
        deck.push(new Card(i,colors[i]))
        deck.push(new Card(i,colors[i]))
    }

    //Shuffle function
    //From https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
    function shuffle(array) {
        var i = array.length,
            j = 0,
            temp;

        while (i--) {

            j = Math.floor(Math.random() * (i+1));

            // swap randomly chosen element with current element
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;

        }

        return array;
    }

    //Setting location of cards
    function deal {
        let ranNums = shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
        for (let i=0; i < deck.length; i++) {
            deck[i].loc = ranNums[i]
        }
    }
    //Call deal function
    deal();

    //Begin Game

    //Track number of matches found
    let matches = 0;
    //Select all cards
    let cards = document.querySelectorAll('.card')

    //When player wins the game
    function won() {

    }

    //User Selects Cards
    let card1, card2;
    function clickLogic() {
        if !(card1) {
            card1 = this.id;
            this.flip();
            card1.removeEventListener('click',clickLogic);
        }
        else {
            card2 = this.id;
            this.flip();
            if (card1 === card2) {
                card2.removeEventListener('click',clickLogic);
                match += 1;
                if (match === 8) {
                    won(); 
                }
            }
            else {
                card1.addEventListener('click',clickLogic);
                setTimeout(() => {      
                    card1.flip();
                    card2.flip();
                }, 1500);
            }
            card1 = null;
        }
    }
    cards.forEach(card => addEventListener('click', clickLogic))

}

main();