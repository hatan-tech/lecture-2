let playerScore = 0;

function destroyAliens() {
  playerScore ++;
  console.log("Aliens destroyed! + 1 point");
}

function showScoreboard() {
    console.log("--------------------");
    console.log("Scoreboard");
    console.log(`CURRENT SCORE: ${playerScore}`);
    console.log("--------------------");
}

showScoreboard();
destroyAliens();
destroyAliens();
destroyAliens();
showScoreboard();