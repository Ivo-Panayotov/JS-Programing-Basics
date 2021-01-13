function race(litresFuel, litresUsedInFirstLap, countLaps) {
    litresFuel = +litresFuel;
    litresUsedInFirstLap = +litresUsedInFirstLap;
    countLaps = +countLaps;
    let totalLitresUsed = 0;
    for (let i = 0; i < countLaps; i++) {
        totalLitresUsed += litresUsedInFirstLap - (0.1 );
        if (totalLitresUsed > litresFuel) {
            console.log(`You are out of fuel in round ${i}!`);
            break;
        } 
    }
    if (totalLitresUsed <= litresFuel) {
        console.log(`Congrats! You won the race!`);
        
    }

}
race(70, 6.5, 10);