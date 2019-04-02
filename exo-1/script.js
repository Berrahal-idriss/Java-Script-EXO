// you can write js here
var kelvin = prompt('Quelle est la température en Kelvin aujourd\'hui ?');
var celsius = kelvin-273;//Initialisation de la variable celsuis atant égual 273 de moins que la variable kelvin
fahrenheit = celsius * (9/5) + 32;
fahrenheit=Math.floor(fahrenheit); //Utilisation de la fonction floor qui arrondi au nombre entier inferieur
console.log('kelvin:'+kelvin+'celsuis'+celsius+'fahrenheit'+fahrenheit);
