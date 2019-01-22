function play() {

    var topLeft;
    var topMiddle;
    var topRight;
    var middleLeft;
    var middleMiddle;
    var middleRight;
    var bottomLeft;
    var bottomMiddle;
    var bottomRight;

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

    console.log(board[0]);

    // topLeft.innerHTML = 'X';

    var player = 1;

    var playerName = document.getElementById('playerNameDisplay');
    playerName.innerHTML = `It is Player ${player}'s turn.`;

    var board = document.getElementsByClassName('boardButton');

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