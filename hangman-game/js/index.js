// Selecting DOM elements
const keyboardDiv = document.querySelector('.keyboard');
const wordDisplay = document.querySelector('.word-display');
const guessesText = document.querySelector('.guesses-text b');
const hangmanImage = document.querySelector('.hangman-box img');
const gameModal = document.querySelector('.game-modal');
const playagainbtn = document.querySelector('.play-again');

// Declaring global variables
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

// Function to reset the game
const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove('show');
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    gameModal.querySelector('img').src = ``;
    keyboardDiv.querySelectorAll('button').forEach(btn => btn.disabled = false);
}

// Function to get random words and hints
const getRandomWords = () => {
    const {word, hint} = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);
    currentWord = word;
    resetGame();
    document.querySelector('.hint-text b').innerText = hint;
}

// Function to handle game over
const gameover = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? `You found the word` : `The word was: `;
        gameModal.querySelector('img').src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector('h4').innerText = `${isVictory ? 'Congrats!' : 'Game over!!'}`;
        gameModal.querySelector('p').innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add('show');
    }, 300)
}

// Function to initialize the game
const initGame = (button, clickedLetter) => {
    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll('li')[index].innerText = letter;
                wordDisplay.querySelectorAll('li')[index].classList.add("guessed");
            }
        })
    } else {
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`
    }
    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    if (wrongGuessCount === maxGuesses) return gameover(false);
    if (correctLetters.length === currentWord.length) return gameover(true);
}

// Dynamically creating keyboard buttons
for (let i = 97; i < 123; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener('click', (function(char) {
        return function(e) {
            initGame(e.target, char);
        };
    })(String.fromCharCode(i)));
}

// Initial game setup
getRandomWords();
playagainbtn.addEventListener('click', getRandomWords);