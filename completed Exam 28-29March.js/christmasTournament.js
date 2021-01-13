function solve(input) {
    let coundDaysOfTournament = +input[0];
    let index = 1;
    let totalMoney = 0;
    let dailyWins = 0;
    let dailyLoses = 0;

    for (let i = 1; i <= coundDaysOfTournament; i++) {
        let sport = input[index++];
        let dailyPoints = 0;
        let winCounter = 0;
        let loseCounter = 0;
        while (sport !== `Finish`) {
            let result = input[index++];
            if (result === `win`) {
                winCounter++;
                dailyPoints += 20;
            } else {
                loseCounter++;
            }
            sport = input[index++];
        }
        if (winCounter > loseCounter) {
            totalMoney += dailyPoints * 1.1;
            dailyWins++;
        } else {
            totalMoney += dailyPoints;
            dailyLoses++;
        }
    }
    if (dailyWins > dailyLoses) {
        totalMoney = totalMoney * 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
        
    }
}
solve([
    '2', 'volleyball',
    'win', 'football',
    'lose', 'basketball',
    'win', 'Finish',
    'golf', 'win',
    'tennis', 'win',
    'badminton', 'win',
    'Finish']);