const Player = require('./player');
const board = require('./gameBoard');
const dice = require('./dice');
const config = require('./config');
const powerManager = require('./powerManager');
const state = require('./state');
const powerMap = require('./powerMap');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let totalPlayers = 0;
let playersList = []; 
let winFlag = false;

function startGame() {
    return new Promise((resolve) => {
        board.initializeGameBoard();
        board.showGameBoard();
        players = 5;
        readline.question(`How many players are playing? `, async (players) => {
            this.players = players;
            for (let index = 0; index < players; index++) {
                await new Promise((resolve) => {
                    readline.question(`please enter your name: `, name => {
                        let player = new Player();
                        player.name = name;
                        playersList.push(player);
                        resolve();
                    })
                });
            } 
            //readline.close();
            resolve();
        });
    });
}

async function playGame(){
    
    let winner = '';
    do{
        board.showGameBoard();
        console.log(powerMap);
        for(let i=0;i < playersList.length; i++){
            do {
                let input = await new Promise((resolve) => {
                    readline.question(`${playersList[i].name} press R to roll dice `, input => {
                        resolve(input);
                    });
                });
            
                if (input.toLowerCase() === 'r') {
                    break;
                }
            }while(true);
            let diceMoves = dice.RollDice();
           // console.log(diceMoves);
            console.log(`${playersList[i].name} rolled ${diceMoves}`);
            if(playersList[i].pos === -1 && diceMoves != 6){
                console.log("You have to roll 6 to start!!!");
            }
            else{
                playersList[i].pos = playersList[i].pos + diceMoves;
            }
            
            let powerUp = checkPowerUp(playersList[i].pos) || state.$;
            if(powerUp != state.$){
                console.log(`${playersList[i].name} encountered ${powerUp}`);
                let newPos = powerManager.givePower(powerUp,playersList[i].pos);
                playersList[i].pos = newPos;
            }
            console.log(`${playersList[i].name} is at ${playersList[i].pos}`);

            if(checkWinner(playersList[i])){
                let winner = playersList[i].name;
                declareWinner(winner);
                winFlag = true;
                break;
            }
        }
    }while(!winFlag);
    process.exit();
}

function checkPowerUp(pos) {
    for(let i = 0 ;i < config.initRows; i++){
        for(let j=0;j < config.initColls; j++){
            if(board.gameBoard[i][j].pos === pos){
                if(board.gameBoard[i][j].power != state.$){
                    return board.gameBoard[i][j].power;
                }
            }
        }
    }
}

function checkWinner(player){
    console.log(player.pos);
    if(player.pos >= config.initCells - 1){
        return true;
    }
    return false;
}

function declareWinner(winnerName){
    console.log(`Congratulations ${winnerName}`);
}

async function main() {
    await startGame();
    playGame();
}

main();
