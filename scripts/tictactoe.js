const ticTacScoreP1 = document.getElementById('ticTacScoreP1')
const ticTacScoreP2 = document.getElementById('ticTacScoreP2')
const ticTacStart = document.getElementById('ticTacStart')
ticTacScoreP1.innerHTML = "0";
ticTacScoreP2.innerHTML = "0";
const ticticTacBlock1Div = document.getElementById('ticTacblock1');
const ticticTacBlock2Div = document.getElementById('ticTacblock2');
const ticticTacBlock3Div = document.getElementById('ticTacblock3');
const ticticTacBlock4Div = document.getElementById('ticTacblock4');
const ticticTacBlock5Div = document.getElementById('ticTacblock5');
const ticticTacBlock6Div = document.getElementById('ticTacblock6');
const ticticTacBlock7Div = document.getElementById('ticTacblock7');
const ticticTacBlock8Div = document.getElementById('ticTacblock8');
const ticticTacBlock9Div = document.getElementById('ticTacblock9');


var p1Letter;
var p2Letter;
var p1Score = 0;
var p2Score = 0;
var currentPlayer = 0;
var playsCount = 0;


function ticTacBlock1() {
    if (ticticTacBlock1Div.innerHTML == '') {
        if (p1Letter && p2Letter) {
            if (currentPlayer == 0) {
                ticticTacBlock1Div.innerHTML = p1Letter;
                playsCount++;
                checkHorizontal();
                checkVertical();
                checkDiagonal();
                currentPlayer = 1;
                if (playsCount == 9) tttGameover();
            } else {
                ticticTacBlock1Div.innerHTML = p2Letter;
                playsCount++;
                checkHorizontal();
                checkVertical();
                checkDiagonal();
                currentPlayer = 0;
                console.log(playsCount)
                if (playsCount > 8) {
                    tttGameover();
                }
            }
        }
    }
}

function tttGameover() {
    ticTacStart.style.display = 'flex';
    playsCount = 0;
    p1Letter = null;
    p2Letter = null;
    ticticTacBlock1Div.innerHTML = '';
    ticticTacBlock2Div.innerHTML = '';
    ticticTacBlock3Div.innerHTML = '';
    ticticTacBlock4Div.innerHTML = '';
    ticticTacBlock5Div.innerHTML = '';
    ticticTacBlock6Div.innerHTML = '';
    ticticTacBlock7Div.innerHTML = '';
    ticticTacBlock8Div.innerHTML = '';
    ticticTacBlock9Div.innerHTML = '';
}

function checkHorizontal() {
    if ((ticticTacBlock1Div.innerHTML != '' && ticticTacBlock1Div.innerHTML == ticticTacBlock2Div.innerHTML && ticticTacBlock1Div.innerHTML == ticticTacBlock3Div.innerHTML) ||
        (ticticTacBlock4Div.innerHTML != '' && ticticTacBlock4Div.innerHTML == ticticTacBlock5Div.innerHTML && ticticTacBlock4Div.innerHTML == ticticTacBlock6Div.innerHTML) ||
        (ticticTacBlock7Div.innerHTML != '' && ticticTacBlock7Div.innerHTML == ticticTacBlock8Div.innerHTML && ticticTacBlock7Div.innerHTML == ticticTacBlock9Div.innerHTML)) {
        p1Letter = null;
        p2Letter = null;
        if (currentPlayer == 0) {
            p1Score++;
            ticTacScoreP1.innerHTML = (parseInt(ticTacScoreP1.innerHTML) + 1);
            setTimeout(() => {
                alert("P1 Win");
                tttGameover();
            }, 300)
        }
        else {
            p2Score++;
            ticTacScoreP2.innerHTML = (parseInt(ticTacScoreP2.innerHTML) + 1);
            setTimeout(() => {
                alert("P2 Win");
                tttGameover();
            }, 300)
        }
    }
}

function checkVertical() {
    if ((ticticTacBlock1Div.innerHTML != '' && ticticTacBlock1Div.innerHTML == ticticTacBlock4Div.innerHTML && ticticTacBlock1Div.innerHTML == ticticTacBlock7Div.innerHTML) ||
        (ticticTacBlock2Div.innerHTML != '' && ticticTacBlock2Div.innerHTML == ticticTacBlock5Div.innerHTML && ticticTacBlock2Div.innerHTML == ticticTacBlock8Div.innerHTML) ||
        (ticticTacBlock3Div.innerHTML != '' && ticticTacBlock3Div.innerHTML == ticticTacBlock6Div.innerHTML && ticticTacBlock3Div.innerHTML == ticticTacBlock9Div.innerHTML)) {
        p1Letter = null;
        p2Letter = null;
        if (currentPlayer == 0) {
            p1Score++;
            ticTacScoreP1.innerHTML = (parseInt(ticTacScoreP1.innerHTML) + 1);
            setTimeout(() => {
                alert("P1 Win");
                tttGameover();
            }, 300)
        }
        else {
            p2Score++;
            ticTacScoreP2.innerHTML = (parseInt(ticTacScoreP2.innerHTML) + 1);
            setTimeout(() => {
                alert("P2 Win");
                tttGameover();
            }, 300)
        }
    }
}

function checkDiagonal() {
    if ((ticticTacBlock1Div.innerHTML != '' && ticticTacBlock1Div.innerHTML == ticticTacBlock5Div.innerHTML && ticticTacBlock1Div.innerHTML == ticticTacBlock9Div.innerHTML) ||
        (ticticTacBlock3Div.innerHTML != '' && ticticTacBlock3Div.innerHTML == ticticTacBlock5Div.innerHTML && ticticTacBlock3Div.innerHTML == ticticTacBlock7Div.innerHTML)) {
        p1Letter = null;
        p2Letter = null;
        if (currentPlayer == 0) {
            p1Score++;
            ticTacScoreP1.innerHTML = (parseInt(ticTacScoreP1.innerHTML) + 1);
            setTimeout(() => {
                alert("P1 Win");
                tttGameover();
            }, 300)
        }
        else {
            p2Score++;
            ticTacScoreP2.innerHTML = (parseInt(ticTacScoreP2.innerHTML) + 1);
            setTimeout(() => {
                alert("P2 Win");
                tttGameover();
            }, 300)
        }
    }
}


function ticTacBlock2() {
    if (ticticTacBlock2Div.innerHTML == '') {
        if (p1Letter && p2Letter) {
            if (currentPlayer == 0) {
                ticticTacBlock2Div.innerHTML = p1Letter;
                playsCount++;
                checkHorizontal();
                checkVertical();
                checkDiagonal();
                currentPlayer = 1;
                console.log(playsCount)
                if (playsCount > 8) {
                    tttGameover();
                }
            } else {
                ticticTacBlock2Div.innerHTML = p2Letter;
                playsCount++;
                checkHorizontal();
                checkVertical();
                checkDiagonal();
                currentPlayer = 0;
                console.log(playsCount)
                if (playsCount > 8) {
                    tttGameover();
                }
            }
        }
    }
}

function ticTacBlock3() {
    if (ticticTacBlock3Div.innerHTML == '') {
        if (p1Letter && p2Letter) {
            if (currentPlayer == 0) {
                ticticTacBlock3Div.innerHTML = p1Letter;
                playsCount++;
                checkHorizontal();
                checkVertical();
                checkDiagonal();
                currentPlayer = 1;
                if (playsCount == 9) tttGameover();
            } else {
                ticticTacBlock3Div.innerHTML = p2Letter;
                playsCount++;
                checkHorizontal();
                checkVertical();
                checkDiagonal();
                currentPlayer = 0;
                console.log(playsCount)
                if (playsCount > 8) {
                    tttGameover();
                }
            }
        }
    }
}

function ticTacBlock4() {
    if (ticticTacBlock4Div.innerHTML == '') {
        if (p1Letter && p2Letter) {
            if (currentPlayer == 0) {
                ticticTacBlock4Div.innerHTML = p1Letter;
                playsCount++;
                checkHorizontal();
                checkVertical();
                checkDiagonal();
                currentPlayer = 1;
                if (playsCount == 9) tttGameover();
            } else {
                ticticTacBlock4Div.innerHTML = p2Letter;
                playsCount++;
                checkHorizontal();
                checkVertical();
                checkDiagonal();
                currentPlayer = 0;
                console.log(playsCount)
                if (playsCount > 8) {
                    tttGameover();
                }
            }
        }
    }
}

function ticTacBlock5() {
    if (ticticTacBlock5Div.innerHTML == '') {
        if (p1Letter && p2Letter) {
            if (currentPlayer == 0) {
                ticticTacBlock5Div.innerHTML = p1Letter;
                playsCount++;
                checkHorizontal();
                checkVertical();
                checkDiagonal();
                currentPlayer = 1;
                if (playsCount == 9) tttGameover();
            } else {
                ticticTacBlock5Div.innerHTML = p2Letter;
                playsCount++;
                checkHorizontal();
                checkVertical();
                checkDiagonal();
                currentPlayer = 0;
                console.log(playsCount)
                if (playsCount > 8) {
                    tttGameover();
                }
            }
        }
    }
}

function ticTacBlock6() {
    if (ticticTacBlock6Div.innerHTML == '') {
        if (p1Letter && p2Letter) {
            if (currentPlayer == 0) {
                ticticTacBlock6Div.innerHTML = p1Letter;
                playsCount++;
                checkHorizontal();
                checkVertical();
                checkDiagonal();
                currentPlayer = 1;
                if (playsCount == 9) tttGameover();
            } else {
                ticticTacBlock6Div.innerHTML = p2Letter;
                playsCount++;
                checkHorizontal();
                checkVertical();
                checkDiagonal();
                currentPlayer = 0;
                console.log(playsCount)
                if (playsCount > 8) {
                    tttGameover();
                }
            }
        }
    }
}

function ticTacBlock7() {
    if (ticticTacBlock7Div.innerHTML == '') {
        if (p1Letter && p2Letter) {
            if (currentPlayer == 0) {
                ticticTacBlock7Div.innerHTML = p1Letter;
                playsCount++;
                checkHorizontal();
                checkVertical();
                checkDiagonal();
                currentPlayer = 1;
                if (playsCount == 9) tttGameover();
            } else {
                ticticTacBlock7Div.innerHTML = p2Letter;
                playsCount++;
                checkHorizontal();
                checkVertical();
                checkDiagonal();
                currentPlayer = 0;
                console.log(playsCount)
                if (playsCount > 8) {
                    tttGameover();
                }
            }
        }
    }
}

function ticTacBlock8() {
    if (ticticTacBlock8Div.innerHTML == '') {
        if (p1Letter && p2Letter) {
            if (currentPlayer == 0) {
                ticticTacBlock8Div.innerHTML = p1Letter;
                playsCount++;
                checkHorizontal();
                checkVertical();
                checkDiagonal();
                currentPlayer = 1;
                if (playsCount == 9) tttGameover();
            } else {
                ticticTacBlock8Div.innerHTML = p2Letter;
                playsCount++;
                checkHorizontal();
                checkVertical();
                checkDiagonal();
                currentPlayer = 0;
                console.log(playsCount)
                if (playsCount > 8) {
                    tttGameover();
                }
            }
        }
    }
}

function ticTacBlock9() {
    if (ticticTacBlock9Div.innerHTML == '') {
        if (p1Letter && p2Letter) {
            if (currentPlayer == 0) {
                ticticTacBlock9Div.innerHTML = p1Letter;
                playsCount++;
                checkHorizontal();
                checkVertical();
                checkDiagonal();
                currentPlayer = 1;
                if (playsCount == 9) tttGameover();
            } else {
                ticticTacBlock9Div.innerHTML = p2Letter;
                playsCount++;
                checkHorizontal();
                checkVertical();
                checkDiagonal();
                currentPlayer = 0;
                console.log(playsCount)
                if (playsCount > 8) {
                    tttGameover();
                }
            }
        }
    }
}

function ticTacXChoose() {
    currentPlayer = 0;
    p1Letter = "X";
    p2Letter = "O";
    ticTacStart.style.display = 'none';
}

function tictacOChoose() {
    currentPlayer = 0;
    p1Letter = "O";
    p2Letter = "X";
    ticTacStart.style.display = 'none';
}