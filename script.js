// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "Correct number";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 21;
// console.log(document.querySelector(".guess").value)

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener
("click", function() {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(typeof guess)

    if(!guess){
        document.querySelector('.message').textContent = "no number selected"
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent = "Correct number";
    } else if (guess > secretNumber) {
      
        if(score > 1) {
            document.querySelector('.message').textContent = "too high";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector('.message').textContent = "Yoo lose the game";
            document.querySelector(".score").textContent = 0;
        }
    } else if(guess < secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = "too low";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector('.message').textContent = "Yoo lose the game";
            document.querySelector(".score").textContent = 0;
        }
    }
})