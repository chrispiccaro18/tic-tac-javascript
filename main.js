// Game starts with player 1, X
var player = 1;
var piece = 'X';

// Grabbing the buttons by id to make the board
var topLeft, topMiddle, topRight, middleLeft, middleMiddle, middleRight, bottomLeft, bottomMiddle, bottomRight;

var board = [
    topLeft = document.getElementById('topLeft'),
    topMiddle = document.getElementById('topMiddle'),
    topRight = document.getElementById('topRight'),
    middleLeft = document.getElementById('middleLeft'),
    middleMiddle = document.getElementById('middleMiddle'),
    middleRight = document.getElementById('middleRight'),
    bottomLeft = document.getElementById('bottomLeft'),
    bottomMiddle = document.getElementById('bottomMiddle'),
    bottomRight = document.getElementById('bottomRight'),
];

displayPlayerName();

function displayPlayerName(legalMove) {
    var playerName = document.getElementById('playerNameDisplay');
    if(legalMove === false) {
        // Inform the player of an illegal move and display which player's turn it is
        playerName.innerHTML = `Please pick an unoccupied space! It is still Player ${player}'s turn. ${piece}`;
    } else {
        // Display which player's turn it is
        playerName.innerHTML = `Player ${player}'s turn. ${piece}`;
    }
}

function executePlayerMove(id) {
    var move = document.getElementById(id);
    var playerName = document.getElementById('playerNameDisplay');
    var legalMove = true;
    // Check for legal move
    if(move.innerHTML !== '') {
        legalMove = false;
        displayPlayerName(legalMove);
    } else {
        // Display move
        if(player === 1) {
            move.innerHTML = 'X';
        } else {
            move.innerHTML = 'O';
        }
        // Check for win or cat's game
        switch(checkforWin(board)) {
            case 1:
                playerName.innerHTML = `Player ${player} Wins!`;
                break;
            case 2:
                playerName.innerHTML = `Player ${player} Wins!`;
                break;
            case 3:
                playerName.innerHTML = 'Tie! Cat\'s Game.';
                break;
            default:
                // If no winner or cat's game yet, switch player and display whose turn it is.
                if(player === 1) {
                    player = 2;
                    piece = 'O';
                    displayPlayerName();
                } else {
                    player = 1;
                    piece = 'X';
                    displayPlayerName();
                }
                break;
        }
    }
}

function checkforWin(b) {
    // Establish the win conditions
    var winConditions = [
        b[0].innerHTML + b[1].innerHTML + b[2].innerHTML,
        b[0].innerHTML + b[4].innerHTML + b[8].innerHTML,
        b[0].innerHTML + b[3].innerHTML + b[6].innerHTML,
        b[1].innerHTML + b[4].innerHTML + b[7].innerHTML,
        b[2].innerHTML + b[5].innerHTML + b[8].innerHTML,
        b[3].innerHTML + b[4].innerHTML + b[5].innerHTML,
        b[6].innerHTML + b[7].innerHTML + b[8].innerHTML,
        b[6].innerHTML + b[4].innerHTML + b[2].innerHTML,
    ];
    for(let i = 0; i < winConditions.length; i++) {
        if(winConditions[i] === 'XXX') {
            return 1;
        } else if(winConditions[i] === 'OOO') {
            return 2;
        } else if(b[0].innerHTML && b[1].innerHTML && b[2].innerHTML && b[3].innerHTML && b[4].innerHTML && b[5].innerHTML && b[6].innerHTML && b[7].innerHTML && b[8].innerHTML !== ''){
            // This would be a cat's game
            return 3;
        }
    }
}

// Below is a way to add a clickable link that will close after clicked. I can't get it to go where I want yet.
// var play = '<p class="header"><a id="close" href="#">Play</a></p>';
// var elPlay = document.createElement('p');
// elPlay.setAttribute('id', 'play');
// elPlay.innerHTML = play;
// document.body.appendChild(elPlay);

// function dismissPlay() {
//     document.body.removeChild(elPlay);
// }

// var elClose = document.getElementById('play');
// elClose.addEventListener('click', dismissPlay, false);