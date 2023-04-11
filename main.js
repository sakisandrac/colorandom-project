var hexCodes = document.querySelectorAll('h2');
var colorBoxes = document.querySelectorAll('.color-box');
var paletteBtn = document.querySelector('.palette-button')

var allHexCodes = Array.from(hexCodes);
var allColorBoxes = Array.from(colorBoxes);

window.addEventListener('load', displayPalette);
paletteBtn.addEventListener('click', displayPalette);

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

function changeHexCodes() {
    for(var i =0; i < allHexCodes.length; i++) {
        allHexCodes[i].innerText = currentColorPalette[i];
    }
}

function displayPalette() {
    getNewPalette();
    changeHexCodes();
}