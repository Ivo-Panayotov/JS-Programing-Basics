function fitness(input) {
    let countVisitors = input[0];
    let backCounter = 0;
    let breastCounter = 0;
    let legsCounter = 0;
    let absCounter = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    let peopleForTraining = 0;
    let peopleForProtein = 0;
    let index = 1
    let command = input[index++];

    for (let i = 0; i < countVisitors; i++) {
        switch (command) {
            case `Back`:
                backCounter++;
                peopleForTraining++;
                break;
            case `Chest`:
                breastCounter++;
                peopleForTraining++;
                break;
            case `Legs`:
                legsCounter++;
                peopleForTraining++;
                break;
            case `Abs`:
                absCounter++;
                peopleForTraining++;
                break;
            case `Protein shake`:
                proteinShake++;
                peopleForProtein++;
                break;
            case `Protein bar`:
                proteinBar++;
                peopleForProtein++;
                break;
        }
        command = input[index++];
    }
      
    console.log(`${backCounter} - back`);
    console.log(`${breastCounter} - chest`);
    console.log(`${legsCounter} - legs`);
    console.log(`${absCounter} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${(peopleForTraining / countVisitors * 100).toFixed(2)}% - work out`);
    console.log(`${(peopleForProtein / countVisitors * 100).toFixed(2)}% - protein`);

}
fitness([
    '10', 'Back',
    'Chest', 'Legs',
    'Abs', 'Protein shake',
    'Protein bar', 'Protein shake',
    'Protein bar', 'Legs',
    'Abs', ''
]
);