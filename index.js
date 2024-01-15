var worlds = [
  "firstworld",
  "secondworld",
  "thirdworld",
  "fourthworld",
  "fifthworld",
  "sixthworld",
  "seventhworld",
  "eighthworld",
];

var bodyParts = 0;

var  enteredLetters = [];

var selectedWord = worlds[Math.floor(Math.random() * worlds.length)];
console.log(selectedWord);



// Создаем элементы DOM 
var bodyElement2 = document.createElement("div");
bodyElement2.className = "body__element body__element2";
document.body.insertBefore(bodyElement2, document.body.firstChild);

var bodyElement1 = document.createElement("div");
bodyElement1.className = "body__element body__element1";
document.body.insertBefore(bodyElement1, document.body.firstChild);

var hangmanContainer = document.createElement("div");
hangmanContainer.className = "hangman__container";
hangmanContainer.id = "hangman__container";
bodyElement1.appendChild(hangmanContainer);

var hang = document.createElement("div");
hang.className = "hang";
hangmanContainer.appendChild(hang);

var head = document.createElement("div");
head.className = "head";
hangmanContainer.appendChild(head);

var bodyHands = document.createElement("div");
bodyHands.className = "bodyHands";
hangmanContainer.appendChild(bodyHands);

var leftHand = document.createElement("div");
leftHand.className = "leftHand";
bodyHands.appendChild(leftHand);

var body = document.createElement("div");
body.className = "body";
bodyHands.appendChild(body);

var rightHand = document.createElement("div");
rightHand.className = "rightHand";
bodyHands.appendChild(rightHand);

var legs = document.createElement("div");
legs.className = "legs";
hangmanContainer.appendChild(legs);

var leftLeg = document.createElement("div");
leftLeg.className = "leftLeg";
legs.appendChild(leftLeg);

var rightLeg = document.createElement("div");
rightLeg.className = "rightLeg";
legs.appendChild(rightLeg);

var wordContainer = document.createElement("div");
wordContainer.className = "word__container";
bodyElement2.appendChild(wordContainer);

var hint = document.createElement("div");
hint.className = "hint";
wordContainer.appendChild(hint);

var hintContent = document.createElement("div");
hintContent.className = "hint__content";
hintContent.innerHTML = "<span> Hint:</span><br> household appliance for creating comfort</span>";
hint.appendChild(hintContent);

var hintNumber = document.createElement("div");
hintNumber.className = "hint__number";
hintNumber.textContent = "1";
hint.appendChild(hintNumber);

var word = document.createElement("div");
word.className = "word";
wordContainer.appendChild(word);

var wordGuessField = document.createElement("input");
wordGuessField.className = "word__guessfield";
wordGuessField.id = "guess_field";
word.appendChild(wordGuessField);

var wordUnderline = document.createElement("div");
wordUnderline.className = "word__underline";
word.appendChild(wordUnderline);

var wordKeyboard = document.createElement("div");
wordKeyboard.className = "word__keyboard";
word.appendChild(wordKeyboard);

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (var i = 0; i < alphabet.length; i++) {
  var letter = document.createElement("div");
  letter.className = "word__keyboard--letter";
  letter.textContent = alphabet[i];
  wordKeyboard.appendChild(letter);
}

var wordInfo = document.createElement("div");
wordInfo.className = "word__info";
wordInfo.id = "button";
word.appendChild(wordInfo);

var wordInfoContent = document.createElement("div");
wordInfoContent.className = "word__info--content";
wordInfoContent.textContent = "Read the hint and try to guess the word letter by letter. You can make 6 mistakes. Once the hangman is hanged, the game will end.";
wordInfo.appendChild(wordInfoContent);

var wordInfoHeader = document.createElement("div");
wordInfoHeader.className = "word__info--header";
wordInfoHeader.textContent = "how to play?";
wordInfo.appendChild(wordInfoHeader);

var modalLoose = document.createElement("div");
modalLoose.className = "modalLoose";
document.body.insertBefore(modalLoose, document.body.firstChild);

var modalLooseContent = document.createElement("div");
modalLooseContent.className = "modalLoose__content";
modalLoose.appendChild(modalLooseContent);

var modalLooseText = document.createElement("h1");
modalLooseText.textContent = "You loose!";
modalLooseContent.appendChild(modalLooseText);

var modalLooseGuessedWord = document.createElement("h2");
modalLooseGuessedWord.textContent = "Guessed word is - " + selectedWord;
modalLooseGuessedWord.className = "modalLoose__word";
modalLooseContent.appendChild(modalLooseGuessedWord);

var closeButtonLoose = document.createElement("button");
closeButtonLoose.className = "modalLoose__close";
closeButtonLoose.textContent = "Try Again";
modalLooseContent.appendChild(closeButtonLoose);

var modal = document.createElement("div");
modal.className = "modal";
document.body.insertBefore(modal, document.body.firstChild);

var modalContent = document.createElement("div");
modalContent.className = "modal__content";
modal.appendChild(modalContent);

var modalText = document.createElement("h1");
modalText.textContent = "You win!";
modalContent.appendChild(modalText);

var modalGuessedWord = document.createElement("h2");
modalGuessedWord.textContent = "Guessed word is - " + selectedWord;
modalGuessedWord.className = "modal__word";
modalContent.appendChild(modalGuessedWord);

var closeButton = document.createElement("button");
closeButton.className = "modal__close";
closeButton.textContent = "Try Again";
modalContent.appendChild(closeButton);


// Отображаем висельника
function showHangman() {
    var parts = ["hang", "head", "body", "leftHand", "rightHand", "leftLeg", "rightLeg"];
let hang = document.querySelector(".hang");
      var currentPart = document.querySelector("." + parts[bodyParts]);
      currentPart.style.display = "block";
      if (currentPart !== hang) {
        hang.style.display = "none";
      }
      if (currentPart === rightLeg) {
        isHanged();
       
     }
      }
  
  window.addEventListener("DOMContentLoaded", showHangman);


  // Отображаем угаданные буквы
  var textField = document.getElementById("guess_field");
   textField.value = "*".repeat(selectedWord.length);

   function showWord() {
    let wordArray = selectedWord.split("");
    let updatedWordArray = [];
  
    for (let i = 0; i < wordArray.length; i++) {
      if (enteredLetters.includes(wordArray[i])) {
        updatedWordArray.push(wordArray[i]);
      } else {
        updatedWordArray.push("*");
      }
    }
  
    let updatedWord = updatedWordArray.join("");
    textField.value = updatedWord;

    if (selectedWord === updatedWord) {
      isWordGuessed();
      }
  }

  // Обрабатываем введённые буквы
  var letterDivs = document.getElementsByClassName("word__keyboard--letter");

  function userLetters(letterDivs) {
    for (let i = 0; i < letterDivs.length; i++) {
      letterDivs[i].addEventListener("click", function() {
        let letter = this.textContent.toLowerCase();
        enteredLetters.push(letter);
  
        if (!selectedWord.includes(letter)) {
          bodyParts++;
        }
  
        console.log(enteredLetters);
        showHangman();
        showWord();
  
        this.classList.add("active");
  
     
      });
    }
  }
  
  userLetters(letterDivs);

// Сбрасываем игру
function resetGame() {
  var textField = document.getElementById("guess_field");
   textField.value = "*".repeat(selectedWord.length);
    bodyParts = 0;
    var selectedWord = worlds[Math.floor(Math.random() * worlds.length)];
    console.log(selectedWord);
    for (let j = 0; j < letterDivs.length; j++) {
      letterDivs[j].classList.remove("active");
    }
  }

 // Модальные окна
  function isWordGuessed() {
    modal.style.display = "flex";
   
  }

  closeButton.onclick = function () {
    modal.style.display = "none";
    resetGame();
  }

  function isHanged() {
    modalLoose.style.display = "flex";
     }

  closeButtonLoose.onclick = function () {
    modalLoose.style.display = "none";
    resetGame();
  }

  