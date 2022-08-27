const rpsComputer = document.getElementById('rpsComputerChoice');
let rand = Math.floor(Math.random() * 3) + 1;
let rpsAllowClick = true;

function rpsGenerateComputerChoice() {
    switch (rand) {
        case 1:
            rpsComputer.classList.add('Rock');
            break;
        case 2:
            rpsComputer.classList.add('Paper');
            break;
        case 3:
            rpsComputer.classList.add('Scissor');
            break;
    }
}
rpsGenerateComputerChoice();

function rpsRockChoose() {
    if (rpsAllowClick == true){
        document.getElementById('rpsComputerChoice').style.display = 'flex';
        rpsResult(1, rand);
    } 
}

function rpsPaperChoose() {
    if (rpsAllowClick == true){
        document.getElementById('rpsComputerChoice').style.display = 'flex';
        rpsResult(2, rand);
    }  
}

function rpsScissorChoose() {
    if (rpsAllowClick == true){
        document.getElementById('rpsComputerChoice').style.display = 'flex';
        rpsResult(3, rand);
    }  
}

function rpsResult(user, pc) {
    document.getElementById('rpsRock').classList.remove('imghover');
    document.getElementById('rpsPaper').classList.remove('imghover');
    document.getElementById('rpsScissor').classList.remove('imghover');
    if (user == pc) {
        rpsDraw();
    }
    if (user == 1) {
        switch (pc) {
            case 2:
                rpsLose();
                break;
            case 3:
                rpsWin();
                break;
        }
    }
    if (user == 2) {
        switch (pc) {
            case 1:
                rpsWin();
                break;
            case 3:
                rpsLose();
                break;
        }
    }
    if (user == 3) {
        switch (pc) {
            case 1:
                rpsLose();
                break;
            case 2:
                rpsWin();
                break;
        }
    }
}

function rpsDraw() {
    document.getElementById('rpsResult').innerHTML = 'DRAW!'
    document.getElementById('rpsButton').style.display = 'flex';
    document.getElementById('rpsResult').style.color = 'lightgrey';
    rpsAllowClick = false;
}

function rpsWin() {
    document.getElementById('rpsResult').innerHTML = 'WIN!'
    document.getElementById('rpsButton').style.display = 'flex';
    document.getElementById('rpsResult').style.color = 'lightgreen';
    rpsAllowClick = false;
}

function rpsLose() {
    document.getElementById('rpsResult').innerHTML = 'LOSE!'
    document.getElementById('rpsButton').style.display = 'flex';
    document.getElementById('rpsResult').style.color = '#ff4242';
    rpsAllowClick = false;
}

function rpsPlayAgain(){
    document.getElementById('rpsResult').innerHTML = ''
    document.getElementById('rpsButton').style.display = 'none';
    document.getElementById('rpsComputerChoice').style.display = 'none';
    switch (rand) {
        case 1:
            rpsComputer.classList.remove('Rock');
            break;
        case 2:
            rpsComputer.classList.remove('Paper');
            break;
        case 3:
            rpsComputer.classList.remove('Scissor');
            break;
    }
    rand = Math.floor(Math.random() * 3) + 1;
    rpsGenerateComputerChoice();
    rpsAllowClick = true;
    document.getElementById('rpsRock').classList.add('imghover');
    document.getElementById('rpsPaper').classList.add('imghover');
    document.getElementById('rpsScissor').classList.add('imghover');
}