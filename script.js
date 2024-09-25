const rollDice = document.getElementById("rollDice");
const diceImg = document.querySelector("#dice img");
const hold = document.getElementById("hold");
const newGame = document.getElementById("newGame");

let roundScores, globalScore,  activePlayer;
const winningScore = 100;

//starting function that initialize the game 
function start(){
  roundScores = 0;
  activePlayer = 1; // Player 1 starts the game
  globalScore = [0, 0, 0]; // [0, globalP1, globalP2], index 0 is unused (to assign the index 1 to player 1 and 2 for player 2)
  playing = true;
  document.querySelector('#currentScoreP1').textContent = '00';
  document.querySelector('#globalP1').textContent = '00';
  document.querySelector('#currentScoreP2').textContent = '00';
  document.querySelector('#globalP2').textContent = '00';
  document.querySelector('.z-index').style.display = 'none';
  document.querySelector('.redPoint-' + activePlayer).style.display = 'inline-block';
  document.querySelector('#sectionP-' + activePlayer).style.background = '#D3D3D3';

  // Inactive player (opposite of active player)
  const inactivePlayer = activePlayer === 1 ? 2 : 1;
  document.querySelector('.redPoint-' + inactivePlayer).style.display = 'none';
  document.querySelector('#sectionP-' + inactivePlayer).style.background = 'white';

  diceImg.style.display = 'inline';
}

//NEWGAME resets all the scores
newGame.addEventListener('click', start);
start();

//If the player presses on the ROLLDICE
rollDice.addEventListener('click',() =>{
  document.querySelector('.redPoint-' + activePlayer).style.display = 'inline-block';
  document.querySelector('#sectionP-' + activePlayer).style.background = '#D3D3D3';
  diceImg.style.display = 'inline'; // Show dice when rolling

  if (playing) {
    //function to return a random number btwn 1 & 6
    const dice = Math.floor(Math.random() * 6) + 1;
    const diceFace = 'images/dice' + dice + '.png';
    diceImg.setAttribute('src', diceFace);

    if (dice !== 1) {
      // Add dice value to round score
      roundScores += dice;
      document.querySelector('#currentScoreP' + activePlayer).textContent = roundScores;
    } else {
      diceImg.style.display = 'none'; // Hide the dice image when player rolls a 1
      // If dice roll is 1, lose round score and switch player
      nextPlayer()
    }
  }
})

//if the player presses on the HOLD (save round score to global score)
hold.addEventListener('click',function(){
  if (playing) {
    // Add current round score to global score
    globalScore[activePlayer] += roundScores;
    document.querySelector('#globalP' + activePlayer).textContent = globalScore[activePlayer];
  }

  // Check if player won
  if (globalScore[activePlayer] >= winningScore) {
    diceImg.style.display = 'none'; // Hide the dice image when player rolls a 1
    document.querySelector('.z-index').style.display = 'block';
    document.querySelector('.z-index').textContent = 'The Winner Is Player ' + activePlayer;
    playing = false;
  } else {
    nextPlayer();
  }
})

//function to swap turns between the players
function nextPlayer() {
  document.querySelector('#currentScoreP' + activePlayer).textContent = '00';
  document.querySelector('.redPoint-' + activePlayer).style.display = 'none';
  document.querySelector('#sectionP-' + activePlayer).style.background = 'white';
  // Switch to the other player
  activePlayer = activePlayer === 1 ? 2 : 1;
  // if (activePlayer === 1){
  //   activePlayer=2;
  // }else if(activePlayer === 2){
  //   activePlayer=1
  // }
  document.querySelector('.redPoint-' + activePlayer).style.display = 'inline-block';
  document.querySelector('#sectionP-' + activePlayer).style.background = '#D3D3D3';
  roundScores = 0;
}