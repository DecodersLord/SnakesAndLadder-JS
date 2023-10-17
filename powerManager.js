const state = require('./state');
const powerMap = require('./powerMap');
const config = require('./config');

const ladderObject = {
    setPower(pos) {
        let ladderEnd, endPos;
        console.log("Inside ladder");
        do{
            endPos = pos + config.ladderSize;
            ladderEnd = (Math.random() * endPos);
        }while(!(ladderEnd > pos));
        
        powerMap.set(pos,endPos);
    },

    givePower(pos){
        return powerMap.get(pos);
    }
};

const snakeObject = {
    
    setPower(pos) {
        let snakeEnd, endPos;

        do{
            endPos = pos - config.snakeSize;
            snakeEnd = (Math.random() * endPos);
        }while(!(snakeEnd < pos));
        console.log("snake " + powerMap);
        powerMap.set(pos,endPos);
    },
    givePower(pos){
        return powerMap.get(pos);
    }
};

const powerManager = {
    decidePower (pos) {
        let random;
        do{
            random = Math.floor((Math.random() * Object.keys(state).length) + 1);
            
            if(Object.keys(state)[random] == state.SNAKE && pos > 31){
                
                snakeObject.setPower(pos);
                break;
            }
            else if(Object.keys(state)[random] == state.LADDER && pos < config.initCells - 30){
                console.log("Ladder PowerUp");
                ladderObject.setPower(pos);
                break;
            }
        }while(true);
        
        return Object.values(state)[random];
    },

    givePower(powerUp, currPos){
        let newPos = 0;
        if(powerUp == state.LADDER){
            newPos = ladderObject.givePower(currPos);
            return newPos;
        }
        else if(powerUp == state.SNAKE){
            newPos = snakeObject.givePower(currPos);
            return newPos;
        }
    }
}

module.exports = powerManager;