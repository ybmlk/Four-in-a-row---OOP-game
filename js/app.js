const game = new Game();
const starBtn = document.querySelector('#begin-game');

/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
starBtn.addEventListener('click', () => {
  game.startGame();
  starBtn.style.display = 'none';
  document.getElementById('play-area').style.opacity = '1';
});
