function eggsBattle(input) {
    let countEggsPlayer1 = +input[0];
    let countEggsPlayer2 = +input[1];
    let index = 2;
    let command = input[index++];
    let outOfEggs = false;
    while (command !== `End of battle`) {
        let victor = command;
        if (victor === `one`) {
            countEggsPlayer2--;
        } else {
            countEggsPlayer1--;
        }
        if (countEggsPlayer2 === 0 || countEggsPlayer1 === 0) {
            outOfEggs = true;
            break;
        }
        command = input[index++];
    }
    if (outOfEggs) {
        if (countEggsPlayer2 === 0) {
            console.log(`Player two is out of eggs. Player one has ${countEggsPlayer1} eggs left.`);
            
        } else {
            console.log(`Player one is out of eggs. Player two has ${countEggsPlayer2} eggs left.`);
            
        }
    } else {
        console.log(`Player one has ${countEggsPlayer1} eggs left.`);
        console.log(`Player two has ${countEggsPlayer2} eggs left.`);
        
    }

}
eggsBattle([
    '5',
    '4',
    'one',
    'two',
    'one',
    'two',
    'two',
    'End of battle',
    '',
    '',
    ''
  ]);