function play() {

    var topLeft = document.getElementById('topLeft');
    var topMiddle = document.getElementById('topMiddle');
    var topRight = document.getElementById('topRight');
    var middleLeft = document.getElementById('middleLeft');
    var middleMiddle = document.getElementById('middleMiddle');
    var middleRight = document.getElementById('middleRight');
    var bottomLeft = document.getElementById('bottomLeft');
    var bottomMiddle = document.getElementById('bottomMiddle');
    var bottomRight = document.getElementById('bottomRight');

    // topLeft.innerHTML = 'X';

    var player = 1;

    var playerName = document.getElementById('playerNameDisplay');
    playerName.innerHTML = `It is Player ${player}'s turn.`;

    var board = document.getElementsByClassName('boardButton');

    console.log(board[0]);

    function executePlayerMove() {


        if(player === 1) {
            var currentMove = document.getElementById();
            currentMove.innerHTML = 'X';
        }
    }
    //     switch (board[]) {
    //         case 0:
    //         // code
    //         break;
    //     }
}