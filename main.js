var player = 1;
let gameOver = false;

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

function displayPlayerName() {
    // Display which player's turn it is
    var playerName = document.getElementById('playerNameDisplay');
    playerName.innerHTML = `It is Player ${player}'s turn.`;

    //console.log(board[4].innerHTML);
}

function executePlayerMove(id) {
    var move = document.getElementById(id);
    if(player === 1) {
        move.innerHTML = 'X';
        checkforWin(board);
        player = 2;
        //displayPlayerName();
    } else if(player === 2) {
        move.innerHTML = 'O';
        checkforWin(board);
        player = 1;
        //displayPlayerName();
    }
}

function checkforWin(b) {
    if(b[0].innerHTML === 'X' && b[1].innerHTML === 'X' && b[2].innerHTML === 'X') {
        var playerName = document.getElementById('playerNameDisplay');
        playerName.innerHTML = `Player ${player} Wins!`;
    }
    //console.log(b[0].innerHTML);

}