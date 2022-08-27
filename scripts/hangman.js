let chooseLanguage;
const englishWords = ["ant", "ahead", "above", "ball", "car", "dice", "elephant", "fruit", "gold", "hire", "inner", "joke", "lemon", "monkey", "number", "orphan", "pants", "query", "ultra", "violet", "zebra", "yellow"];
const portugueseWords = ["andar", "bebedouro", "caminhar", "domestico", "elefante", "fruta", "gangorra", "homem", "incenso", "jacare", "limao", "macaco", "numero", "orfanato", "pessoa", "queijo", "uniao", "violeta", "zebra"];
let randomNumb;
let englishWord;
let portugueseWord;
let hangmanUserInput;
let counterCorrect = 0;
let counterBody = 1;
let usedWords = [];

const gameDiv = document.getElementById('gameContainer');
var guessedLetters = document.getElementById('guessedLetters');
var inputDiv = document.getElementById('hangmanUserInput');
const hangmanKeyboard = document.getElementById('hangmanKeyboard');
const alphabet = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];


function startHangman() {
    randomNumb = Math.floor(Math.random() * 22);
    englishWord = englishWords[randomNumb].toUpperCase();
    counterBody = 0;
    counterCorrect = 0;
    usedWords = [];
    document.getElementById('gameContainer').style.color = 'orange';
    for (i = 0; i < englishWord.length; i++) {
        let el = document.createElement('div');
        el.setAttribute('id', i);
        gameDiv.appendChild(el);
        el.innerHTML = '_'
    }
    console.log(`HangMan word: ${englishWord}`);
}

document.addEventListener('click', function (e) {
    if (e.target.classList == "hangmanLetterOption") {
        guess(e.target.innerHTML.toUpperCase())
    }
})

function hangmanDisplayKeyboard() {
    for (i = 0; i <= alphabet.length - 1; i++) {
        let newDiv = document.createElement('div');
        hangmanKeyboard.appendChild(newDiv);
        newDiv.classList.add('hangmanLetterOption');
        newDiv.setAttribute('id', `hm${i}`);
        newDiv.innerHTML = alphabet[i];
    }
}
hangmanDisplayKeyboard()

function guess(input) {
    let userGuess = input.toUpperCase()
    if (usedWords.includes(userGuess)) {
        alert('Enter a new guess');
        return;
    }
    if (userGuess.length > 1) {
        alert('Guess only 1 letter!');
        return;
    }
    if (englishWord.includes(userGuess)) {
        for (i = 0; i < englishWord.length; i++) {
            if (userGuess == englishWord[i]) {
                let changeHTML = document.getElementById(i);
                changeHTML.innerHTML = userGuess;
                counterCorrect++;
            }
        }
        if (counterCorrect == englishWord.length) {
            document.getElementById('gameContainer').style.color = 'lightgreen';
            setTimeout(() => {
                win();
            }, 300)
            return;
        }
        usedWords.push(userGuess);
        guessedLetters.innerHTML = usedWords;
    } else {
        counterBody++;
        hangmanUpdateBody(counterBody);
        setTimeout(() => {
            if (counterBody == 6) {
                hangmanGameover();
                return;
            }
        }, 300)

        usedWords.push(userGuess);
        guessedLetters.innerHTML = usedWords;
    }
}

function hangmanUpdateBody(counter) {
    document.getElementById(`hm${counter}`).style.display = 'flex';
}

function win() {
    alert('You won!');
    for (i = 0; i < englishWord.length; i++) {
        let element = document.getElementById(i);
        element.remove();
    }
    usedWords = [];
    guessedLetters.innerHTML = usedWords;
    hangmanResetBody();
    startHangman();
}

function hangmanGameover() {
    alert('You lost!');
    for (i = 0; i < englishWord.length; i++) {
        let element = document.getElementById(i);
        element.remove();
    }
    usedWords = [];
    guessedLetters.innerHTML = usedWords;
    hangmanResetBody();
    startHangman();
}

function hangmanResetBody() {
    for (i = 1; i <= 6; i++) {
        document.getElementById(`hm${i}`).style.display = 'none';
    }
}

function hangmanResetWord() {
    for (i = 0; i < englishWord.length; i++) {
        document.getElementById(`${i}`).remove();
    }
}