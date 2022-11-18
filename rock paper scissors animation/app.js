const game = () => {
    let pScore = 0;
    let cScore = 0;


    const startGame = () => {
        const playBtn = document.querySelector(".intro  button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelectorAll(".player-hand");
        const computerHand = document.querySelectorAll(".computer-hand");
        const computerOptions = ["rock", "paper", "scissors"];
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });

        options.forEach((option) => {
            option.addEventListener("click", function () {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                compareHands(this.textContent, computerChoice);
                playerHand[0].src = `./${this.textContent}.png`;
                computerHand[0].src = `./${computerChoice}.png`;

                playerHand[0].style.animation = "shakePlayer 2s ease";
                computerHand[0].style.animation = "shakeComputer 2s ease";
            });
        });
    };
    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const compueterScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        compueterScore.textContent = cScore;


    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
            return;
        }
        // rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = " Computer Wins";
                cScore++;
                updateScore();
                return;
            }

        }
        // paper
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = " Player Wins";
                pScore++;
                updateScore();
                return;
            }

        }
        // scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                winner.textContent = "Computer Wins";
                return;
            } else {
                winner.textContent = " Player Wins";
                return;
            }

        }


    }



    startGame();
    playMatch();



};
game();
