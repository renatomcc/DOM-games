

var numbers = [];
var rows = [1, 1, 1, 2, 2, 2];
var columns = [1, 2, 3, 1, 2, 3];
let firstCard = 0;
let firstCardID;
let currentCard = 0;
let correct = 0;
let checking = false;
var cardsDone = [0, 0, 0, 0, 0, 0];


var equal = false;

memoryDisplayGame()
//CREATE ARRAY OF RANDOM NUMBERS -> CREATE DIVS (CARDS) WITH UNIQUE ID -> USE ARRAY OF RANDOM NUMBERS TO GENERATE RANDOM PLACE WITH GRIDAREA
function memoryDisplayGame() {
    let rand = Math.round(Math.floor(Math.random() * 5.5) + (0.5));
    for (i = 0; i < 6; i++) {
        while (numbers.includes(rand)) {
            rand = Math.round(Math.floor(Math.random() * 5.5) + (0.5));
        }
        numbers[i] = rand;
    }
    var game = document.getElementById('memoryContainer');
    for (i = 1; i <= 6; i++) {
        var newDiv = document.createElement('div');
        game.appendChild(newDiv);
        newDiv.setAttribute('id', `memory${i}`);
        newDiv.setAttribute('class', 'memoryBlock')
        newDiv.style.gridArea = rows[numbers[i - 1] - 1] / columns[numbers[i - 1] - 1];
        newDiv.style.backgroundImage = "url('./images/memory_game_face_down_card.png')";
    }
}

//EVENTLISTENER TO CALL FUNCTION FOR EACH CARD
document.addEventListener('click', function (e) {
    if (e.target.classList == "memoryBlock") {
        switch (e.target.id) {
            case 'memory1':
                memoryFaceUpBlock1();
                break;
            case 'memory2':
                memoryFaceUpBlock2();
                break;
            case 'memory3':
                memoryFaceUpBlock3();
                break;
            case 'memory4':
                memoryFaceUpBlock4();
                break;
            case 'memory5':
                memoryFaceUpBlock5();
                break;
            case 'memory6':
                memoryFaceUpBlock6();
                break;
        }
    }
})


//FUNCTION FOR BLOCK 1
function memoryFaceUpBlock1() {
    if (cardsDone[0] == 0 && checking == false) {
        document.getElementById('memory1').style.backgroundImage = "url('./images/bee.png')";
        currentCard = 1;
        if (firstCard == 0) {
            firstCard = 1;
            firstCardID = 1;
        } else if (firstCard == currentCard) {
            correct++;
            cardsDone[0] = 1;
            cardsDone[firstCardID - 1] = 1;
            firstCard = 0;
            if (correct == 3) {
                memoryWin()
            }
        } else {
            checking = true;
            setTimeout(() => {
                memoryTurnFaceDown(firstCardID);
                document.getElementById('memory1').style.backgroundImage = "url('./images/memory_game_face_down_card.png')";
            }, 1000)
        }
    }
}

function memoryFaceUpBlock2() {
    if (cardsDone[1] == 0 && checking == false) {
        document.getElementById('memory2').style.backgroundImage = "url('./images/bee.png')";
        currentCard = 1;
        if (firstCard == 0) {
            firstCard = 1;
            firstCardID = 2;
            return;
        } else if (firstCard == currentCard) {
            correct++;
            cardsDone[1] = 1;
            cardsDone[firstCardID - 1] = 1;
            firstCard = 0;
            if (correct == 3) {
                memoryWin()
            }
        } else {
            checking = true;
            setTimeout(() => {
                memoryTurnFaceDown(firstCardID);
                document.getElementById('memory2').style.backgroundImage = "url('./images/memory_game_face_down_card.png')";
            }, 1000)
        }
    }
}

function memoryFaceUpBlock3() {
    if (cardsDone[2] == 0 && checking == false) {
        document.getElementById('memory3').style.backgroundImage = "url('./images/cicada.png')";
        currentCard = 2;
        if (firstCard == 0) {
            firstCard = 2;
            firstCardID = 3;
            return;
        } else if (firstCard == currentCard) {
            correct++;
            cardsDone[2] = 1;
            cardsDone[firstCardID - 1] = 1;
            firstCard = 0;
            if (correct == 3) {
                memoryWin()
            }
        } else {
            checking = true;
            setTimeout(() => {
                memoryTurnFaceDown(firstCardID);
                document.getElementById('memory3').style.backgroundImage = "url('./images/memory_game_face_down_card.png')";
            }, 1000)
        }
    }
}

function memoryFaceUpBlock4() {
    if (cardsDone[3] == 0 && checking == false) {
        document.getElementById('memory4').style.backgroundImage = "url('./images/cicada.png')";
        currentCard = 2;
        if (firstCard == 0) {
            firstCard = 2;
            firstCardID = 4;
            return;
        } else if (firstCard == currentCard) {
            correct++;
            cardsDone[3] = 1;
            cardsDone[firstCardID - 1] = 1;
            firstCard = 0;
            if (correct == 3) {
                memoryWin()
            }
        } else {
            checking = true;
            setTimeout(() => {
                memoryTurnFaceDown(firstCardID);
                document.getElementById('memory4').style.backgroundImage = "url('./images/memory_game_face_down_card.png')";
            }, 1000)
        }
    }
}

function memoryFaceUpBlock5() {
    if (cardsDone[4] == 0 && checking == false) {
        document.getElementById('memory5').style.backgroundImage = "url('./images/cricket.png')";
        currentCard = 3;
        if (firstCard == 0) {
            firstCard = 3;
            firstCardID = 5;
            return;
        } else if (firstCard == currentCard) {
            correct++;
            cardsDone[4] = 1;
            cardsDone[firstCardID - 1] = 1;
            firstCard = 0;
            if (correct == 3) {
                memoryWin()
            }
        } else {
            checking = true;
            setTimeout(() => {
                memoryTurnFaceDown(firstCardID);
                document.getElementById('memory5').style.backgroundImage = "url('./images/memory_game_face_down_card.png')";
            }, 1000)
        }
    }
}

function memoryFaceUpBlock6() {
    if (cardsDone[5] == 0 && checking == false) {
        document.getElementById('memory6').style.backgroundImage = "url('./images/cricket.png')";
        currentCard = 3;
        if (firstCard == 0) {
            firstCard = 3;
            firstCardID = 6;
            return;
        } else if (firstCard == currentCard) {
            correct++;
            cardsDone[5] = 1;
            cardsDone[firstCardID - 1] = 1;
            firstCard = 0;
            if (correct == 3) {
                memoryWin()
            }
        } else {
            checking = true;
            setTimeout(() => {
                memoryTurnFaceDown(firstCardID);
                document.getElementById('memory6').style.backgroundImage = "url('./images/memory_game_face_down_card.png')";
            }, 1000)
        }
    }
}

//TURN THE FIRST CARD CHECKED TO FACEDOWN IF IT'S NOT EQUAL TO THE OTHER ONE.
function memoryTurnFaceDown(id) {
    checking = false;
    firstCard = 0;
    currentCard = 0;
    switch (id) {
        case 1:
            document.getElementById('memory1').style.backgroundImage = "url('./images/memory_game_face_down_card.png')";
            break;
        case 2:
            document.getElementById('memory2').style.backgroundImage = "url('./images/memory_game_face_down_card.png')";
            break;
        case 3:
            document.getElementById('memory3').style.backgroundImage = "url('./images/memory_game_face_down_card.png')";
            break;
        case 4:
            document.getElementById('memory4').style.backgroundImage = "url('./images/memory_game_face_down_card.png')";
            break;
        case 5:
            document.getElementById('memory5').style.backgroundImage = "url('./images/memory_game_face_down_card.png')";
            break;
        case 6:
            document.getElementById('memory6').style.backgroundImage = "url('./images/memory_game_face_down_card.png')";
            break;
    }
}

//REMOVE ALL DIVS (CARDS) AND CALL FUNCTION AGAIN TO DISPLAY NEW GAME
function memoryWin() {
    setTimeout(() => {
        alert('You Won!');
        numbers = [];
        firstCard = 0;
        currentCard = 0;
        correct = 0;
        checking = false;
        cardsDone = [0, 0, 0, 0, 0, 0];
        var game = document.getElementById('memoryContainer');
        while (game.hasChildNodes()) {
            game.removeChild(game.firstChild);
        }
        memoryDisplayGame();
    }, 300)
}

