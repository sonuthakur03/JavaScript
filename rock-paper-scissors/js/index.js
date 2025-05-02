let userCount = 0;
let compCount = 0;

let choices = document.querySelectorAll(".img");
let win = document.querySelector("#win");
let color = document.querySelector(".winner")

const genCompChoice = () =>{
  let arr = [ "rock", "paper", "scissors"]
   let comGuess = arr[Math.floor(Math.random()*3)]
   return comGuess;
}

const draw = () =>{
  win.innerText = "Its a draw!!"
  color.style.backgroundColor = "teal"
}

const showWinner = (winner) =>{
  if(winner === "user"){
    win.innerText = "You win!!";
    userCount++;
    document.querySelector("#user").innerText = `${userCount}`
    color.style.backgroundColor = "green"
  }else{
    win.innerText = "You lose!!";
    compCount++;
    document.querySelector("#comp").innerText = `${compCount}`
    color.style.backgroundColor = "red"
  }
  
}

const playGame = (userChoice) =>{
  let comGuess = genCompChoice();
  if(userChoice === comGuess){
  draw();
  }else{
    if ( userChoice == "rock" && comGuess == "scissors" || userChoice == "paper"
    && comGuess == "rock" || userChoice == "scissors" && comGuess == "paper"){
            winner = "user";
        }else{
            winner = "comp";
        }
        showWinner(winner);
  }
}

choices.forEach((img) =>{
  img.addEventListener("click", ()=>{
  const  userChoice = img.getAttribute("id");
  playGame(userChoice);
   })
})
