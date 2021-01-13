function oscar(input) {
    let nameOfActorNominated = input.shift();
    let academyPoints = +input.shift();
    let countOfJury = +input.shift();
    let totalPoints = academyPoints;

    for (let i = 1; i <= countOfJury; i++) {
        let nameOfAppraisal = input.shift();
        let gradeOfAppraisal = +input.shift();
        totalPoints += (nameOfAppraisal.length * gradeOfAppraisal / 2);
        if (totalPoints > 1250.5) {
            break;
        } 
    }
    if (totalPoints > 1250.5) {
        console.log(`Congratulations, ${nameOfActorNominated} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${nameOfActorNominated} you need ${(1250.5 - totalPoints).toFixed(1)} more!`)
        
    }

}
oscar([
    'Zahari Baharov',
    '205',
    '4',
    'Johnny Depp',
    '45',
    'Will Smith',
    '29',
    'Jet Lee',
    '10',
    'Matthew Mcconaughey',
    '39'
  ]
  );