let playerScore = 3;
function checkScoreStatus() {
    if (playerScore % 2 === 0) {
        console.log("Player score is even.");
    } else {
        console.log("Player score is odd.");
    }
}
checkScoreStatus();
playerScore = 4;
checkScoreStatus();
