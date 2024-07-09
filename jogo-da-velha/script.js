// script.js
const board = document.getElementById('board');
const message = document.getElementById('message');
const cells = document.querySelectorAll('.cell');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWin = () => {
    for (let condition of winningConditions) {
        let [a, b, c] = condition;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
        }
    }
    return null;
};

const checkDraw = () => {
    return gameState.every(cell => cell !== '');
};

const handleResult = (result) => {
    gameActive = false;
    if (result) {
        message.innerText = `${result} venceu!`;
    } else {
        message.innerText = 'Empate!';
    }
};

const placeMarker = (index) => {
    if (!gameActive || gameState[index] !== '') return;

    gameState[index] = currentPlayer;
    cells[index].innerText = currentPlayer;

    const result = checkWin();
    if (result) {
        handleResult(result);
    } else if (checkDraw()) {
        handleResult(null);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.innerText = `É a vez do jogador ${currentPlayer}`;
    }
};

const resetBoard = () => {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    message.innerText = `É a vez do jogador ${currentPlayer}`;

    cells.forEach(cell => {
        cell.innerText = '';
    });
};

message.innerText = `É a vez do jogador ${currentPlayer}`;
