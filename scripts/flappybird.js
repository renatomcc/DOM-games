const birdHeight = document.getElementById('FlappyBirdBird');
const column1 = document.getElementById('FlappyBirdColumn');
const column2 = document.getElementById('FlappyBirdColumn2');
const fpScore = document.getElementById('FlappyBirdScore');
let birdDead = false;

document.getElementById('body').addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (birdDead == false) {
                birdHeight.style.top = (parseInt(getComputedStyle(birdHeight).getPropertyValue('top')) - 50) + 'px';
                if ((parseInt(getComputedStyle(birdHeight).getPropertyValue('top')) <= 0)) {
                    birdHeight.style.top = 0 + 'px';
                    clearInterval(mainInterval);
                    clearInterval(flappyBirdGravity);
                    column1.style.animation = 'none'
                    column2.style.animation = 'none'
                    birdDead = true;
                }
            }
            break;
    }
})

function startFlappyBird(){
    mainInterval = setInterval(randomizeColumns, 2500);
    flappyBirdGravity = setInterval(birdGravity, 40);
}

function randomizeColumns() {
    console.log('back')
    fpScore.innerHTML = Number(fpScore.innerHTML) + 10;
    let rand = Math.floor(Math.random() * 300) + 50;
    document.getElementById('FlappyBirdColumn').style.height = rand + 'px';
    document.getElementById('FlappyBirdColumn2').style.height = (350 - rand) + 'px';
}

function birdGravity() {
    birdHeight.style.top = (parseInt(getComputedStyle(birdHeight).getPropertyValue('top')) + 6) + 'px';
    if (
        (parseInt(getComputedStyle(birdHeight).getPropertyValue('top')) >= 453)
        ||
        (
            (parseInt(getComputedStyle(column2).getPropertyValue('height')) > parseInt(getComputedStyle(birdHeight).getPropertyValue('top')))
            &&
            ((parseInt(getComputedStyle(column2).getPropertyValue('left'))) <= 100)
            &&
            ((parseInt(getComputedStyle(column2).getPropertyValue('left'))) >= 50)
        )
        ||
        (
            ((parseInt(getComputedStyle(column1).getPropertyValue('height')) + parseInt(getComputedStyle(birdHeight).getPropertyValue('top'))) > 450)
            &&
            (parseInt(getComputedStyle(column1).getPropertyValue('left')) <= 100)
            &&
            (parseInt(getComputedStyle(column1).getPropertyValue('left')) >= 50)
        )
    ) {
        birdDead = true;
        clearInterval(mainInterval);
        fpScore.innerHTML = '0';
        column1.style.animation = 'none'
        column2.style.animation = 'none';
        clearInterval(flappyBirdGravity);
    }
}