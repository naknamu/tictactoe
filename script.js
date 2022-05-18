const gameBoard = (() => {
    let myArray= [
        [0,0], 
        [0,1],
        [0,2],
        [1,0],
        [1,1],
        [1,2],
        [2,0],
        [2,1],
        [2,2]
    ];
    let count = 0;
    const createBoard = () => {
        for (let i=0; i<3; i++) {
            for (let j=0; j<3; j++) {
                 myArray[i][j] = count++;
                 console.log(myArray[i][j]);
            }
        }
    }
    return {createBoard};
})();

gameBoard.createBoard();