// Global Variables
var hexCodes = document.querySelectorAll('h2');
var colorBoxes = document.querySelectorAll('.color-box');
var paletteBtn = document.querySelector('#newPaletteBtn');
var boxContainer = document.querySelector('.box-container');

var currentColorPalette = [];
var hexOptions = 'ABCDEF0123456789'.split('');

// Event Listeners
window.addEventListener('load', loadPage);
paletteBtn.addEventListener('click', displayPalette);
boxContainer.addEventListener('click', toggleLock);

// Event Handlers
function getRandomIndex() {
    return Math.floor(Math.random() * hexOptions.length);
}

function unlockColors() {
    for (var i = 0; i < 5; i++) {
        colorBoxes[i].locked = false;
    }
}

function createHexCode() {
    var hexChars = [];
    for (var i = 0; i < 6; i++) {
        hexChars.push(hexOptions[getRandomIndex()]);
    }
    var hexCode = hexChars.join('');
    return `#${hexCode}`;
}

function getNewPalette() {
  var newPalette = [];
  for (var i = 0; i < 5; i++) {
    if (!colorBoxes[i].locked) {
        newPalette.push(createHexCode());
    } else {
        newPalette.push(hexCodes[i].innerText);
    }
  }
  currentColorPalette = newPalette;
} 

function changeHexCodes() {
    for (var i = 0; i < hexCodes.length; i++) {
        hexCodes[i].innerText = currentColorPalette[i];
    }
}

function changeColorBoxes() {
    for (var i = 0; i < colorBoxes.length; i++) {
        colorBoxes[i].style.background =  currentColorPalette[i];
    }
}

function toggleLock(event) {
    for (var i = 1; i < 6; i++) {
        if (event.target.parentNode.id === `box${i}`) {
            document.getElementById(`lock${i}`).classList.toggle('hidden');
            document.getElementById(`unlock${i}`).classList.toggle('hidden');
            document.getElementById(`box${i}`).locked = !document.getElementById(`box${i}`).locked;
        }
    }
}

function displayPalette() {
    getNewPalette();
    changeHexCodes();
    changeColorBoxes();
}

function loadPage() {
    unlockColors();
    displayPalette();
}