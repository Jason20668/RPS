// Get username prompt
const userName = prompt('What is your name?')
let Greet = document.getElementById('greeting')
//Put username in website
userName 
? (Greet.innerText=`${userName}`)
: (Greet.innerText=`Pubert`)


//Puter choice
function Computer() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            imageChoice = 'IMGS/Rock.png';
            break;
        case 1:
            imageChoice = 'IMGS/Paper.png';
            break;
        case 2:
            imageChoice = 'IMGS/Scissors.png';
            break;
    }
    
    return imageChoice; 
}

// Game results
function gameResult(userChoice, computerChoice) {
    if (userChoice === 'IMGS/Rock.png' && computerChoice === 'IMGS/Paper.png') {
        return 'You Lose!';
    } else if (userChoice === 'IMGS/Rock.png' && computerChoice === 'IMGS/Rock.png') {
        return 'You Tied!';
    } else if (userChoice === 'IMGS/Rock.png' && computerChoice === 'IMGS/Scissors.png') {
        return 'You Win!';
    } else if (userChoice === 'IMGS/Paper.png' && computerChoice === 'IMGS/Paper.png') {
        return 'You Tied!';
    } else if (userChoice === 'IMGS/Paper.png' && computerChoice === 'IMGS/Rock.png') {
        return 'You Win!';
    } else if (userChoice === 'IMGS/Paper.png' && computerChoice === 'IMGS/Scissors.png') {
        return 'You Lose!';
    } else if (userChoice === 'IMGS/Scissors.png' && computerChoice === 'IMGS/Paper.png') {
        return 'You Win!';
    } else if (userChoice === 'IMGS/Scissors.png' && computerChoice === 'IMGS/Rock.png') {
        return 'You Lose!';
    } else if (userChoice === 'IMGS/Scissors.png' && computerChoice === 'IMGS/Scissors.png') {
        return 'You Tied!';
    }
}

//User buttons
function choiceRock() {
    const userChoice = 'IMGS/Rock.png';
    const computerChoice = Computer(); 
    const result = gameResult(userChoice, computerChoice); 
    alert(result); 


}

function choicePaper() {
    const userChoice = 'IMGS/Paper.png';
    const computerChoice = Computer();
    const result = gameResult(userChoice, computerChoice);
    alert(result);
}

function choiceScissors() {
    const userChoice = 'IMGS/Scissors.png';
    const computerChoice = Computer();
    const result = gameResult(userChoice, computerChoice);
    alert(result);
}