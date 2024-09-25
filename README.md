# Dice Game

A simple dice game where two players take turns rolling a dice, accumulating round scores, and saving their scores. The first player to reach 100 points wins!

## Table of Contents
- [Features](#features)
- [How to Play](#how-to-play)
- [Installation](#installation)
- [Running the Game](#running-the-game)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)

## Features
- **Two-player turn-based gameplay**: Each player rolls the dice and tries to accumulate points.
- **Winning condition**: The first player to reach 100 points wins.
- **Dynamic UI updates**: The game shows the current score and global score for each player.
- **Player switching**: If a player rolls a 1, they lose their round score, and it's the other player's turn.
- **Hold button**: Players can hold their score to add their round score to the global score.
- **Responsive design**: The game works on different screen sizes without the need to scroll.

## How to Play
1. **Roll Dice**: Players take turns rolling a dice by pressing the "Roll Dice" button.
2. **Score**: Each dice roll adds to the player's round score unless they roll a 1, in which case they lose the round score, and it's the next player's turn.
3. **Hold**: A player can press "Hold" to add their round score to their global score and pass the turn to the other player.
4. **Winning**: The first player to reach 100 points in their global score wins the game.

## Installation
To set up the game locally, follow these steps:

1. Clone this repository:
```bash
   git clone https://github.com/hannouma/JeuDeD-s.git
```

2. Navigate to the project directory:
```bash
cd JeuDeD-s
```

3. (Optional) If you use a local server, you can serve the HTML file for a better experience:
```bash
php -S localhost:8000
```
4. Open the index.html file in your browser to start playing.

## Running the Game
Once the project is set up, open the index.html file in your browser or serve it via a local web server.
The game interface will load, and you can start playing with a second player.

## Technologies Used
HTML: Structure of the app.
CSS and Bootstrap: Styling and layout.
JavaScript: Game logic, event handling, and dynamic UI updates.


## File Structure
```bash
    /dice-game
    │
    ├── /images          # Images for the dice faces
    │   └── dice1.png    # Dice images (1-6)
    │   └── dice2.png
    │   └── ...
    │
    ├── index.html       # Main HTML file
    ├── style.css        # CSS file for the layout and design
    ├── script.js        # JavaScript file with the game logic
    └── README.md        # Documentation file (this file)
```