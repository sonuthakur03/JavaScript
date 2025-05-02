let textArea = document.getElementById('text'),
countBtn = document.getElementById('countbtn'),
readBtn = document.getElementById('readbtn');

// function to count vowels
const countVowel = () => {
    let text = textArea.value.toUpperCase();
    // let vowelNum = 0;
//     for (const char of text) {
//         if (char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
//             vowelNum++;
//     }
// }
    let vowelNum = (text.match(/[AEIOU]/gi) || []).length;
    let output = document.getElementById('output');
    output.innerText = vowelNum;
}

// func to read text
const readText = () => {
  const readMsg = new SpeechSynthesisUtterance;
  readMsg.text = textArea.value;
  readMsg.voice = speechSynthesis.getVoices()[1];
  speechSynthesis.speak(readMsg);
}

countBtn.addEventListener('click', countVowel);
readBtn.addEventListener('click', readText);

