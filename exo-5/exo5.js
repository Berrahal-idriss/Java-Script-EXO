// you can write js here

console.log('exo-5');

var input ='Trop d\'immagination pour cette phrase';
var vowels =['a','e','i','o','u','y'];
inputArray=input.split('');
var resultArray=[];

console.log(input);

inputArray.forEach(function(letter)
{
    if(vowels.indexOf(letter)!=-1)
    {

        resultArray.push(letter);
    }

});
console.log(resultArray.join('').toUpperCase());
