let userSequence = [];
let machineSequence = [];
let round = 0;

document.querySelector('.start-game-button').onclick = startGame;

blockUserInput();
updateStatusBarText("The game hasn't started yet! Press Play!");
updateRoundNumber(round);


function blockUserInput() {
    const $colorBox = document.querySelectorAll('.color-box').forEach(function($colorBox){
        $colorBox.onclick = function(){
        };
    });
};

function updateStatusBarText(textContent, error = false) {
    $statusBar = document.querySelector('.status-bar-text');
    if (error) {
        document.querySelector('.status-bar').classList.remove('alert-primary');
        document.querySelector('.status-bar').classList.add('alert-danger');
    } else {
        document.querySelector('.status-bar').classList.remove('alert-danger');
        document.querySelector('.status-bar').classList.add('alert-primary');
    };
    $statusBar.textContent = textContent; 
};

function updateRoundNumber(round) {
    $roundNumber = document.querySelector('.round');
    return $roundNumber.textContent = round;
};

function startGame() {
    resetStats();
    handleRound();
};

function resetStats() {
    round = 0;
    userSequence = [];
    machineSequence = [];
    updateRoundNumber(round);
};

function handleRound() {
    updateStatusBarText('Computer Turn!');
    blockUserInput();
    round++;
    updateRoundNumber(round);

    let $newColorBox = selectRandomColor();
    machineSequence.push($newColorBox);

    const USER_DELAY = (machineSequence.length + 1) * 1000;

    machineSequence.forEach(function($colorBox, index){
        const MS_DELAY = (index + 1) * 1000;
        setTimeout(function() {
            highlightBox($colorBox)
        }, MS_DELAY)
    });

    setTimeout(function() {
        updateStatusBarText('Your turn!');
        unblockUserInput();
        userSequence = [];
    }, USER_DELAY)

};

function selectRandomColor() {
    const $colorBox = document.querySelectorAll('.color-box');
    let RANDOM_NUMBER = Math.floor(Math.random() * $colorBox.length);
    return $colorBox[RANDOM_NUMBER];
};

function highlightBox($colorBox){
    $colorBox.style.opacity = 1;
    setTimeout(function(){
        $colorBox.style.opacity = 0.5;
    }, 500);
};

function unblockUserInput() {
    const $colorBox = document.querySelectorAll('.color-box').forEach(function($colorBox) {
    $colorBox.onclick = handleUserInput;
    });
}

function handleUserInput(event) {

    const $colorBox = event.target;
    highlightBox($colorBox);
    userSequence.push($colorBox);

    $machineColorBox = machineSequence[userSequence.length - 1]; //Give me the last box that was selected

    if ($colorBox.id != $machineColorBox.id) {
        lostGame();
        return;
    };

    if (userSequence.length === machineSequence.length) {
        setTimeout(function(){
            handleRound();
        }, 500);
    };
};

function lostGame() {
    updateStatusBarText('You lost the game. Start again!', true);
    blockUserInput();
};
