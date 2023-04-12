var hexCodes = document.querySelectorAll('h2');
var colorBoxes = document.querySelectorAll('.color-box');
var paletteBtn = document.querySelector('#newPaletteBtn');
var boxContainer = document.querySelector('.box-container');
var savePaletteBtn = document.querySelector('#savePaletteBtn');
var savedPalettesContainer = document.querySelector('#saved-palettes');
var savedSectionMsg = document.querySelector('h4')
var currentColorPalette = [];
var hexOptions = 'ABCDEF0123456789'.split('');
var savedPalettes = [];

window.addEventListener('load', displayPalette);
paletteBtn.addEventListener('click', displayPalette);
boxContainer.addEventListener('click', toggleLock);
savePaletteBtn.addEventListener('click', savePalettes);


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
  var newPalette = [];
  for (var i = 0; i < 5; i++) {
    newPalette.push(createHexCode());
  }
  currentColorPalette = newPalette;
}

function changeHexCodes() {
    for(var i =0; i < hexCodes.length; i++) {
        hexCodes[i].innerText = currentColorPalette[i];
    }
}

function changeColorBoxes() {
    for (var i =0; i < colorBoxes.length; i++) {
        colorBoxes[i].style.background =  currentColorPalette[i]
    }
}

function displayPalette() {
    getNewPalette();
    changeHexCodes();
    changeColorBoxes();
}

function toggleLock(event) {
    for (var i = 1; i < 6; i++) {
        if (event.target.parentNode.id === `box${i}`) {
            document.getElementById(`lock${i}`).classList.toggle('hidden');
            document.getElementById(`unlock${i}`).classList.toggle('hidden');
        }
    }
}

function savePalettes() {
    savedPalettes.push(currentColorPalette);
    displaySavedPalettes();
}

function displaySavedPalettes() {
    savedSectionMsg.classList.add('hidden');
    savedPalettesContainer.innerHTML = '';

    for (var i=0; i < savedPalettes.length; i++){
    savedPalettesContainer.innerHTML += `
    <section class="mini-container">
        <section class="mini-palette" style="background-color: ${savedPalettes[i][0]}"></section>
        <section class="mini-palette" style="background-color: ${savedPalettes[i][1]}"></section>
        <section class="mini-palette" style="background-color: ${savedPalettes[i][2]}"></section>
        <section class="mini-palette" style="background-color: ${savedPalettes[i][3]}"></section>
        <section class="mini-palette" style="background-color: ${savedPalettes[i][4]}"></section>
        <img class="delete" src="./assets/delete.png">
    </section>
    `
    }
}