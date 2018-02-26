// This is a simple Tabris.js app. Feel free to modify as you please.

const {
  Button,
  TextView,
  ui,
  ImageView,
  AlertDialog
} = require('tabris');

const IMAGE_PATH = 'https://mrmccormack.github.io/imd-learning-tabris/images/';

let numWins = 0;

let casinoimage = new ImageView({
  top: 10,
  centerX: 0,
  image: IMAGE_PATH + 'casino.jpg'
}).appendTo(ui.contentView);

let button = new Button({
    centerX: 0,
    top: 'prev() 10',
    text: 'Roll Dice'
  })
  .on('select', () => {
    var rand = 1 + Math.floor(Math.random() * 6);

    image1.image = IMAGE_PATH + rand + '.png';

    if (rand == 6) {
      label.text = 'WINNER, you got a 6';
      numWins = numWins + 1 ;
      winnerimage.image = IMAGE_PATH + 'winner.jpg';
    } else {
      label.text = 'Try again- Wins so far ' + numWins;
      winnerimage.image = '';
    }

    if (numWins == 5){
      label.text = 'You WON with 5 wins!';
          image1.image = 'https://vignette.wikia.nocookie.net/game-of-dice/images/c/cb/White_Dice.png/revision/latest?cb=20160113233423';
      winnerimage.image = '';
      numWins = 0;
    }

  }).appendTo(ui.contentView);

// Create a text view and add it too
let label = new TextView({
  centerX: 0,
  top: 'prev() 10',
  font: '14px',
  text: 'Welcome to Mr. M. Casino'
}).appendTo(ui.contentView);

// Display images with different scale modes

let image1 = new ImageView({
  top: 'prev() 10',
  width: 100,
  height: 100,
  centerX: 0,
  scaleMode: 'fill',
  image: 'https://vignette.wikia.nocookie.net/game-of-dice/images/c/cb/White_Dice.png/revision/latest?cb=20160113233423',

}).appendTo(ui.contentView);



let winnerimage = new ImageView({
  top: 'prev() 10',
  width: 100,
  height: 100,
  centerX: 0,
  scaleMode: 'fill',
  }).appendTo(ui.contentView);

  let resetbutton = new Button({
    centerX: 0,
    top: 'prev() 10',
    text: 'Reset'
  })
  .on('select', () => {

    image1.image = 'https://vignette.wikia.nocookie.net/game-of-dice/images/c/cb/White_Dice.png/revision/latest?cb=20160113233423';
      label.text = 'New Game';
      winnerimage.image = '';
      numWins = 0;

  }).appendTo(ui.contentView);
