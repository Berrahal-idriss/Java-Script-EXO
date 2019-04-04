// Partie 8 code academy
console.log("exo-6");

// commenter cette ligne de code.
var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};

// afficher le nombre de voitures de Joe

// changer le nombre de salle de bains de Joe : il n'en possède au'une.

// Joe vient d'acquérir un garage changer la structure pour le refléter.


//EXO-6
var team ={
    _player:[{  firstName: 'Pablo',
                lastName:'Sanchez',
                age: 11
    }],
    _games:[{
                opponent: "Broncos",
                teamPoints: 42,
                opponentPoints: 27
    }],
    addPlayer(first,last,age){
    var _newPlayer= {
        firstName: first,
        lastName: last,
        age: age
    }
    this._player.push(_newPlayer);
},
    addGames(oppo,teamP,opponentP){
        var _newGames= {
            opponent: oppo,
            teamPoints: teamP,
            opponentPoints: opponentP
        }
        this._games.push(_newGames);
    },
    pointSum(){
        var points=0;
        var _sumPoint={

            totalPoint:team._games.forEach(function(match)
                {
                   points+=match.teamPoints;
                })

        }
         console.log(points);
    },
    pointMoyenne(){
        var oppoints=0;
        var nb=0;
        var _moyennePoint={

                            totalOppoint:team._games.forEach(function(match)
                            {
                                oppoints+=match.opponentPoints;

                                nb++;
                            })

        }
        oppoints=oppoints/nb;
        console.log(oppoints);
        console.log(nb);
    },
    triAge()
        {
            var older=0;
            console.log(older)
            var ageTri= {
                findOlder: team._player.forEach(function (joueur) {

                    if (older > joueur.age) {

                        older =older;
                    } else {
                        older = joueur.age;
                    }
                })

        }
            console.log(older);
        }



};
console.log(team._player);
console.log(team._games);

team.addPlayer("gégé","Nom",15);
team.addPlayer("John","Zackson",52);
team.addPlayer("jack","Johnson",44);
team.addGames("Ravens",55,32);
team.addGames("Chiefs",25,39);
team.addGames("Browns",68,59);
team.pointSum();
team.pointMoyenne();
team.triAge();
// var totalPoints=[];
//
// team._games.forEach(function(points)
// {
//     points=points+points;
//     totalPoints.points;
// });
// console.log(totalPoints);

