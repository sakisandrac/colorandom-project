var hexCodes = document.querySelectorAll('h2');
var colorBoxes = document.querySelectorAll('.color-box');
var paletteBtn = document.querySelector('.palette-button')

var currentColorPalette = [];
var hexOptions = 'ABCDEF0123456789'.split('');

function getRandomIndex() {
    return Math.floor(Math.random() * hexOptions.length);
}

function createHexCode() {
    var hexChars = [];
    for (var i = 0; i < 6; i++) {
        hexChars.push(hexOptions[getRandomIndex()])
    }
    var hexCode = hexChars.join('');
    return `#${hexCode}`;
}

function getNewPalette() {
  newPalette = [];
  for (var i = 0; i < 5; i++) {
    newPalette.push(createHexCode());
  }
  currentColorPalette = newPalette;
} 