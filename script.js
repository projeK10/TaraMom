const mainButton = document.getElementById("eventSwitch");
const textChange = document.getElementById("changeText");
const loveWords = ["adore", "cherish", "treasure", "appreciate", "care for", "admire", "respect", "have affection for", "am devoted to", "craze over", "am charmed by", "am joyful because of", "am elated because of", "am estatic because of", "am obsessed with", "care deeply for" ];
let phrase;
let lastString;
let randomNumber;
let continueThis;
mainButton.addEventListener("click", changeWord);

function changeWord() {
    lastString = randomNumber;
    randomNumber = getRandomNumber();
    continueThis = checkThis();
    if (continueThis) {
        phrase = loveWords[randomNumber];
        textChange.textContent = `I ${phrase} Tara`;
    } else {
        runThisAgain();
    }
}

function runThisAgain() {
    changeWord();
}

function getRandomNumber() {
    return Math.floor(Math.random() * 16);
}

function checkThis() {
    if (lastString === randomNumber) {
        return false;
    } else {
        return true;
    }
}

