// Initialize ALL global variables here
// allTheWords = []
// This code here selects a random word
const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw"
];

const wordpicker = function (list) {
  let index = Math.floor(Math.random() * list.length);
  const x = list;
  return x[index];
};

const clean = function () {
  document.querySelector("input").value = "";
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector(".restart").className = "beurt5 restart";
  document.querySelector(".restartButton").style.display = "none";
  gameover = false;
  beginTheGameWithPlayer()
};

let gameOver;
const winTheGame = function () {
  document.querySelector(".win").style.display = "block";
  document.querySelector(".restartButton").style.display = "inline-block";
  gameOver = true;
};

const lose4 = function () {
  // when losing 3 times, this has to happen
  document.querySelector(".lose").style.display = "block";
  document.querySelector(".restartButton").style.display = "inline-block";
  gameOver = true;
};

const spanTheWord1 = function (word) {
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
};

const updateTriesDisplay = function (tries) {
  document.querySelector(".lives span").innerHTML = 5 - tries;
  if (tries == 1) {
    document.querySelector(".beurt1").className = "beurt1Active";
  } else if (tries == 2) {
    document.querySelector(".beurt1Active").className = "beurt1"
    document.querySelector(".beurt2").className = "beurt2Active";
  } else if (tries == 3) {
    document.querySelector(".beurt2Active").className = "beurt2"
    document.querySelector(".beurt3").className = "beurt3Active";
  } else if (tries == 4) {
    document.querySelector(".beurt3Active").className = "beurt3"
    document.querySelector(".beurt4").className = "beurt4Active";
  } else if (tries == 5) {
    document.querySelector(".beurt4Active").className = "beurt4"
    document.querySelector(".beurt5").className = "beurt5Active restart";
  }
};

const letters = function (word, inputs) {
  let wrongLetters = inputs.filter(function (letter) {
    // If the letter is in the word return.... false/true (we want to remove that then)
    return !word.includes(letter);
  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

const theWord = function (word, inputLetterWords) {
  let display = word.map(function (letter) {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = display.join(" ");
};

/*const wordGuessed = function (word, inputs) {
  if (word.length === inputs) {
    winTheGame();
  }
}*/
const wordGuessed = function (word, inputs) {
  //if all inputs are in the word
  const remaining = word.every(i => inputs.includes(i));
  return remaining
};

const guessLetter = function () {
  //deze regel weer verwijderen. 
  const input1 = document.querySelector("input").value;
  document.querySelector("input").value = "";

  if (inputs.includes(input1) || input1 === " " || input1 === "") {
    return;
  }

  if (!word.includes(input1)) {
    tries++;
    updateTriesDisplay(tries);
  }



  inputs.push(input1);
  theWord(word, inputs);
  letters(word, inputs);

  console.log(word);
  console.log(word.length);
  console.log(inputs);
  //console.log(theWord());
  //console.log(letters());

  /*if (word.length === inputs) {
    winTheGame();
  } else if (tries >= 5) {
    lose4();
  }*/

  if (wordGuessed(word, inputs)) {
    winTheGame();
  } else if (tries >= 5) {
    lose4();
  }
};

const beginTheGameWithPlayer = () => {

  word = wordpicker(wordList).split("");
  spanTheWord1(word);

  tries = 0;
  updateTriesDisplay(tries);

  inputs = [];
  theWord(word, inputs);
  letters(word, inputs);

  document.querySelector(".restartButton").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document
    .querySelector(".restartButton")
    .addEventListener("click", clean);
  beginTheGameWithPlayer();
});