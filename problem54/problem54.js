
/* 

Create a function called highestRunScorer that will
Receive a 2d array called playersInfo
Based on highest score, return the name of the player

Things required
Variable 
If-else 
Loop
Function
Array

 */


/* =========================================
          Method One: (Complex)
============================================= */

/*  const highestRunScorer = players => {
    const allPlayersRun = [];
    for( let i = 0; i < players.length; i++){

       const player = players[i];
       const playerRun = player[1];
       allPlayersRun.push(playerRun);  
    }

    const topRuns = Math.max(...allPlayersRun);

    for( let x = 0; x < players.length; x++){
        if(players[x][1] == topRuns){

            return players[x][0];
        }
    }
 }
 */

/* =========================================
          Method Two: (Simple)
============================================= */

function highestRunScorer(players){
    let highestScorer = players [0][0];
    let highestRun = players[0][1];

    for(var i = 1; i < players.length; i++){

        if(highestRun < players[i][1]){
          
          highestRun = players[i][1]
          highestScorer = players[i][0];
        }
    }
    return highestScorer;
}

const playersInfo = [
    ["Sakib", 19],
    ["Musfique", 35],
    ["Asraful", 95],
    ["Mahmudullah", 45],
    ["Mashrafee", 13],
    ["Shourav", 115]
];

const result = highestRunScorer(playersInfo);

console.log(`The highest run scorer is ${result}`);

