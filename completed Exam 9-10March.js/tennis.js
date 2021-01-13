function tennis(input) {
    let countTournamentParticipate = +input[0];
    let initialPoints = +input[1];
    let index = 2;
    let phaseOfTournament = input[index++];
    let winCounter = 0;
    let aditionalPoints = 0;

    for (let i = 0; i < countTournamentParticipate; i++) {
        if (phaseOfTournament === `W`) {
            aditionalPoints += 2000;
            winCounter++;
        } else if (phaseOfTournament === `F`) {
            aditionalPoints += 1200;
        } else if (phaseOfTournament === `SF`) {
            aditionalPoints += 720;
        }
        phaseOfTournament = input[index++];
    }
    console.log(`Final points: ${initialPoints + aditionalPoints}`);
    console.log(`Average points: ${Math.floor(aditionalPoints / countTournamentParticipate)}`);
    console.log(`${(winCounter / countTournamentParticipate * 100).toFixed(2)}%`)
    
    
        

}
tennis([
    '5',  '1400', 'F',
    'SF', 'W',    'W',
    'SF', '',     ''
  ]
  );