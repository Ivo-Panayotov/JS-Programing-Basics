function solve(countDaysOff) {
    countDaysOff = Number(countDaysOff);
    let year = 365;
    let norm = 30000;
    let workingDaysPlay = (year - countDaysOff) * 63;
    let daysOffPlay = countDaysOff * 127;
    let totalPlay = workingDaysPlay + daysOffPlay;
    if (totalPlay > norm) {
        console.log(`Tom will run away`);
        let hoursPlus = Math.trunc((totalPlay - norm) / 60);
        let minutesPlus = Math.trunc((totalPlay - norm) % 60);
        console.log(`${hoursPlus} hours and ${minutesPlus} minutes more for play`);
    } else {
        console.log(`Tom sleeps well`);
        let hoursPlus = Math.trunc((norm - totalPlay) / 60);
        let minutesPlus = Math.trunc((norm - totalPlay) % 60);
        console.log(`${hoursPlus} hours and ${minutesPlus} minutes less for play`);
    }

}
solve(20);