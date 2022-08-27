var geniusSequence = [];
var geniusUserSequence = [];
let geniusRandomNumber;
let geniusRoundCounter = 1;
let geniusScore;
let geniusCounter = 0;
let geniusAllowClick = false;


//START THE GAME
function geniusStartGame() {
    geniusGenerateSequence()
    geniusPlaySequence()
    document.getElementById('geniusStartGame').style.display = 'none'
}

//GENERATE RANDOM NUMBERS TO PLAY A RANDOM SEQUENCE
function geniusGenerateSequence() {
    for (i = 0; i < geniusRoundCounter; i++) {
        geniusRandomNumber = Math.floor(Math.random() * 4);
        geniusSequence.push(geniusRandomNumber);
    }
    // console.log(geniusSequence)
}

//PLAY THE SEQUENCE
function geniusPlaySequence() {
    // console.log('geniusPlaySequence chamada')
    sequence = setInterval(() => {
        // console.log('interval chamado')
        geniusBeep(geniusSequence[geniusCounter]);
        geniusCounter++;
        if (geniusCounter == geniusSequence.length) {
            // console.log('deveria ter limpado')
            geniusCounter = 0;
            geniusAllowUserClick();
            clearInterval(sequence);
        }
    }, 1300)
}

//BLOCK USER FROM CLICKING BUTTONS WHILE THE SEQUENCE IS BEING PLAYED
function geniusStopAllowingUserClick() {
    document.getElementById('geniusYellow').classList.remove('hover');
    document.getElementById('geniusRed').classList.remove('hover');
    document.getElementById('geniusGreen').classList.remove('hover');
    document.getElementById('geniusBlue').classList.remove('hover');
}

//GET THE GAME SEQUENCE AND PLAY EACH BEEP
function geniusBeep(num) {
    switch (num) {
        case 0:
            document.getElementById('geniusYellowButton').style.transform = 'scale(1.2)';
            setTimeout(() => {
                document.getElementById('geniusYellowButton').style.transform = 'scale(1.0)';
            }, 1000)
            break;
        case 1:
            document.getElementById('geniusRedButton').style.transform = 'scale(1.2)';
            setTimeout(() => {
                document.getElementById('geniusRedButton').style.transform = 'scale(1.0)';
            }, 1000)
            break;
        case 2:
            document.getElementById('geniusGreenButton').style.transform = 'scale(1.2)';
            setTimeout(() => {
                document.getElementById('geniusGreenButton').style.transform = 'scale(1.0)';
            }, 1000)
            break;
        case 3:
            document.getElementById('geniusBlueButton').style.transform = 'scale(1.2)';
            setTimeout(() => {
                document.getElementById('geniusBlueButton').style.transform = 'scale(1.0)';
            }, 1000)
            break;
    }
}

//ALLOW USER TO START CLICKING BUTTONS
function geniusAllowUserClick() {
    setTimeout(() => {
        geniusAllowClick = true;
        // console.log('ALLOW USER TO CLICK');
        document.getElementById('geniusYellow').classList.add('hover');
        document.getElementById('geniusRed').classList.add('hover');
        document.getElementById('geniusGreen').classList.add('hover');
        document.getElementById('geniusBlue').classList.add('hover');
    }, 1500)
}

//GET THE USER INPUT
function geniusGetUserSequence(option) {
    if (geniusAllowClick == true) {
        switch (option) {
            case 0:
                geniusUserSequence.push(option);
                geniusCounter++;
                if (geniusCounter == geniusSequence.length) {
                    geniusAllowClick = false;
                    geniusStopAllowingUserClick();
                    geniusCompareSequences();
                }
                break;
            case 1:
                geniusUserSequence.push(option);
                geniusCounter++;
                if (geniusCounter == geniusSequence.length) {
                    geniusAllowClick = false;
                    geniusStopAllowingUserClick();
                    geniusCompareSequences();
                }
                break;
            case 2:
                geniusUserSequence.push(option);
                geniusCounter++;
                if (geniusCounter == geniusSequence.length) {
                    geniusAllowClick = false;
                    geniusStopAllowingUserClick();
                    geniusCompareSequences();
                }
                break;
            case 3:
                geniusUserSequence.push(option);
                geniusCounter++;
                if (geniusCounter == geniusSequence.length) {
                    geniusAllowClick = false;
                    geniusStopAllowingUserClick();
                    geniusCompareSequences();
                }
                break;
        }
    }
}

//COMPARE USERINPUT WITH THE GAME SEQUENCE
function geniusCompareSequences() {
    // console.log(geniusUserSequence);
    if (geniusSequence.join() == geniusUserSequence.join()) {
        document.getElementById('geniusPlayerScore').innerHTML = geniusRoundCounter;
        geniusStartNewRound();
    } else {
        alert('Errou!');
        geniusRoundCounter = 1;
        document.getElementById('geniusPlayerScore').innerHTML = geniusRoundCounter - 1;
        document.getElementById('geniusButtonPlayAgain').style.display = 'flex';
    }
}

//PUT ANOTHER BEEP ON THE SEQUENCE
function geniusStartNewRound() {
    document.getElementById('geniusButtonPlayAgain').style.display = 'none';
    geniusRandomNumber = Math.floor(Math.random() * 4);
    geniusSequence.push(geniusRandomNumber);
    geniusRoundCounter++;
    geniusCounter = 0;
    geniusUserSequence = [];
    geniusPlaySequence()
}

//PLAY AGAIN BUTTON ONCE THE PLAYER GOT IT WRONG
function geniusPlayAgain() {
    document.getElementById('geniusButtonPlayAgain').style.display = 'none';
    geniusSequence = [];
    geniusUserSequence = [];
    geniusCounter = 0;
    // console.log(`sequence: ${geniusSequence} - roundCounter: ${geniusRoundCounter} - userSequence: ${geniusUserSequence}`);
    geniusGenerateSequence();
    setTimeout(geniusPlaySequence(), 200)
}

//BACK TO MENU BUTTON IS CLICKED, SO THE GAME STOP

document.getElementById('backToMenuBtn').addEventListener('click', () => {
    geniusSequence = [];
    geniusUserSequence = [];
    geniusRandomNumber;
    geniusRoundCounter = 1;
    geniusScore;
    geniusCounter = 0;
    geniusAllowClick = false;
    document.getElementById('geniusStartGame').style.display = 'flex';
})
