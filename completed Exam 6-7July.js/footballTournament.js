function football(input) {
    let nameOfTeam = input.shift();
    let countGamesPlayed = +input.shift();
    let result = input.shift();
    let counterWin = 0;
    let counterLost = 0;
    let counterDraw = 0;

    for (let i = 1; i <= countGamesPlayed; i++) {
        if (result === `W`) {
            counterWin++;
        } else if (result === `D`) {
            counterDraw++;
        } else {
            counterLost++;
        }
        result = input.shift();
    }
    let total = counterWin * 3 + counterDraw;
    if (countGamesPlayed === 0) {
        console.log(`${nameOfTeam} hasn't played any games during this season.`);
    } else {
        console.log(`${nameOfTeam} has won ${total} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${counterWin}`);
        console.log(`## D: ${counterDraw}`);
        console.log(`## L: ${counterLost}`);
        console.log(`Win rate: ${(counterWin / countGamesPlayed * 100).toFixed(2)}%`) 
    }
}
football([
    'Liverpool', '10',
    'W',         'D',
    'D',         'W',
    'L',         'W',
    'D',         'D',
    'W',         'W'
  ]
  );