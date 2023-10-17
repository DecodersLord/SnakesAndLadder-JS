const dice = {
    RollDice(){
        return Math.floor((Math.random() * 6) + 1);
    }
}


module.exports = dice;