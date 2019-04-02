// you can write js here
console.log('exo-3');

var userInput =['rock','paper','scissors','bomb'];
var uChoice;
var computerChoice;

playGame();
function getUserChoice(userInput)
{
    switch(userInput)
    {
            case 'rock':
                console.log('user: '+userInput);
            break;

            case 'paper':
                console.log('user: '+userInput);
                break;
            case 'scissors':
                console.log('user: '+userInput);
                break;
        case 'bomb':
            console.log('user: '+userInput);
            break;
            default:
                console.log('ERREUR!\nLes choix proposés sont\'rock\', \'paper\', ou \'scissors\'. ');
    }

        return  userInput;
}
function getComputerChoice()
{
    computerChoice = Math.round(Math.random(0,3));
    console.log(computerChoice);
    if(computerChoice==0)
    {
        computerChoice='rock';
    }
    else if(computerChoice==1)
    {
        computerChoice='paper'
    }
    else
    {
        computerChoice='scissors';
    }
    console.log('comp: '+ computerChoice);
    return computerChoice;
}

function determineWinner(userChoice,computerChoice)
{
    if(userChoice==='bomb')
    {
        console.log('WON§§§');
    }
    if(userChoice===computerChoice)
    {
        console.log('Tied');
    }
    if(userChoice==='rock'&&computerChoice==='scissors') {

        console.log('WON!!!');
    }
    else if(userChoice==='paper'&&computerChoice==='rock')
    {
            console.log('WON!!!');
    }
    else if(userChoice==='scissors'&&computerChoice==='paper') {
        console.log('WON!!!');
    }
    else
        {
            console.log('Lost...');
        }

}



function playGame()
{
    var userChoice= getUserChoice(prompt(''));
    var computerChoice = getComputerChoice();
    determineWinner(userChoice,computerChoice);
}
