//Get username prompt
const userName = prompt('Whats your name?')

//Get computers choice
function Computer = {
    let randomNumber = Math.floor(Math.random() * 7)
    //All possible answers
    switch (randomNumber) {
        case 0:
            imageChoice = 'IMGS/Rock.png';
            break;
        case 1:
            return 'IMGS/Paper.png'
            break;
        case 2:
            return 'IMGS/Scissors.png'
            break;
        case 3:
            return 'IMGS/Gun.png'
            break;
        case 4:
            return 'IMGS/Rock.png'
            break;
        case 5:
            return 'IMGS/Paper.png'
            break;
        case 6:
            return 'IMGS/Scissors.png'
            break;
        }
}
Let computerChoice = Computer()


//If statements for the choices
if (userChoice === 'Rock' && computerChoice === 'Paper'){
    return 'You Lose!'
} else if (userChoice ==='Rock' && computerChoice === 'Rock'){
    return 'You Tied!'
} else if (userChoice ==='Rock' && computerChoice === 'Scissors'){
    return 'You Win!'
} else if (userChoice ==='Rock' && computerChoice === 'Gun'){
    return 'You Lose!'
} else {
    return 'You Broke it Good Jorb'
}

if (userChoice === 'Paper' && computerChoice === 'Paper'){
    return 'You Tied!'
} else if (userChoice ==='Paper' && computerChoice === 'Rock'){
    return 'You Win!'
} else if (userChoice ==='Paper' && computerChoice === 'Scissors'){
    return 'You Lose!'
} else if (userChoice ==='Paper' && computerChoice === 'Gun'){
    return 'You Lose!'
} else {
    return 'You Broke it Good Jorb'
}

if (userChoice === 'Scissors' && computerChoice === 'Paper'){
    return 'You Win!'
} else if (userChoice ==='Scissors' && computerChoice === 'Rock'){
    return 'You Lose!'
} else if (userChoice ==='Scissors' && computerChoice === 'Scissors'){
    return 'You Tied!'
} else if (userChoice ==='Scissors' && computerChoice === 'Gun'){
    return 'You Lose!'
} else {
    return 'You Broke it Good Jorb'
}

onclick()