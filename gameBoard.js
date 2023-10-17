const config = require('./config');
const state = require('./state');
const powerManager = require('./powerManager');
const Cell = require('./cell');

let gameBoard = Array(config.initRows);
let pos = 0;

function initializeGameBoard(){
    let curr = config.initCells;

    for(let i = 0 ;i < config.initRows; i++){
        gameBoard[i] = new Array(config.initColls).fill(new Cell());
        for(let j=0;j < config.initColls; j++){
            gameBoard[i][j] = new Cell();
            if(i % 2 == 0){
                pos = --curr;
                gameBoard[i][j].pos = pos;
            }
            else{
                pos = curr++;
                gameBoard[i][j].pos = pos;
            }
            gameBoard[i][j].power = state.$;

            let random = (Math.random() * 100);
            if(random < config.powerPercentage){
                power = powerManager.decidePower(pos); 
                gameBoard[i][j].power = power;
            }

        }
        curr -= config.initColls;
    }
}

function showGameBoard(){
    for(let i = 0; i < gameBoard.length; i++) {
        let row = '';
        for(let j = 0; j < gameBoard[i].length; j++) {
            row += gameBoard[i][j].pos + ', ' + gameBoard[i][j].power + '\t';
        }
        console.log(row);
    }
}


module.exports = {
    initializeGameBoard,
    showGameBoard,
    gameBoard
}