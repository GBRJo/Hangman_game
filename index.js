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

var bodyParts = 6;

var guessedLetters = [];

var selectedWord = worlds[Math.floor(Math.random() * worlds.length)];

// Создаем элементы DOM 
var bodyElement1 = document.createElement("div");
bodyElement1.className = "body__element body__element1";
document.body.appendChild(bodyElement1);

var hangmanContainer = document.createElement("div");
hangmanContainer.className = "hangman__container";
hangmanContainer.id = "hangman__container";
bodyElement1.appendChild(hangmanContainer);

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

var bodyElement2 = document.createElement("div");
bodyElement2.className = "body__element body__element2";
document.body.appendChild(bodyElement2);

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

var wordGuessField = document.createElement("div");
wordGuessField.className = "word__guessfield";
wordGuessField.textContent = "conditioner";
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
word.appendChild(wordInfo);

var wordInfoContent = document.createElement("div");
wordInfoContent.className = "word__info--content";
wordInfoContent.textContent = "Read the hint and try to guess the word letter by letter. You can make 6 mistakes. Once the hangman is hanged, the game will end.";
wordInfo.appendChild(wordInfoContent);

var wordInfoHeader = document.createElement("div");
wordInfoHeader.className = "word__info--header";
wordInfoHeader.textContent = "how to play?";
wordInfo.appendChild(wordInfoHeader);