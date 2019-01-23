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

    var playerName = document.getElementById('playerNameDisplay');
    playerName.innerHTML = `It is Player ${player}'s turn.`;

    // var board = document.getElementsByClassName('boardButton');

}

function executePlayerMove(board) {
    var elMove = document.getElementsByClassName('board');
    elMove.addEventListener('click', function(e) {
        document.table.appendChild('X');
    });

    console.log(elMove);

}