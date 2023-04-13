// Global Variables
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

// Event Listeners
window.addEventListener('load', loadPage);
paletteBtn.addEventListener('click', displayPalette);
boxContainer.addEventListener('click', toggleLock);
savePaletteBtn.addEventListener('click', savePalettes);
savedPalettesContainer.addEventListener('click', changeSavedDisplay);

// Event Handlers
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function unlockColors() {
    for (var i = 0; i < 5; i++) {
        colorBoxes[i].locked = false;
    }
}

function createHexCode() {
    var hexChars = [];
    for (var i = 0; i < 6; i++) {
        hexChars.push(hexOptions[getRandomIndex(hexOptions)]);
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

function savePalettes() {
    savedPalettes.push(currentColorPalette);
    displaySavedPalettes();
}

function displaySavedPalettes() {
    displayPalette()
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
        <img class="delete" data-index-number="${i}" src="./icons/delete.png">
    </section>
    `
    }
}

function deletePalette(e) {
    if (e.target.className === 'delete') {
        savedPalettes.splice(e.target.dataset.indexNumber, 1);
    }
}

function showMessage() {
    if (savedPalettesContainer.innerHTML === ''){
        savedPalettesContainer.innerHTML = `<h4>No saved palettes yet!</h4>`;
    }
}

function changeSavedDisplay(e) {
    deletePalette(e);
    displaySavedPalettes();
    showMessage();
}