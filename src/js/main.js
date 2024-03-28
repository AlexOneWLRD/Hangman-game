import '../css/style.css';
import { darkModeHandle } from './utils.js';
import { startGame } from './game.js';

darkModeHandle();

const starGameButton = document.getElementById('startGame');
starGameButton.addEventListener('click', startGame);