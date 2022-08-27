const wordleGame = document.getElementById('wordleGame');

const words = ["about", 'actor', 'blood', 'being', 'chart', 'carry', 'drink', 'dream'];
var wordleWord;
let randomNum;
let wordleUserGuess;
let wordleCounterTry = 0;
let wordleCounterCorrect = 0;
let wordleCounter = 1;


function displayGame() {
    let wordleCounter = 0;
    for (var i = 0; i < 5; i++) {
        var divRow = document.createElement('div');
        document.getElementById('wordleGame').appendChild(divRow);
        divRow.classList.add("wordleRow");
        for (var j = 0; j < 5; j++) {
            wordleCounter++;
            var divLetter = document.createElement('div');
            divRow.appendChild(divLetter);
            divLetter.classList.add("wordleLetter")
            divLetter.setAttribute('id', wordleCounter);
        }
    }
}


document.getElementById('wordleGuess').addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        wordleUserGuess = document.getElementById('wordleGuess').value.toLowerCase();
        if (String(wordleUserGuess).length != 5) {
            alert('Apenas palavras de 5 letras!')
            return;
        }
        wordleUserGuess = wordleUserGuess.split('');
        document.getElementById('wordleGuess').value = '';
        for (i = 0; i < 5; i++) {
            for (j = 0; j < 5; j++) {
                if (wordleWord[j] == wordleUserGuess[i]) {
                    if (i == j) {
                        wordleCounterCorrect++;
                        document.getElementById(wordleCounter).style.backgroundColor = 'green';
                        document.getElementById(wordleCounter).innerHTML = wordleUserGuess[i].toUpperCase();
                        if(wordleCounterCorrect == 5){
                            wordleCounterCorrect = 0;
                            wordleWin();
                        }
                    }
                    else {
                        if (document.getElementById(wordleCounter).style.backgroundColor != 'green') {
                            document.getElementById(wordleCounter).style.backgroundColor = 'orange';
                            document.getElementById(wordleCounter).innerHTML = wordleUserGuess[i].toUpperCase();
                        }

                    }
                }
                else {
                    if (document.getElementById(wordleCounter).style.backgroundColor != 'green' && document.getElementById(wordleCounter).style.backgroundColor != 'orange') {
                        document.getElementById(wordleCounter).innerHTML = wordleUserGuess[i].toUpperCase();
                        document.getElementById(wordleCounter).style.backgroundColor = 'grey';
                    }
                }
            }
            wordleCounter++;
        }
        wordleCounterCorrect = 0;
        wordleCounterTry++;
        if (wordleCounterTry == 5){
            wordleCounterTry = 0;
            document.getElementById('wordleReset').style.display = 'flex';
            document.getElementById('wordleUserGuess').style.display = 'none';
            document.getElementById('wordleResult').style.display = 'flex'
            document.getElementById('wordleWordResult').innerHTML = (wordleWord.join('')).toUpperCase();
        }
    }
})

function wordleReset() {
    document.getElementById('wordleReset').style.display = 'none';
    document.getElementById('wordleUserGuess').style.display = 'flex';
    wordleCounter = 1;
    wordleCounterTry = 0;
    for (i = 1; i <= 25; i++) {
        document.getElementById(i).innerHTML = '';
        document.getElementById(i).style.backgroundColor = 'lightgrey';
    }
    wordleStart();
}

function wordleWin(){
    wordleCounterTry = 0;
    document.getElementById('wordleUserGuess').style.display = 'none';
    document.getElementById('wordleReset').style.display = 'flex';
}

function wordleStart() {
    randomNum = Math.floor(Math.random() * 8);
    wordleWord = words[randomNum];
    wordleWord = wordleWord.split('')
    document.getElementById('wordleResult').style.display = 'none'
    document.getElementById('wordleWordResult').innerHTML = '';
    console.log(`Wordle word: ${wordleWord.join('').toUpperCase()}`)
}
displayGame()