//gameboard object
const gameBoard = (() => {
    let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let enableBoard = true;
    return {myArray, enableBoard};
})();

//player game objects
const playerOne = {
    name: 'Player One',
    marker: 'X',
    turn: true
}

const playerTwo = {
    name: 'Player Two',
    marker: 'O',
    turn: false
}

//locate the gameboard tiles in the html
const boardTiles = document.querySelectorAll('.gameBoard>div');

boardTiles.forEach((boardTile)=> {
    boardTile.addEventListener('click', () => {
        //check if board is enabled
        if (gameBoard.enableBoard)
        {
            //player taking turns in playing
            if (playerOne.turn && boardTile.textContent != playerTwo.marker)
            {
                boardTile.textContent = playerOne.marker;
                playerOne.turn = false;
                playerTwo.turn = true;
            } 
            else if (playerTwo.turn && boardTile.textContent != playerOne.marker) {
                boardTile.textContent = playerTwo.marker;
                playerTwo.turn = false;
                playerOne.turn = true;
            }  
            //assign boardtile text content to array value
            gameBoard.myArray[boardTile.id] = boardTile.textContent;
            //check winner
            winner.check();
        } 
        else {
            console.log('board is disabled');
        }

    })
})

//function to check winner
const winner = (() => {
    const check = () => {
        //PLAYER ONE ROWS
        if (gameBoard.myArray[0] == playerOne.marker && gameBoard.myArray[1] == playerOne.marker && gameBoard.myArray[2] == playerOne.marker){
            console.log(playerOne.name + ' WON!');
            //call gameover fucntion
            gameOver.disableBoard();
        }
        else if (gameBoard.myArray[3] == playerOne.marker && gameBoard.myArray[4] == playerOne.marker && gameBoard.myArray[5] == playerOne.marker){
            console.log(playerOne.name + ' WON!');
            //call gameover fucntion
        }
        else if (gameBoard.myArray[6] == playerOne.marker && gameBoard.myArray[7] == playerOne.marker && gameBoard.myArray[8] == playerOne.marker){
            console.log(playerOne.name + ' WON!');
            //call gameover fucntion
        }
        //PLAYER TWO ROWS
        if (gameBoard.myArray[0] == playerTwo.marker && gameBoard.myArray[1] == playerTwo.marker && gameBoard.myArray[2] == playerTwo.marker){
            console.log(playerTwo.name + ' WON!');
            //call gameover fucntion
        }
        else if (gameBoard.myArray[3] == playerOne.marker && gameBoard.myArray[4] == playerOne.marker && gameBoard.myArray[5] == playerOne.marker){
            console.log(playerTwo.name + ' WON!');
            //call gameover fucntion
        }
        else if (gameBoard.myArray[6] == playerOne.marker && gameBoard.myArray[7] == playerOne.marker && gameBoard.myArray[8] == playerOne.marker){
            console.log(playerTwo.name + ' WON!');
            //call gameover fucntion
        }
        //PLAYER ONE COLUMN
        if (gameBoard.myArray[0] == playerOne.marker && gameBoard.myArray[3] == playerOne.marker && gameBoard.myArray[6] == playerOne.marker){
            console.log(playerOne.name + ' WON!');
            //call gameover fucntion
        }
        else if (gameBoard.myArray[1] == playerOne.marker && gameBoard.myArray[4] == playerOne.marker && gameBoard.myArray[7] == playerOne.marker){
            console.log(playerOne.name + ' WON!');
            //call gameover fucntion
        }
        else if (gameBoard.myArray[2] == playerOne.marker && gameBoard.myArray[5] == playerOne.marker && gameBoard.myArray[8] == playerOne.marker){
            console.log(playerOne.name + ' WON!');
            //call gameover fucntion
        }
        //PLAYER TWO COLUMN
        if (gameBoard.myArray[0] == playerTwo.marker && gameBoard.myArray[3] == playerTwo.marker && gameBoard.myArray[6] == playerTwo.marker){
            console.log(playerTwo.name + ' WON!');
            //call gameover fucntion
        }
        else if (gameBoard.myArray[1] == playerTwo.marker && gameBoard.myArray[4] == playerTwo.marker && gameBoard.myArray[7] == playerTwo.marker){
            console.log(playerTwo.name + ' WON!');
            //call gameover fucntion
        }
        else if (gameBoard.myArray[2] == playerTwo.marker && gameBoard.myArray[5] == playerTwo.marker && gameBoard.myArray[8] == playerTwo.marker){
            console.log(playerTwo.name + ' WON!');
            //call gameover fucntion
        }
        //PLAYER ONE DIAGONAL
        if (gameBoard.myArray[0] == playerOne.marker && gameBoard.myArray[4] == playerOne.marker && gameBoard.myArray[8] == playerOne.marker){
            console.log(playerOne.name + ' WON!');
            //call gameover fucntion
        }
        else if (gameBoard.myArray[2] == playerOne.marker && gameBoard.myArray[4] == playerOne.marker && gameBoard.myArray[6] == playerOne.marker){
            console.log(playerOne.name + ' WON!');
            //call gameover fucntion
        }
        //PLAYER TWO DIAGONAL
        if (gameBoard.myArray[0] == playerTwo.marker && gameBoard.myArray[4] == playerTwo.marker && gameBoard.myArray[8] == playerTwo.marker){
            console.log(playerTwo.name + ' WON!');
            //call gameover fucntion
        }
        else if (gameBoard.myArray[2] == playerTwo.marker && gameBoard.myArray[4] == playerTwo.marker && gameBoard.myArray[6] == playerTwo.marker){
            console.log(playerTwo.name + ' WON!');
            //call gameover fucntion
        }
    }
    return {check};
})();

//gameover function
const gameOver = (() => {
    const disableBoard = () => {
        gameBoard.enableBoard = false;
    }
    return {disableBoard};
})();
