function basketball(input) {
    let index = 0;
    let tournamentName = input[index++];
    let countGames = input[index++];
    let winCounter = 0;
    let loseCounter = 0;
    let totalCounter = 0;
    while (tournamentName !== 'End of tournaments' ) {
        countGames = +countGames;
        let counter = 1;
        for (let i = 1; i <= countGames; i++) {
            totalCounter++;
            let pointsDesi = input[index++];
            let pointsOtherTeam = input[index++];
            if (pointsDesi > pointsOtherTeam) {
                winCounter++;
                console.log(`Game ${counter} of tournament ${tournamentName}: win with ${pointsDesi - pointsOtherTeam} points.`);
            } else {
                loseCounter++;
                console.log(`Game ${counter} of tournament ${tournamentName}: lost with ${pointsOtherTeam - pointsDesi} points.`);
            }
            counter++;
        }
    tournamentName = input[index++];
    countGames = input[index++];
    }
    console.log(`${(winCounter / totalCounter * 100).toFixed(2)}% matches win`);
    console.log(`${(loseCounter / totalCounter * 100).toFixed(2)}% matches lost`);
    

}
basketball(['Dunkers', '2', '75', '65', '56', '73', 'Fire Girls', '3', '67', '34', '83', '98', '66', '45', 'End of tournaments', '']);