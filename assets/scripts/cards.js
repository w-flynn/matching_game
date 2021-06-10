let images = [] //fill with paths to images

let deck = []
function Card(id,image_path) {
    this.id = id,
    this.loc = null,
    this.flipped = false,
    this.image = image_path
}

Card.prototype = {
    flip: function() {
        if (this.flipped === true) {
            this.flipped = false;
            //JS to change img src to stock background
        }
        else {
            this.flipped = true;
            //JS to change img src to this.image
        }
    }
    place: function
}

for (let i=0; i < images.length; i++) {
    deck.push(new Card(i,images[i]))
}

function deal {
    let count = 0;
    for (let i=0; i < images.length; i++) {
        
    }
}

