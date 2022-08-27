const game2048 = document.getElementById('Game2048Container');
var game2048RandomNumb = Math.floor(Math.random() * 16) + 1;
var body = document.getElementById('body');
var game2048moved = false;
var game2048SumDone = false;
let game2048SumCounter = 0;

var game2048Board = [
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', '']
];

var game2048SumVerification = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]

display2048Game();
game2048UpdateBGColor();

//GENERATE 4 DIVS WITH 4 CHILDREN EACH AND GENERATE 1 RANDOM '2' 
function display2048Game() {
    let game2048Counter = 0;
    for (i = 0; i < 4; i++) {
        var newRow2048 = document.createElement('div');
        document.getElementById('Game2048Container').appendChild(newRow2048);
        newRow2048.classList.add("game2048row");
        for (j = 0; j < 4; j++) {
            game2048Counter++;
            var new2048Square = document.createElement('div');
            newRow2048.appendChild(new2048Square);
            new2048Square.classList.add("game2048Square")
            new2048Square.setAttribute('id', `${game2048Counter}2048`);
        }
    }
    row = Math.floor(Math.random() * 3.9);
    column = Math.floor(Math.random() * 3.9);
    game2048Board[row][column] = 2;
    game2048UpdateBGColor();
    udpate2048Game();
}

//DISPLAY THE GAME UDPATED AFTER A CHANGE
function udpate2048Game() {
    let game2048Counter = 0;
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            game2048Counter++;
            document.getElementById(`${game2048Counter}2048`).innerHTML = game2048Board[i][j];
        }
    }
    game2048UpdateBGColor();
}

// EVENT LISTENER ON BODY TO GET KEYS FROM USER
body.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            game2048MoveUp();
            game2048GenerateNewNumbers();
            game2048moved = false;
            break;

        case 'ArrowRight':

            game2048MoveRight();
            game2048GenerateNewNumbers();
            game2048moved = false;
            break;

        case 'ArrowDown':
            game2048MoveDown();
            game2048GenerateNewNumbers();
            game2048moved = false;
            break;

        case 'ArrowLeft':
            game2048MoveLeft();
            game2048GenerateNewNumbers();
            game2048moved = false;
            break;
    }
})

function game2048MoveUp() {
    for (k = 0; k < 3; k++) {
        for (i = 1; i < 4; i++) {
            for (j = 0; j < 4; j++) {
                game2048SumCounter++;
                if (game2048Board[i][j] != '' && game2048Board[i - 1][j] == '') {
                    game2048Board[i - 1][j] = game2048Board[i][j];
                    game2048Board[i][j] = '';
                    game2048moved = true;
                } else
                    if (game2048Board[i][j] == game2048Board[i - 1][j] && game2048Board[i][j] != '') {
                        console.log(game2048SumVerification[i][j] && game2048SumVerification[i - 1][j] == 0)
                        if (game2048SumVerification[i][j] == 0) {
                            game2048Board[i][j] = '';
                            game2048Board[i - 1][j] *= 2;
                            game2048SumVerification[i - 1][j] = 1;
                        }
                        game2048moved = true;
                    }
            }
        }
    }
    game2048ResetBoardSum();
    udpate2048Game();
}

function game2048MoveRight() {
    for (k = 0; k < 3; k++) {
        for (i = 3; i >= 0; i--) {
            for (j = 3; j >= 1; j--) {
                if (game2048Board[i][j] == '' && game2048Board[i][j - 1] != '') {
                    game2048Board[i][j] = game2048Board[i][j - 1];
                    game2048Board[i][j - 1] = '';
                    game2048moved = true;
                } else
                    if (game2048Board[i][j] == game2048Board[i][j - 1] && game2048Board[i][j] != '') {
                        if (game2048SumVerification[i][j] == 0 && game2048SumVerification[i][j - 1] == 0) {
                            game2048Board[i][j] *= 2;
                            game2048Board[i][j - 1] = '';
                            game2048SumVerification[i][j] = 1;
                        }
                        game2048moved = true;
                    }
            }
        }
    }
    game2048ResetBoardSum();
    udpate2048Game();
}

function game2048MoveDown() {
    for (k = 0; k < 3; k++) {
        for (i = 2; i >= 0; i--) {
            for (j = 3; j >= 0; j--) {
                if (game2048Board[i][j] != '' && game2048Board[i + 1][j] == '') {
                    game2048Board[i + 1][j] = game2048Board[i][j];
                    game2048Board[i][j] = '';
                    game2048moved = true;
                } else
                    if (game2048Board[i][j] == game2048Board[i + 1][j] && game2048Board[i][j] != '') {
                        if (game2048SumVerification[i][j] == 0 && game2048SumVerification[i + 1][j] == 0) {
                            game2048Board[i][j] = '';
                            game2048Board[i + 1][j] *= 2;
                            game2048SumVerification[i + 1][j] = 1;
                        }
                        game2048moved = true;
                    }
            }
        }
    }
    game2048ResetBoardSum();
    udpate2048Game();
}

function game2048MoveLeft() {
    for (k = 0; k < 3; k++) {
        for (i = 0; i < 4; i++) {
            for (j = 1; j < 4; j++) {
                if (game2048Board[i][j] != '' && game2048Board[i][j - 1] == '') {
                    game2048Board[i][j - 1] = game2048Board[i][j];
                    game2048Board[i][j] = '';
                    game2048moved = true;
                } else
                    if (game2048Board[i][j] == game2048Board[i][j - 1] && game2048Board[i][j] != '') {
                        if (game2048SumVerification[i][j] == 0 && game2048SumVerification[i][j - 1] == 0) {
                            game2048Board[i][j] = '';
                            game2048Board[i][j - 1] *= 2;
                            game2048SumVerification[i][j] = 1;
                        }
                        game2048moved = true;
                    }
            }
        }
    }
    game2048ResetBoardSum();
    udpate2048Game();
}

//PUT ALL 
function game2048ResetBoardSum() {
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            game2048SumVerification[i][j] = 0;
        }
    }
}

//GENERATE A 2 ON A RANDOM EMPTY SPACE
function game2048GenerateNewNumbers() {
    let generationConcluded = false;
    let row;
    let column;
    let allowGeneration = false;
    if (game2048moved == true) {
        for (i = 0; i < 4; i++) {
            for (j = 0; j < 4; j++) {
                if (game2048Board[i][j] == '') {
                    allowGeneration = true;
                }
            }
        }
        if (allowGeneration == true && game2048moved == true) {
            while (generationConcluded == false) {
                row = Math.floor(Math.random() * 3.9);
                column = Math.floor(Math.random() * 3.9);
                if (game2048Board[row][column] == '') {
                    game2048Board[row][column] = 2;
                    generationConcluded = true;
                    udpate2048Game();
                }
            }
            game2048moved = false;
        }
    }

}

function game2048UpdateBGColor() {
    let game2048Counter = 0;
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            game2048Counter++;
            switch (game2048Board[i][j]) {
                case '':
                    document.getElementById(`${game2048Counter}2048`).style.backgroundColor = '#CCC0B3';
                    break;
                case 2:
                    document.getElementById(`${game2048Counter}2048`).style.backgroundColor = '#EEE4DA';
                    break;
                case 4:
                    document.getElementById(`${game2048Counter}2048`).style.backgroundColor = '#ECCB5C';
                    break;
                case 8:
                    document.getElementById(`${game2048Counter}2048`).style.backgroundColor = '#FF8343';
                    break;
                case 16:
                    document.getElementById(`${game2048Counter}2048`).style.backgroundColor = '#FF9500';
                    break;
                case 32:
                    document.getElementById(`${game2048Counter}2048`).style.backgroundColor = '#FF6F4D';
                    break;
                case 64:
                    document.getElementById(`${game2048Counter}2048`).style.backgroundColor = '#FF481E';
                    break;
                case 128:
                    document.getElementById(`${game2048Counter}2048`).style.backgroundColor = '#D22700';
                    break;
                case 256:
                    document.getElementById(`${game2048Counter}2048`).style.backgroundColor = '#EDCC61';
                    break;
                case 512:
                    document.getElementById(`${game2048Counter}2048`).style.backgroundColor = '#D77E00';
                    break;
                case 1024:
                    document.getElementById(`${game2048Counter}2048`).style.backgroundColor = '#EDC22E';
                    break;
                case 2048:
                    document.getElementById(`${game2048Counter}2048`).style.backgroundColor = '#D7A700';
                    break;
                case 4096:
                    document.getElementById(`${game2048Counter}2048`).style.backgroundColor = '#B784AB';
                    break;
                case 8192:
                    document.getElementById(`${game2048Counter}2048`).style.backgroundColor = '#A7388D';
                    break;
                case 16384:
                    document.getElementById(`${game2048Counter}2048`).style.backgroundColor = '#82007B';
                    break;
            }
        }
    }
}

function game2048Reset() {
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            game2048Board[i][j] = '';
        }
    }
    row = Math.floor(Math.random() * 3.9);
    column = Math.floor(Math.random() * 3.9);
    game2048Board[row][column] = 2;
    udpate2048Game();
}