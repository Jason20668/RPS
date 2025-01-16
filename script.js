// Get username prompt
const userName = prompt('What is your name?')
let Greet = document.getElementById('greeting')
//Put username in website
userName
    ? (Greet.innerText = `${userName}`)
    : (Greet.innerText = `Pubert`)


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

//Variables attached to my buttons
let imageOne = document.getElementById('buttonOne')
let imageTwo = document.getElementById('buttonTwo')
let imageThree = document.getElementById('buttonThree')
let imageFour = document.getElementById('buttonFour')
let imageFive = document.getElementById('buttonFive')
let imageSix = document.getElementById('buttonSix')
let userScore = 0;
let computerScore = 0;

// Game results
function gameResult(userChoice, computerChoice) {
    if (userChoice === 'IMGS/Rock.png' && computerChoice === 'IMGS/Paper.png') {
        computerScore += 1;
        return 'You Lose!';

    } else if (userChoice === 'IMGS/Rock.png' && computerChoice === 'IMGS/Scissors.png') {
        userScore += 1;
        return 'You Win!';

    } else if (userChoice === 'IMGS/Paper.png' && computerChoice === 'IMGS/Rock.png') {
        userScore += 1;
        return 'You Win!';

    } else if (userChoice === 'IMGS/Paper.png' && computerChoice === 'IMGS/Scissors.png') {
        computerScore += 1;
        return 'You Lose!';

    } else if (userChoice === 'IMGS/Scissors.png' && computerChoice === 'IMGS/Paper.png') {
        userScore += 1;
        return 'You Win!';

    } else if (userChoice === 'IMGS/Scissors.png' && computerChoice === 'IMGS/Rock.png') {
        computerScore += 1;
        return 'You Lose!';

    } else if (userChoice === computerChoice) {
        return 'You Tied!';
    }

    //Button image changing
    if (userScore === 1) {
        imageOne.src = 'IMGS/GCircle.png'
    } else if (userScore === 2) {
        imageOne.src = 'IMGS/GCircle.png'
        imageTwo.src = 'IMGS/GCircle.png'
    } else if (userScore === 3) {
        imageOne.src = 'IMGS/GCircle.png'
        imageTwo.src = 'IMGS/GCircle.png'
        imageThree.src = 'IMGS/GCircle.png'
    }

    if (computerScore === 1) {
        imageFour.src = 'IMGS/GCircle.png'
    } else if (computerScore === 2) {
        imageFour.src = 'IMGS/GCircle.png'
        imageFive.src = 'IMGS/GCircle.png'
    } else if (computerScore === 3) {
        imageFour.src = 'IMGS/GCircle.png'
        imageFive.src = 'IMGS/GCircle.png'
        imageSix.src = 'IMGS/GCircle.png'
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