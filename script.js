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
            //display winnder
            displayWinner(playerOne.name);
            //call gameover function
            gameOver.disableBoard();
        }
        else if (gameBoard.myArray[3] == playerOne.marker && gameBoard.myArray[4] == playerOne.marker && gameBoard.myArray[5] == playerOne.marker){
            //display winnder
            displayWinner(playerOne.name);
            //call gameover function
            gameOver.disableBoard();
        }
        else if (gameBoard.myArray[6] == playerOne.marker && gameBoard.myArray[7] == playerOne.marker && gameBoard.myArray[8] == playerOne.marker){
            //display winnder
            displayWinner(playerOne.name);
            //call gameover function
            gameOver.disableBoard();
        }
        //PLAYER TWO ROWS
        if (gameBoard.myArray[0] == playerTwo.marker && gameBoard.myArray[1] == playerTwo.marker && gameBoard.myArray[2] == playerTwo.marker){
            //display winnder
            displayWinner(playerTwo.name);
            //call gameover function
            gameOver.disableBoard();
        }
        else if (gameBoard.myArray[3] == playerTwo.marker && gameBoard.myArray[4] == playerTwo.marker && gameBoard.myArray[5] == playerTwo.marker){
            //display winnder
            displayWinner(playerTwo.name);
            //call gameover function
            gameOver.disableBoard();
        }
        else if (gameBoard.myArray[6] == playerTwo.marker && gameBoard.myArray[7] == playerTwo.marker && gameBoard.myArray[8] == playerTwo.marker){
            //display winnder
            displayWinner(playerTwo.name);
            //call gameover function
            gameOver.disableBoard();
        }
        //PLAYER ONE COLUMN
        if (gameBoard.myArray[0] == playerOne.marker && gameBoard.myArray[3] == playerOne.marker && gameBoard.myArray[6] == playerOne.marker){
            //display winnder
            displayWinner(playerOne.name);
            //call gameover function
            gameOver.disableBoard();
        }
        else if (gameBoard.myArray[1] == playerOne.marker && gameBoard.myArray[4] == playerOne.marker && gameBoard.myArray[7] == playerOne.marker){
            //display winnder
            displayWinner(playerOne.name);
            //call gameover function
            gameOver.disableBoard();
        }
        else if (gameBoard.myArray[2] == playerOne.marker && gameBoard.myArray[5] == playerOne.marker && gameBoard.myArray[8] == playerOne.marker){
            //display winnder
            displayWinner(playerOne.name);
            //call gameover function
            gameOver.disableBoard();
        }
        //PLAYER TWO COLUMN
        if (gameBoard.myArray[0] == playerTwo.marker && gameBoard.myArray[3] == playerTwo.marker && gameBoard.myArray[6] == playerTwo.marker){
            //display winnder
            displayWinner(playerTwo.name);
            //call gameover function
            gameOver.disableBoard();
        }
        else if (gameBoard.myArray[1] == playerTwo.marker && gameBoard.myArray[4] == playerTwo.marker && gameBoard.myArray[7] == playerTwo.marker){
            //display winnder
            displayWinner(playerTwo.name);
            //call gameover function
            gameOver.disableBoard();
        }
        else if (gameBoard.myArray[2] == playerTwo.marker && gameBoard.myArray[5] == playerTwo.marker && gameBoard.myArray[8] == playerTwo.marker){
            //display winnder
            displayWinner(playerTwo.name);
            //call gameover function
            gameOver.disableBoard();
        }
        //PLAYER ONE DIAGONAL
        if (gameBoard.myArray[0] == playerOne.marker && gameBoard.myArray[4] == playerOne.marker && gameBoard.myArray[8] == playerOne.marker){
            //display winnder
            displayWinner(playerOne.name);
            //call gameover function
            gameOver.disableBoard();
        }
        else if (gameBoard.myArray[2] == playerOne.marker && gameBoard.myArray[4] == playerOne.marker && gameBoard.myArray[6] == playerOne.marker){
            //display winnder
            displayWinner(playerOne.name);
            //call gameover function
            gameOver.disableBoard();
        }
        //PLAYER TWO DIAGONAL
        if (gameBoard.myArray[0] == playerTwo.marker && gameBoard.myArray[4] == playerTwo.marker && gameBoard.myArray[8] == playerTwo.marker){
            //display winnder
            displayWinner(playerTwo.name);
            //call gameover function
            gameOver.disableBoard();
        }
        else if (gameBoard.myArray[2] == playerTwo.marker && gameBoard.myArray[4] == playerTwo.marker && gameBoard.myArray[6] == playerTwo.marker){
            //display winnder
            displayWinner(playerTwo.name);
            //call gameover function
            gameOver.disableBoard();
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

const result = document.querySelector('.result');

//display winner result to html document
const displayWinner = (player) => {
    result.textContent = player + ' Won!';
}
//remove display winner
const removeWinner = () => {
    result.textContent = '';
}

//locate restart button in html document
const restartBtn = document.querySelector('.restart>button');

restartBtn.addEventListener('click', () => {
    boardTiles.forEach((boardTile) => {
        //clean game board content
        boardTile.textContent = '';
        //clean game board array
        gameBoard.myArray[boardTile.id] = '';
    })
    //enable board
    gameBoard.enableBoard = true;
    //remove result winner
    removeWinner();
})
