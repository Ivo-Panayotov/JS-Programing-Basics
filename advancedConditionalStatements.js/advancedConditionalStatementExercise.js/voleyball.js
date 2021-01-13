function voleyball(typeOfYear, countHolidays, countWeekendsToHometown) {
    let p = Number(countHolidays);
    let h = Number(countWeekendsToHometown);
    let year = 48;
    let voleyballtime = 0;
    
    if (typeOfYear === `normal`) {
        voleyballtime = (48 - h) * 3/4 + (p * 2/3) + h; 
    } else {
        voleyballtime = (48 - h) * 3/4 + (p * 2/3) + h; 
        voleyballtime = voleyballtime * 1.15;
    }

    console.log(Math.floor(voleyballtime));
    
}
voleyball(`leap`, 2, 3);