const meta = new Audio("../assets/bgm3.mp3");

function playBgm() {
    meta.play();
}
document.getElementById("body").addEventListener("mouseover", playBgm) 

const programming_languages = [
    "python",
    "c",
    "html",
    "css",
    "php",
    "java",
    "csharp",
    "json",
    "javascript",
    "mongodb",
    "ruby",
    "assembly",
    "golang",
    "go",
    "sql",
    "kotlin",
    "matlab",
    "swift",
    "rust",
    "dart"
  ];
  
  let answer = "";
  const maxWrong = 6;
  let mistakes = 0;
  let guessed = [];
  let wordStatus = null;
  let score = 0; 
  
  const keyContainer = document.getElementById("keyContainer");
  const mainword = document.getElementById("mainword");
  const hangmanPic = document.getElementById("hangmanPic");
  const mistakesElement = document.getElementById("mistakes");
  const scoreElement = document.getElementById("score");
  
  function randomWord() {
    answer = programming_languages[Math.floor(Math.random()*programming_languages.length)];
  }
  
  function generateButtons() {
    let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
      .split("").map(letter =>
          `
          <button
            class="btn"
            id='${letter}'
            onClick="handleGuess('${letter}')"
          >
            ${letter}
          </button>
        `
      )
      .join(" ");
  
    keyContainer.innerHTML = buttonsHTML;
  }
  
  function guessedWord() {
    wordStatus = answer.split("").map(letter => (guessed.includes(letter) ? letter : " _ ")).join("");
    mainword.innerHTML = wordStatus;
  }
  
  function updateHangmanPic() {
    hangmanPic.src = `../assets/${mistakes}.jpg`;
  }
  
  function updateMistakes() {
    mistakesElement.innerHTML = mistakes;
  }
  
  function handleGuess(chosenLetter) {
    if (guessed.includes(chosenLetter)) return;
    guessed.push(chosenLetter);
  
    if (answer.includes(chosenLetter)) {
      guessedWord();
      checkIfGameWon();
    } 

    else if (!answer.includes(chosenLetter)) {
      mistakes++;
      updateMistakes();
      checkIfGameLost();
      updateHangmanPic();
    }
  }
  
  function next() {
    mistakes = 0;
    guessed = [];
    hangmanPic.src = "../assets/0.jpg";
  
    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons();
  }
  
  function checkIfGameWon() {
    if (wordStatus === answer) {
      keyContainer.innerHTML = "That was correct, You got it right!!!";
      score++;  
      scoreElement.innerHTML = score;
      sessionStorage.setItem("score", score);
    }
  }
  
  function checkIfGameLost() {
    if (mistakes === maxWrong) {
      mainword.innerHTML = `The answer was: ${answer}`;
      document.getElementById('keyContainer').innerHTML = 'That was wrong, You Lost!!!';

      setTimeout(
        function gameover(){location.href = "../gameover/score.html"}, 3000
      )

      sessionStorage.setItem("score", score);
    }
}



document.getElementById('maxWrong').innerHTML = maxWrong;
  
randomWord();
generateButtons();
guessedWord();

