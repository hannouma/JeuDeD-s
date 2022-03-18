const rollDice = document.getElementById("rollDice");
const diceImg = document.querySelector("#dice img");
const hold = document.getElementById("hold");
const newGame = document.getElementById("newGame");

let roundScores, globalScore,  activePlayer;
let winningScore = 100;

//starting function that initialize the game 
function start(){
  roundScores = 0;
  activePlayer = 1;
  globalScore = [0, 0, 0];
  playing = true;
  document.querySelector('#currentScoreP1').textContent = '00';
  document.querySelector('#globalP1').textContent = '00';
  document.querySelector('#currentScoreP2').textContent = '00';
  document.querySelector('#globalP2').textContent = '00';
  document.querySelector('.z-index').style.display = 'none';
}

//NEWGAME resets all the scores
newGame.addEventListener('click', start);

start();

//If the player presses on the ROLLDICE
rollDice.addEventListener('click',() =>{
  document.querySelector('.redPoint-' + activePlayer).style.display = 'inline-block';
  document.querySelector('#sectionP-' + activePlayer).style.background = '#f9f9f9';
  if(playing){
  //function to return a random number btwn 1 & 6
  var dice = Math.floor(Math.random() * 6) + 1;
  const diceFace = 'images/dice' + dice + '.png';
  diceImg.setAttribute('src', diceFace);
  if(dice !== 1){
    roundScores += dice;
    document.querySelector('#currentScoreP' + activePlayer).textContent = roundScores;
  }else{
    nextPlayer()
  }
  }
})

//if the player presses on the HOLD 
hold.addEventListener('click',function(){
  if (playing){
    globalScore[activePlayer] += roundScores;
    document.querySelector('#globalP' + activePlayer).textContent = globalScore[activePlayer];
  }
  if (globalScore[activePlayer] >= winningScore) {
    document.querySelector('.z-index').style.display = 'block';
    document.querySelector('.z-index').textContent += activePlayer;
    playing = false;
  } else{
    nextPlayer();
  }
})

//function to swap turns between the players
function nextPlayer() {
  document.querySelector('#currentScoreP' + activePlayer).textContent = '00';
  document.querySelector('.redPoint-' + activePlayer).style.display = 'none';
  document.querySelector('#sectionP-' + activePlayer).style.background = 'white';
  //Next player
  if (activePlayer === 1){
    activePlayer=2;
  }else if(activePlayer === 2){
    activePlayer=1
  }
  roundScores = 0;
}