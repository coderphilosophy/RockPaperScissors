const result = document.querySelector('.result');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const final = document.querySelector('.final');
const tryagain = document.querySelector('#tryagain');


let playercount = 0;
let computercount = 0;

function computerChoice(){
    const rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() * rps.length)];
}

score.textContent = `Player: 0 Computer: 0`;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playround(button.id);
    });
});

function playround(playerchoice){
        let c = computerChoice();
        let p = playerchoice;

        if(playercount < 5 && computercount < 5){
            if((p == "rock" && c == "scissors") || (p == "scissors" 
                    && c == "paper") || (p == "paper" && c == "rock")){
                playercount++;
                score.textContent = `Player: ${playercount}     Computer: ${computercount}`;
                result.textContent = `Player wins! ${p} beats ${c}`;
            }
            else if(p == c){
                result.textContent = `Tie! ${p} vs ${c}`;
            }
            else{
                computercount++;
                score.textContent = `Player: ${playercount}     Computer: ${computercount}`;
                result.textContent = `Computer wins! ${c} beats ${p}`;
            }
        }
        if(playercount == 5 || computercount == 5){
            if(playercount == 5){
                final.textContent = `You win.`;
            }
            else if(computercount == 5){
                final.textContent =  `You lose.`;
            }
            
            tryagain.removeAttribute("hidden");
            tryagain.addEventListener('click', () => {
                playercount = 0;
                computercount = 0;
                score.textContent = `Player: ${playercount}     Computer: ${computercount}`;
                result.textContent = ``;
                final.textContent = ``;

                tryagain.setAttribute("hidden", "hidden");
            })
        }
}









