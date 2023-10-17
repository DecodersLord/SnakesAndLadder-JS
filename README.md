# SnakesAndLadder-JS


# Snakes & Ladders Game

This is a simple implementation of the traditional board game, Snakes & Ladders. Players roll a dice and move forward on the game board. If a player lands on a cell that represents the base of a ladder, they move to the cell at the top of the ladder. If a player lands on a cell with the head of a snake, they must move to the cell at the snake's tail. The first player to reach or cross the last cell wins the game.

## Modules

The game uses several modules:

- `player.js`: This module defines the Player class.
- `gameBoard.js`: This module initializes and displays the game board.
- `dice.js`: This module simulates rolling a dice.
- `config.js`: This module contains configuration for the game such as the number of rows and columns in the game board.
- `state.js`: This module maintains the state of the cell.
- `powerManager.js`: This module manages the power-ups (snakes and ladders) encountered by players on the game board. It decides which power-up (snake or ladder) to place at a position on the game board. If a player lands on a cell with a ladder, they climb it and their position changes accordingly. If a player lands on a cell with a snake, they slide down to its tail. The module exports the powerManager object which has the following methods:
    - `decidePower(pos)`: This method decides which power-up to place at a given position on the game board.
    - `givePower(powerUp, currPos)`: This method returns the new position of a player after they encounter a power-up.

The powerManager object uses two other objects, ladderObject and snakeObject, each representing a ladder and a snake respectively. Both objects have the following methods:

   - `setPower(pos)`: This method sets the end position of a ladder or snake at a given position on the game board.
   - `givePower(pos)`: This method returns the end position of a ladder or snake at a given position on the game board.



## How to Play

1. Run the script in your terminal.
2. When prompted, enter the number of players.
3. Each player will be asked to enter their name.
4. Players take turns rolling the dice by pressing 'R'.
5. If a player lands on a cell with a ladder, they will climb it and their position will change accordingly.
6. If a player lands on a cell with a snake, they will slide down to its tail.
7. The first player to reach or cross the last cell wins.

## Running the Game

To run the game, use Node.js to execute the main script:

```bash
node game.js
```

Enjoy playing! 🎲