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

var bodyElement2 = document.createElement("div");
bodyElement2.className = "body__element body__element2";
document.body.appendChild(bodyElement2);

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



var wordContainer = document.createElement("div");
wordContainer.className = "word__container";
bodyElement2.appendChild(wordContainer);