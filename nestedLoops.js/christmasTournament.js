function christmas(input) {
    let durationOfTheTournament = +input.shift();
    let typeOfSport = input.shift();
    let totalSum = 0;
    let sumForTheDay = 0;
    let counterWin = 0;
    let counterLose = 0;
    let dayWonCounter = 0;
    let dayLostCounter = 0;
    for (let i = 1; i <= durationOfTheTournament; i++) {
        if (typeOfSport === `Finish`) {
            typeOfSport = input.shift();
        }
        sumForTheDay = 0;
        counterLose = 0;
        counterWin = 0;
        while (typeOfSport !== `Finish`) {
            let winOrLose = input.shift();

            if (winOrLose === `win`) {
                sumForTheDay += 20;
                counterWin++;
            } else {
                counterLose++;
            }
            typeOfSport = input.shift();
        }
        if (counterWin > counterLose) {
            sumForTheDay *= 1.1;
            dayWonCounter++;
        } else {
            dayLostCounter++;
        }
        totalSum += sumForTheDay;

    }
    if (dayWonCounter > dayLostCounter) {
        totalSum *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalSum.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalSum.toFixed(2)}`);

    }

}
christmas([3,
    `darts`,
    `lose`,
    `handball`,
    `lose`,
    `judo`,
    `win`,
    `Finish`,
    `snooker`,
    `lose`,
    `swimming`,
    `lose`,
    `squash`,
    `lose`,
    `table tennis`,
    `win`,
    `Finish`,
    `volleyball`,
    `win`,
    `basketball`,
    `win`,
    `Finish`
]
);