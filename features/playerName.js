export default function setInitialPlayerNames() {
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
