/* 

Pseudocode:

To create the simon says game, we need a button that starts the game. 
When the game starts its going to block the user input, reset the sequence of the colors from machine and user, and then the machine is going to randomly choose one of the colors of the interface.
Then after one color is chosen randomly, its going to highlight itself so the user knows which color has been selected by the machine.
After the machine turn is over, we are going to unblock the user input and let him/her choose a color.
Then when the user finishes, we are going to compare the selected machine colors and the user colors and see if they match.
If they doesnt, it's game over and if they do, we will pass into the second round of the game.
When the second round of the game starts, the machine will highlight again the same colors it chose before along with new ones.
When the turn of the player comes, the previous sequence needs to be deleted.

Creation Process:

1- When the button is pressed the game has to start so: 

let userSequence = [];
let machineSequence = [];
let round = 0;

document.querySelector(".start-game-button").onclick = function() {
    
    blockUserInput();
    machineTurn();
    ...
};

2- To block the input user
    document.querySelectorAll(".color-box").forEach(color-box) {
        $boxColor.onClick = function() {};
    }

3- The machine is going to choose a color randomly 

Still have to think how this random gonna work.

document.querySelectorAll(".color-box").forEach($colorBox) {
    let randomNumber = Math.floor(Math.random()* 3);
}

4- Then the machine is going to highlight the color it choose,

function highlight($colorbox) {
    $ColorBox.style.opacity = 1;
}

5- After the machine turn is over, we are going to unblock the user input and let him/her choose a color.

    $colorBox.onclick = handleUserInput();

    function handleUserInput(event) {
    
    const $colorBox = event.target;
    highlight($colorBox);
    userSequence.push(colorBox)
    };

6- Then when the user finishes, we are going to compare the selected machine colors and the user colors and see if they match.

    Maybe there's a way to compare arrays? 

    userSequence.forEach(function($serSelectedColor){
        for(let i = 0; i < machineSequence.length, i++) <-- Can we even get machineSequence here?
        if (userSelectedColor != machineSequence[i]) return gameLost();
        if (userSelectedColor === machineSequence[i]) return continue;
    });

7.1 - If they doesnt, it's game over

    function gameLost() {
        Change status bar inner text to defeat context and to red color.
        End the game.
    }

7.2 - And if they do, we will pass into the second round of the game.

    If we have more rounds, we should reset the sequence of the user so he has to re-select the colors from the beggining

8- When the second round of the game starts, the machine will highlight again the same colors it chose before along with new ones.

    This is going to be inside a machine handling function.

    machineSequence.forEach(function($machineSelectedColor){
        
        highlight($machineSelectedColor);
    });

*/

let userSequence = [];
let machineSequence = [];
let round = 0;

document.querySelector('.start-game-button').onclick = startGame;

blockUserInput();
updateStatusBarText("The game hasn't started yet! Press Play!");
updateRoundNumber("-");


function blockUserInput() {
    const $colorBox = document.querySelectorAll('.color-box').forEach(function($colorBox){
        $colorBox.onclick = function(){
        console.log('Hello, there!');
        }
    });
}

function updateStatusBarText(textContent) {
    $statusBar = document.querySelector('.status-bar-text');
    $statusBar.textContent = textContent; 
}

function updateRoundNumber(round) {
    $roundNumber = document.querySelector('.round');
    return $roundNumber.textContent = round;
}

function startGame() {
    // resetStats();
    handleRound();

}

function resetStats() {
    userSequence = [];
    machineSequence = [];
}

function handleRound() {
    updateStatusBarText('Computer Turn');

    let $newColorBox = selectRandomColor();
    machineSequence.push($newColorBox);

    machineSequence.forEach(function($colorBox, index){
        const MS_DELAY = (index + 1) * 1000;
        setTimeout(function() {
            highlightBox($colorBox)
        }, MS_DELAY)
    });


};



function selectRandomColor() {
    const $colorBox = document.querySelectorAll('.color-box');
    let randomNumber = Math.floor(Math.random()*4);
    return $colorBox[randomNumber];
};

function highlightBox($colorBox){
    $colorBox.style.opacity = 1;
    setTimeout(function(){$colorBox.style.opacity = 0.5;
    }, 500)
};
