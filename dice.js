// This is a simple Tabris.js app. Feel free to modify as you please.

const {
  Button,
  TextView,
  ui,
  ImageView,
  AlertDialog,
  app
} = require('tabris');

const IMAGE_PATH = 'https://mrmccormack.github.io/imd-learning-tabris/images/';
const MY_TABRIS_PLAYGROUND_URL = 'https://tabrisjs.com/mrmccormack/playground/';

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
      image1.image = IMAGE_PATH + 'whitedice.png';
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
  image: IMAGE_PATH + 'whitedice.png'

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

      label.text = 'New Game';
      winnerimage.image = '';
      numWins = 0;
      image1.image = 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png';

  }).appendTo(ui.contentView);



  new Button({
  alignment: 'center', centerX: 0,  top: 'prev() 10',
  image: IMAGE_PATH + 'github32.png',
    font: '10px',
  text: ' Edit on Tabris.js playground'
}).on({
  select: () => app.launch(MY_TABRIS_PLAYGROUND_URL)
    .then(() => label.text = 'Url has been launched')
    .catch((e) => label.text = e)
}).appendTo(ui.contentView);
