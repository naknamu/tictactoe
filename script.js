//gameboard object
const gameBoard = (() => {
    let myArray = [];
    let enableBoard = true;
    return {myArray, enableBoard};
})();

//form function
const getFormData = () => {
    let input_playerX = document.querySelector('#player_x');
    let input_playerO = document.querySelector('#player_o');

    const playerName = copyFormData(input_playerX.value,input_playerO.value);

    // console.log(playerName);
    return {playerName};
};

//factory function to copy form data
const copyFormData = (x_name, o_name) => {
    const displayPlayerName = () => console.log('Player X:'+ x_name + ' and '+ 'Player O:'+ o_name);
    return {x_name, o_name, displayPlayerName};
};

//player game objects
const playerOne = {
    name: 'Player X',
    marker: 'X',
    turn: true,
    winner: false
}

const playerTwo = {
    name: 'Player O',
    marker: 'O',
    turn: false,
    winner: false
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
            //check if tied
            //when players filled all the slots and has no empty array 
            if (tie.counter() === 9 && !gameBoard.myArray.includes(undefined) && !playerOne.winner && !playerTwo.winner){
                tieDisplay();
            }
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
            //display winner
            playerOne.winner = true;
        }
        else if (gameBoard.myArray[3] == playerOne.marker && gameBoard.myArray[4] == playerOne.marker && gameBoard.myArray[5] == playerOne.marker){
            //display winner
            playerOne.winner = true;
        }
        else if (gameBoard.myArray[6] == playerOne.marker && gameBoard.myArray[7] == playerOne.marker && gameBoard.myArray[8] == playerOne.marker){
            //display winner
            playerOne.winner = true;
        }
        //PLAYER TWO ROWS
        if (gameBoard.myArray[0] == playerTwo.marker && gameBoard.myArray[1] == playerTwo.marker && gameBoard.myArray[2] == playerTwo.marker){
            //display winner
            playerTwo.winner = true;
        }
        else if (gameBoard.myArray[3] == playerTwo.marker && gameBoard.myArray[4] == playerTwo.marker && gameBoard.myArray[5] == playerTwo.marker){
            //display winner
            playerTwo.winner = true;
        }
        else if (gameBoard.myArray[6] == playerTwo.marker && gameBoard.myArray[7] == playerTwo.marker && gameBoard.myArray[8] == playerTwo.marker){
            //display winner
            playerTwo.winner = true;
        }
        //PLAYER ONE COLUMN
        if (gameBoard.myArray[0] == playerOne.marker && gameBoard.myArray[3] == playerOne.marker && gameBoard.myArray[6] == playerOne.marker){
            //display winner
            playerOne.winner = true;
        }
        else if (gameBoard.myArray[1] == playerOne.marker && gameBoard.myArray[4] == playerOne.marker && gameBoard.myArray[7] == playerOne.marker){
            //display winner
            playerOne.winner = true;
        }
        else if (gameBoard.myArray[2] == playerOne.marker && gameBoard.myArray[5] == playerOne.marker && gameBoard.myArray[8] == playerOne.marker){
            //display winner
            playerOne.winner = true;
        }
        //PLAYER TWO COLUMN
        if (gameBoard.myArray[0] == playerTwo.marker && gameBoard.myArray[3] == playerTwo.marker && gameBoard.myArray[6] == playerTwo.marker){
            //display winner
            playerTwo.winner = true;
        }
        else if (gameBoard.myArray[1] == playerTwo.marker && gameBoard.myArray[4] == playerTwo.marker && gameBoard.myArray[7] == playerTwo.marker){
            //display winner
            playerTwo.winner = true;
        }
        else if (gameBoard.myArray[2] == playerTwo.marker && gameBoard.myArray[5] == playerTwo.marker && gameBoard.myArray[8] == playerTwo.marker){
            //display winner
            playerTwo.winner = true;
        }
        //PLAYER ONE DIAGONAL
        if (gameBoard.myArray[0] == playerOne.marker && gameBoard.myArray[4] == playerOne.marker && gameBoard.myArray[8] == playerOne.marker){
            //display winner
            playerOne.winner = true;
        }
        else if (gameBoard.myArray[2] == playerOne.marker && gameBoard.myArray[4] == playerOne.marker && gameBoard.myArray[6] == playerOne.marker){
            //display winner
            playerOne.winner = true;
        }
        //PLAYER TWO DIAGONAL
        if (gameBoard.myArray[0] == playerTwo.marker && gameBoard.myArray[4] == playerTwo.marker && gameBoard.myArray[8] == playerTwo.marker){
            //display winner
            playerTwo.winner = true;
        }
        else if (gameBoard.myArray[2] == playerTwo.marker && gameBoard.myArray[4] == playerTwo.marker && gameBoard.myArray[6] == playerTwo.marker){
            //display winner
            playerTwo.winner = true;
        }

        //display players name to html document
        checkPlayersName();
        //if either player wins, then game is over
        if (playerOne.winner || playerTwo.winner)
        {
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
//notify for a tie
const tieDisplay = () => {
    result.textContent = `It's a tie!`;
}
//condition to check if players entered names or not
const checkPlayersName = () => {
    if (playerOne.winner){
        if (getFormData().playerName.x_name !== '') {
            displayWinner(getFormData().playerName.x_name);
        } else{
            displayWinner(playerOne.name);
        }
    } else if (playerTwo.winner) 
    {
        if (getFormData().playerName.o_name !== '') {
            displayWinner(getFormData().playerName.o_name);
        } else{
            displayWinner(playerTwo.name);
        }
    }
}

//locate restart button in html document
const restartBtn = document.querySelector('.restart>button');

//reset everything when restart is clicked
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
    //reset tie count
    tie.reset();
    //reset player winner
    playerOne.winner = false;
    playerTwo.winner = false;
})

//function to check for a tie when board is full
const tie = (() => {
    let count = 0;
    const counter = () => {
        count++;
        // console.log(count);
        return count;
    }
    const reset = () => {
        count = 0;
        return count;
    }
    return {counter, reset};
})();