function play() {

    var topLeft = document.getElementById('topLeft');
    topLeft.innerHTML = 'X';

    var player = 1;

    var playerName = document.getElementById('playerNameDisplay');
    playerName.innerHTML = `It is Player ${player}'s turn.`;

    var board = document.getElementsByClassName('boardButton');

    console.log(board[0]);

    // function executePlayerMove() {
    //     switch (board[]) {
    //         case 0:
    //         // code
    //         break;
    //     }

        // if(player === 1) {
        //     var currentMove = document.getElementById();
        //     currentMove.innerHTML = 'X';
        // }
}