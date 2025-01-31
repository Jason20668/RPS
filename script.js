// Get username prompt
const userName = prompt('What is your name?');
let Greet = document.getElementById('greeting');
// Put username in website
userName
    ? (Greet.innerText = `${userName}`)
    : (Greet.innerText = `Pubert`);

// Puter choice
function Computer() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'IMGS/Rock.png';
        case 1:
            return 'IMGS/Paper.png';
        case 2:
            return 'IMGS/Scissors.png';
    }
}

// Variables attached to my buttons
let imageOne = document.getElementById('buttonOne');
let imageTwo = document.getElementById('buttonTwo');
let imageThree = document.getElementById('buttonThree');
let imageFour = document.getElementById('buttonFour');
let imageFive = document.getElementById('buttonFive');
let imageSix = document.getElementById('buttonSix');
let userScore = 0;
let computerScore = 0;

// Update score circle images
function updateScoreImages() {
    // Update user score
    if (userScore === 1) {
        imageOne.src = 'IMGS/GCircle.png';
    } else if (userScore === 2) {
        imageTwo.src = 'IMGS/GCircle.png';
    } else if (userScore === 3 && computerScore === 0) {
        imageThree.src = 'IMGS/GCircle.png';
        setTimeout(() => alert("You absolutely destroyed the computer!!!"), 750);
        setTimeout(() => location.reload(), 1600); 
    } else if (userScore === 3 && computerScore === 1) {
        imageThree.src = 'IMGS/GCircle.png';
        setTimeout(() => alert("You beat the computer!!!"), 750);
        setTimeout(() => location.reload(), 1600); 
    } else if (userScore === 3 && computerScore === 2) {
        imageThree.src = 'IMGS/GCircle.png';
        setTimeout(() => alert("You almost lost you kinda suck. But congrats on still winning!!!"), 750);
        setTimeout(() => location.reload(), 1600); 
    // Update computer score
    if (computerScore === 1) {
        imageFour.src = 'IMGS/GCircle.png';
    } else if (computerScore === 2) {
        imageFive.src = 'IMGS/GCircle.png';
    } else if (computerScore === 3 && userScore === 0) {
        imageSix.src = 'IMGS/GCircle.png';
        setTimeout(() => alert("You got destroyed by a computer...loser"), 750);
        setTimeout(() => location.reload(), 1600); 
    } else if (computerScore === 3 && userScore === 1) {
        imageSix.src = 'IMGS/GCircle.png';
        setTimeout(() => alert("You only won one time damn you suck"), 750);
        setTimeout(() => location.reload(), 1600); 
    } else if (computerScore === 3 && userScore === 2) {
        imageSix.src = 'IMGS/GCircle.png';
        setTimeout(() => alert("At least you almost won...but you still suck"), 750);
        setTimeout(() => location.reload(), 1600); 
    }
}



// Game results
function gameResult(userChoice, computerChoice) {
    let resultMessage = '';

    if (userChoice === 'IMGS/Rock.png' && computerChoice === 'IMGS/Paper.png') {
        computerScore += 1;
        resultMessage = 'You Lose!';
    } else if (userChoice === 'IMGS/Rock.png' && computerChoice === 'IMGS/Scissors.png') {
        userScore += 1;
        resultMessage = 'You Win!';
    } else if (userChoice === 'IMGS/Paper.png' && computerChoice === 'IMGS/Rock.png') {
        userScore += 1;
        resultMessage = 'You Win!';
    } else if (userChoice === 'IMGS/Paper.png' && computerChoice === 'IMGS/Scissors.png') {
        computerScore += 1;
        resultMessage = 'You Lose!';
    } else if (userChoice === 'IMGS/Scissors.png' && computerChoice === 'IMGS/Paper.png') {
        userScore += 1;
        resultMessage = 'You Win!';
    } else if (userChoice === 'IMGS/Scissors.png' && computerChoice === 'IMGS/Rock.png') {
        computerScore += 1;
        resultMessage = 'You Lose!';
    } else if (userChoice === computerChoice) {
        resultMessage = 'You Tied!';
    }

    // Update scores 
    updateScoreImages();

    return resultMessage;
}

// User buttons
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