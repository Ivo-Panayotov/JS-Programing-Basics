function darts(input) {
    nameOfPlayer = input[0];
    let index = 1;
    let currentPoints = 301;
    let field = input[index++];
    let pointsFromTurn = +input[index++];
    let counterShots = 0;
    let lastResult = 0;
    let unsuccessfullShots = 0;

    while (field !== `Retire`) {
        lastResult = currentPoints;
        if (field === `Triple`) {
            currentPoints -= pointsFromTurn * 3;
        } else if (field === `Double`) {
            currentPoints -= pointsFromTurn * 2;
        } else {
            currentPoints -= pointsFromTurn;
        }
        if (currentPoints < 0) {
            currentPoints = lastResult;
            unsuccessfullShots++;
        } else if (currentPoints >= 0) {
            counterShots++;
        }
        if (currentPoints === 0){
            break;
        }
        field = input[index++];
        pointsFromTurn = +input[index++];
    }
    if (currentPoints === 0) {
        console.log(`${nameOfPlayer} won the leg with ${counterShots} shots.`)
    } else {
        console.log(`${nameOfPlayer} retired after ${unsuccessfullShots} unsuccessful shots.`)
        
    }
}
darts([
    'Stephen Bunting', 'Triple',
    '20',              'Triple',
    '20',              'Triple',
    '20',              'Triple',
    '20',              'Triple',
    '20',              'Triple',
    '20',              'Double',
    '7',               'Single',
    '12',              'Double',
    '1',               'Single',
    '1',               ''
  ]
  
  );