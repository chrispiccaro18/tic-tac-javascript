var player = 1;

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

function play() {
    // Display which player's turn it is
    var playerName = document.getElementById('playerNameDisplay');
    playerName.innerHTML = `It is Player ${player}'s turn.`;

    function printMove() {
        console.log('in print move function');
    }

    //var move = document.getElementById('topLeft');
    // move.innerHTML = 'X';

    //move.addEventListener('click', printMove(), false);

}

function executePlayerMove(id) {
    var move = document.getElementById(id);
    if(player === 1) {
        move.innerHTML = 'X';
        player = 2;
        play();
    } else if(player === 2) {
        move.innerHTML = 'O';
        player = 1;
        play();
    }

    console.log(move);

    //var moveTwo = document.getElementById('board');
    //console.log(moveTwo);

}