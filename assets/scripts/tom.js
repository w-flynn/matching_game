//setting the variables
const cards = document.querySelectorAll('.memory-card')

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add(flip);
        //on first click
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    }else {
        //second card
        hasFlippedCard = false;
        secondCard = this;
    
        //match cards- need to had a data-match tag to cards in html doc
        if (firstCard.dataset.framework ==
            secondCard.dataset.framework) {
                //match
                firstCard.removeEventListener(click, flipCard);
                secondCard.removeEventListener(click, flipCard);
            } else {
                //not a match
                setTimeout(() => {      
                    firstCard.classList.remove(flip);
                    secondCard.classList.remove(flip);
                }, 1500);
} 

         
        }

}

cards.forEach(card => addEventListener('click', flipCard))