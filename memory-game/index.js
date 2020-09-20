document.addEventListener("DOMContentLoaded", () => {
  // card options
  const cardArray = [
    {
      name: "unit1",
      img: "assets/lambdaunits-assets/unit1.png",
    },
    {
      name: "unit2",
      img: "assets/lambdaunits-assets/unit2.png",
    },
    {
      name: "unit3",
      img: "assets/lambdaunits-assets/unit3.png",
    },
    {
      name: "unit4",
      img: "assets/lambdaunits-assets/unit4.png",
    },
    {
      name: "cs",
      img: "assets/lambdaunits-assets/cs.png",
    },
    {
      name: "labs",
      img: "assets/lambdaunits-assets/labs.png",
    },
  ];
});

const grid = document.querySelector(".grid");
let cardsChosen = [];
let cardsChosenId = [];

// gameboard
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", "assets/lambdaunits-assets/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipcard);
    grid.appendChild(card);
  }
}

// card flip
function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
}

createBoard();
