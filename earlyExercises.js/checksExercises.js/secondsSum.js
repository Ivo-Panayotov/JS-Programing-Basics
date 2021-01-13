function solve(startingHours, startingMinutes) {
    startingHours = Number(startingHours);
    startingMinutes = Number(startingMinutes); 

    let totalMinutesPlus = startingHours * 60 + startingMinutes + 15;
    let finalHours = Math.floor(totalMinutesPlus / 60);
    let finalMinutes = totalMinutesPlus % 60;
    if (finalHours > 23) {
        finalHours = 0;
    } 
    if (finalMinutes < 10) {
       console.log (`${finalHours}:0${finalMinutes}`)
        } else {
            console.log (`${finalHours}:${finalMinutes}`)  
        }

}
solve ("1","56")