// you can write js here
console.log('exo-2');
var registered=false;
var raceNumber=0;
var runnerAge=prompt('Quelle age avez vous?');


if(registered===false)
{
    raceNumber+=1000;
}
else
{
    raceNumber = Math.floor(Math.random()*1000)
}
if(registered===true&&runnerAge>18)
{
    console.log('You will race at 9:30 am')
    console.log(raceNumber)
}
else if(registered===true||runnerAge>18)
{
    console.log('You will race at 11:00 am')
    console.log(raceNumber)
}
else if(registered===false||runnerAge<18)
{
    console.log('You will race at 12:30 pm')
    console.log(raceNumber)
}
else
{
    console.log('Go to the registration desk')
}