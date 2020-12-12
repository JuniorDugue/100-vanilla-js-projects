document.addEventListener("DOMContentLoaded", () => {
  // card options
  const cardArray = [
    {
      name: "unit1",
      img: "./assets/lambdaunits-assets/unit1.png",
    },
    {
      name: "unit2",
      img: "./assets/lambdaunits-assets/unit2.png",
    },
    {
      name: "unit3",
      img: "./assets/lambdaunits-assets/unit3.png",
    },
    {
      name: "unit4",
      img: "./assets/lambdaunits-assets/unit4.png",
    },
    {
      name: "cs",
      img: "./assets/lambdaunits-assets/cs.png",
    },
    {
      name: "labs",
      img: "./assets/lambdaunits-assets/labs.png",
    },
    {
      name: "unit1",
      img: "./assets/lambdaunits-assets/unit1.png",
    },
    {
      name: "unit2",
      img: "./assets/lambdaunits-assets/unit2.png",
    },
    {
      name: "unit3",
      img: "./assets/lambdaunits-assets/unit3.png",
    },
    {
      name: "unit4",
      img: "./assets/lambdaunits-assets/unit4.png",
    },
    {
      name: "cs",
      img: "./assets/lambdaunits-assets/cs.png",
    },
    {
      name: "labs",
      img: "./assets/lambdaunits-assets/labs.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  // gameboard
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "./assets/lambdaunits-assets/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  // check for matches
  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "./assets/lambdaunits-assets/white1.png");
      cards[optionTwoId].setAttribute("src", "./assets/lambdaunits-assets/white1.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "./assets/lambdaunits-assets/blank.png");
      cards[optionTwoId].setAttribute("src", "./assets/lambdaunits-assets/blank.png");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;

    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You ound them all!";
    }
  }

  // card flip
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
