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

//Variables attached to my buttons
let imageOne =document.getElementById('buttonOne')
let imageTwo =document.getElementById('buttonTwo')
let imageThree =document.getElementById('buttonThree')
let imageFour =document.getElementById('buttonFour')
let imageFive =document.getElementById('buttonFive')
let imageSix =document.getElementById('buttonSix')


let 
// Game results
function gameResult(userChoice, computerChoice) {
    if (userChoice === 'IMGS/Rock.png' && computerChoice === 'IMGS/Paper.png') {
        imageOne.src = 'IMGS/RCircle.png';
        imageFour.src = 'IMGS/GCircle.png';
        return 'You Lose!';
    } else if (userChoice === 'IMGS/Rock.png' && computerChoice === 'IMGS/Scissors.png') {
        imageOne.src = 'IMGS/GCircle.png'
        imageFour.src = 'IMGS/RCircle.png'
        return 'You Win!';
    } else if (userChoice === 'IMGS/Paper.png' && computerChoice === 'IMGS/Rock.png') {
        imageOne.src = 'IMGS/GCircle.png'
        imageFour.src = 'IMGS/RCircle.png'
        return 'You Win!';
    } else if (userChoice === 'IMGS/Paper.png' && computerChoice === 'IMGS/Scissors.png') {
        imageOne.src = 'IMGS/RCircle.png'
        imageFour.src = 'IMGS/GCircle.png'
        return 'You Lose!';
    } else if (userChoice === 'IMGS/Scissors.png' && computerChoice === 'IMGS/Paper.png') {
        imageOne.src = 'IMGS/GCircle.png'
        imageFour.src = 'IMGS/RCircle.png'
        return 'You Win!';
    } else if (userChoice === 'IMGS/Scissors.png' && computerChoice === 'IMGS/Rock.png') {
        imageOne.src = 'IMGS/RCircle.png'
        imageFour.src = 'IMGS/GCircle.png'
        return 'You Lose!';
    } else if (userChoice === computerChoice) {
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