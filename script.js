//Get username prompt
let userName = prompt('Whats your name?')
let Greet = document.getElementById('greeting')


//Put username in website
userName 
? (Greet.innerText=`Hello, ${userName}`)
: (Greet.innerText=`Your name is Jeremiah now hello Jeremiah`)