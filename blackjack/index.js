let player = {
  name: "Balance",
  chips: 200,
};

let bid = 10;
let cards = [];
let tableSum = 0;
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let tableSumEl = document.getElementById("table-sum-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  if (player.chips < bid) {
    isAlive = false;
    message = "You don't have enough chips to play.";
    cardsEl.textContent = "Cards: ";
    tableSumEl.textContent = "Table: ";
    messageEl.textContent = message;
    return;
  }
  player.chips -= bid;
  playerEl.textContent = player.name + ": $" + player.chips;
  table();
  renderGame();
}

function table() {
  tableSum = getRandomCard() + getRandomCard();

  while (tableSum < 16) {
    tableSum += getRandomCard();
  }

  if (tableSum > 21) {
    tableSum = -1;
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards.join(" ") + " (" + sum + ")";
  tableSumEl.textContent = "Table: " + (tableSum === -1 ? "Busted" : tableSum);

  if (tableSum === -1 || tableSum === 21) {
    stand();
  } else {
    if (sum < 21) {
      message = "Do you want to draw a new card?";
    } else if (sum === 21) {
      message = "You've got Blackjack!";
      hasBlackJack = true;
      player.chips += bid;
      stand();
    } else {
      message = "You Lost!";
      isAlive = false;
    }
    messageEl.textContent = message;
  }
}

function hit() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

function stand() {
  if (isAlive) {
    isAlive = false;

    if (tableSum < sum || tableSum === -1) {
      message = "You won!";
      player.chips += bid * 2;
    } else if (tableSum > sum) {
      message = "You lost!";
    } else {
      message = "It's a tie!";
      player.chips += bid;
    }
    playerEl.textContent = player.name + ": $" + player.chips;
    messageEl.textContent = message;
  }
}
