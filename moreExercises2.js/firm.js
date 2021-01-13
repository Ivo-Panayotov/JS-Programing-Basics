function firm(hoursNeeded, daysForTheProject, countWorkersExtraWork) {
    hoursNeeded = Number(hoursNeeded);
    daysForTheProject = Number(daysForTheProject);
    countWorkersExtraWork = Number(countWorkersExtraWork);
    let companyHours = daysForTheProject * 8;//hours in days
    companyHours = 0.9 * companyHours;//lerning
    let extraHours = countWorkersExtraWork * daysForTheProject * 2;
    let totalHours = Math.floor(extraHours + companyHours);
    if (hoursNeeded <= totalHours) {
        console.log(`Yes!${Math.floor(totalHours - hoursNeeded)} hours left.`);
    } else {
        console.log(`Not enough time!${Math.floor(hoursNeeded - totalHours)} hours needed.`);
        
    }


}
firm(90, 7, 3);