// This is a simple Tabris.js app. Feel free to modify as you please.

const {Button, TextView, ui, ImageView, AlertDialog} = require('tabris');

const IMAGE_PATH = 'https://mrmccormack.github.io/imd-learning-tabris/images/';

let casinoimage = new ImageView({
   left: 10, top: 10,
   image: IMAGE_PATH + 'casino.jpg'
}).appendTo(ui.contentView);

// Create a push button and add it to the content view
let button = new Button({
  left: 10, top: 'prev() 10',
  text: 'Roll the Dice Rob Casino!'
}).appendTo(ui.contentView);

let button1 = new Button({
  centerX: 0, top: 'prev() 10',
  text: 'Change image'
})
  .on('select', () => {
    image1.image = IMAGE_PATH + '1.png';
  })
  .appendTo(ui.contentView);


let button2 = new Button({
  centerX: 0, top: 'prev() 10',
  text: 'Change image'
})
  .on('select', () => {
    image1.image = 'https://cdn0.iconfinder.com/data/icons/cube-four/64/Dice-256.png';
  })
  .appendTo(ui.contentView);

// Create a text view and add it too
let label = new TextView({
  left: 10, top: 'prev() 10',
  font: '24px'
}).appendTo(ui.contentView);

// Change the text when the button is pressed
button.on('select', () =>
 label.text = 'You got a 6. Tabris.js rocks!',
 label.text = 'aaa!',
 //image1.image = ''
// image1.image ='https://images-na.ssl-images-amazon.com/images/I/410XLGFACmL._SL500_AC_SS350_.jpg'

 //button.text = 'xxx'
 );

 // Change the text when the button is pressed
button1.on('select', () =>
label.text = 'This is button 1!',
// button.text = 'button 1!',
 //button.text = 'xxx'
 );

 // createImageView('fit');
 // const {ImageView} = require('tabris');

// Display images with different scale modes

createImageView('fit');

function createImageView(scaleMode) {
  new ImageView({
    left: 10, top: 'prev() 10', width: 250, height: 100,
    image: 'https://lh3.ggpht.com/2ZbR3AYxGipGK-7rv7Zvmz2l1rmaaK8_Ncr9jWE7IdIxfI5lmgfIiFPnC5nZZEsqnRWL=w300',
    scaleMode: scaleMode
  }).appendTo(ui.contentView);
}

let image1 = new ImageView({
   left: 10, top: 'prev() 10', width: 250, height: 100,
   image: 'https://vignette.wikia.nocookie.net/game-of-dice/images/c/cb/White_Dice.png/revision/latest?cb=20160113233423',
}).appendTo(ui.contentView);
