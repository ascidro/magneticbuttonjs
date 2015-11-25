var UI = require('ui'); //user interface

var card = new UI.Card({ //A Card is a type of Window
  title: 'Magnetic Button',
  body: 'Press any Button for the Magnetic Button Function of Google Cardboard',
  scrollable: false
});

card.show(); //After creating a card window, push it onto the screen with the show() method.

card.on('click', function(r) { //To interact use buttons. Add callbacks to a window with the .on() method:
  card.subtitle('Button ' + r.button + ' pressed.');
});
//event handler