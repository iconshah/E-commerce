var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function game(userChoice) {
    const computerChoice  = getComputerChoice();
    switch (userChoice + computerChoice){
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
        break;
        case "rp":
        case "sr":
        case "ps":
           lose( userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);

        

    }
}

function userChoice() {
    rock_div.addEventListener('click',() =>    game("r"));
    paper_div.addEventListener('click', () =>  game("p"));
    scissors_div.addEventListener('click',()=> game("s"));

}
userChoice();

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNuber = Math.floor(Math.random() * 3);
    return choices[randomNuber];
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} (u) beats ${convertToWord(computerChoice)} (c). So you win!`
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() =>   document.getElementById(userChoice).classList.remove('green-glow'), 1000);
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} (u) loses to ${convertToWord(computerChoice)} (c). So you loose!`
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 1000);
    
    
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = `${convertToWord(userChoice)} (u) equals ${convertToWord(computerChoice)} (c). It's Draw!`
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() =>   document.getElementById(userChoice).classList.remove('grey-glow'), 1000);
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}














































