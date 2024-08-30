const cardArray = [
  { name: 'A', img: 'https://picsum.photos/id/1010/100' },
  { name: 'A', img: 'https://picsum.photos/id/1010/100' },
  { name: 'B', img: 'https://picsum.photos/id/1011/100' },
  { name: 'B', img: 'https://picsum.photos/id/1011/100' },
  { name: 'C', img: 'https://picsum.photos/id/1012/100' },
  { name: 'C', img: 'https://picsum.photos/id/1012/100' },
  { name: 'D', img: 'https://picsum.photos/id/1013/100' },
  { name: 'D', img: 'https://picsum.photos/id/1013/100' },
  { name: 'E', img: 'https://picsum.photos/id/1014/100' },
  { name: 'E', img: 'https://picsum.photos/id/1014/100' },
  { name: 'F', img: 'https://picsum.photos/id/1015/100' },
  { name: 'F', img: 'https://picsum.photos/id/1015/100' },
  { name: 'G', img: 'https://picsum.photos/id/1016/100' },
  { name: 'G', img: 'https://picsum.photos/id/1016/100' },
  { name: 'H', img: 'https://picsum.photos/id/1018/100' },
  { name: 'H', img: 'https://picsum.photos/id/1018/100' }
];

// Card shuffle
cardArray.sort(() => 0.5 - Math.random());

const gameBoard = document.getElementById('game-board');
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;
let startTime;
let timerInterval;
// Game board 
function createBoard() {
  cardArray.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'bg-black', 'border', 'rounded');
    cardElement.setAttribute('data-id', index);

    // Front of the card
    const cardFront = document.createElement('div');
    cardFront.classList.add('front', 'bg-black', 'border', 'rounded');
    const cardImage = document.createElement('img');
    cardImage.src = card.img;
    cardImage.style.width = '100%';
    cardFront.appendChild(cardImage);

    // Back of the card
    const cardBack = document.createElement('div');
    cardBack.classList.add('back', 'bg-primary', 'd-flex', 'align-items-center', 'justify-content-center', 'text-white', 'rounded');
    cardBack.textContent = '?';

    cardElement.appendChild(cardFront);
    cardElement.appendChild(cardBack);

    cardElement.addEventListener('click', flipCard);
    gameBoard.appendChild(cardElement);
  });
}

// flip card
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flipped');

  if (!firstCard) {
    firstCard = this;
  } else {  
    secondCard = this;
    lockBoard = true;
    checkForMatch();
  }
}

// matching using name 
function checkForMatch() {
  const firstCardId = firstCard.getAttribute('data-id');
  const secondCardId = secondCard.getAttribute('data-id');

  if (cardArray[firstCardId].name === cardArray[secondCardId].name) {
    setTimeout(() => {
      firstCard.classList.add('hidden');
      secondCard.classList.add('hidden');
      matchedPairs += 1;
      resetBoard();
      if (matchedPairs === cardArray.length / 2) {
        endGame();
      }
    }, 500);
  } else {
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      resetBoard();
    }, 1000);
  }
}

function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}

function startGame() {
  startTime = new Date();
  timerInterval = setInterval(updateTime, 1000);
  createBoard();
}


function updateTime() {
  const currentTime = new Date();
  const elapsedTime = Math.floor((currentTime - startTime) / 1000);
  document.getElementById('timer').textContent = `Time: ${elapsedTime} seconds`;
}


function endGame() {
  clearInterval(timerInterval);
  const popup = document.getElementById('game-over-popup');
  const timeTaken = document.getElementById('timer').textContent.split(' ')[1];
  document.getElementById('time-taken').textContent = `Congrats you taken ${timeTaken} seconds`;
  popup.classList.remove('hidden');    
  document.getElementById('restart-button').addEventListener('click', () => {
    popup.classList.add('hidden');
    resetGame();
  });
}


function resetGame() {
  gameBoard.innerHTML = '';
  matchedPairs = 0;
  startGame();
}

document.addEventListener('DOMContentLoaded', () => {
  startGame();
});
