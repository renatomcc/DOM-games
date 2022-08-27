const menuDiv = document.getElementById('menuScreen');
const ticTacDiv = document.getElementById('TicTacToe');
const hangMan = document.getElementById('Hangman')
const memory = document.getElementById('Memory');
const wordleDiv = document.getElementById('Wordle');
const geniusGame = document.getElementById('Genius')
const game2048Div = document.getElementById('Game2048');
const flappyBird = document.getElementById('FlappyBird');
const rps = document.getElementById('Rps')
const menuBtn = document.getElementById('menuBtn')

function ticTacToeCall() {
    menuDiv.style.display = 'none';
    menuBtn.style.display = 'flex';
    ticTacDiv.style.display = 'flex';
}

function hangManCall() {
    menuDiv.style.display = 'none';
    hangMan.style.display = 'flex';
    menuBtn.style.display = 'flex';    
    startHangman();
}

function memoryCall() {
    menuDiv.style.display = 'none'
    menuBtn.style.display = 'flex';
    memory.style.display = 'flex';
}

function wordleCall() {
    menuDiv.style.display = 'none';
    menuBtn.style.display = 'flex';
    wordleDiv.style.display = 'flex';
    wordleStart();
}

function geniusCall() {
    menuDiv.style.display = 'none';
    menuBtn.style.display = 'flex';
    geniusGame.style.display = 'flex';
}

function game2048Call() {
    menuDiv.style.display = 'none';
    menuBtn.style.display = 'flex';
    game2048Div.style.display = 'flex';
}

function flappyBirdCall() {
    flappyBird.style.display = 'flex';
    menuBtn.style.display = 'flex';
    menuDiv.style.display = 'none';
    startFlappyBird();
}

function rpsCall() {
    rps.style.display = 'flex';
    menuBtn.style.display = 'flex';
    menuDiv.style.display = 'none';
}

function menuCall() {
    menuDiv.style.display = 'flex';
    menuBtn.style.display = 'none';
    ticTacDiv.style.display = 'none';
    ticTacDiv.style.display = 'none';
    hangMan.style.display = 'none';
    memory.style.display = 'none';
    wordleDiv.style.display = 'none';
    geniusGame.style.display = 'none';
    game2048Div.style.display = 'none';
    flappyBird.style.display = 'none';
    rps.style.display = 'none';
    hangmanResetWord()
}