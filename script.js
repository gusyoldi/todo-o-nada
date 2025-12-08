'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnChangeName = document.querySelector('.btn--changeName');

//Starting conditions
let scores, currentScore, activePlayer, playing;

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  setInitialPlayerNames();
};
init();

const switchPlayer = () => {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0; //Change active player
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6 + 1);
    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `./images/dice-${dice}.png`;
    //3. Check for rolled 1
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    //1. Add current score to active player´s score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if player´s score is >= 100
    if (scores[activePlayer] >= 30) {
      //Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      //Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', () => {
  init();
});

btnChangeName.addEventListener('click', () => {
  promptPlayerNames();
});

//Player name functions
function setInitialPlayerNames() {
  const defaultName0 = 'Jugador 1';
  const defaultName1 = 'Jugador 2';
  const [name0, name1] = getPlayerName();

  if (!name0 || !name1) {
    localStorage.setItem('player0Name', defaultName0);
    localStorage.setItem('player1Name', defaultName1);

    player0El.querySelector('.name').innerHTML = name0;
    player1El.querySelector('.name').innerHTML = name1;
  }

  player0El.querySelector('.name').innerHTML = name0 || defaultName0;
  player1El.querySelector('.name').innerHTML = name1 || defaultName1;
}

function promptPlayerNames() {
  const player0Name = prompt('Nombre del Jugador 1:') ?? 'Jugador 1';
  const player1Name = prompt('Nombre del Jugador 2:') ?? 'Jugador 2';

  localStorage.setItem('player0Name', player0Name);
  localStorage.setItem('player1Name', player1Name);

  const [name0, name1] = getPlayerName();
  player0El.querySelector('.name').innerHTML = name0;
  player1El.querySelector('.name').innerHTML = name1;
}

function getPlayerName() {
  const name0 = localStorage.getItem('player0Name');
  const name1 = localStorage.getItem('player1Name');

  return [name0, name1];
}
