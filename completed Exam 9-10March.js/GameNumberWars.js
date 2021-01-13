function game(input) {
    let nameFirstPlayer = input[0];
    let nameSecondPlayer = input[1];
    let index = 2;
    let cardFirstPlayer = input[index++];
    let cardSecondPlayer = input[index++];
    let pointsFirstPlayer = 0;
    let pointsSecondPlayer = 0;
    let isTrue = false;

    while (cardFirstPlayer !== `End of game`) {
        cardSecondPlayer = +cardSecondPlayer;
        cardFirstPlayer = +cardFirstPlayer;
        if (cardFirstPlayer === cardSecondPlayer) {
            isTrue = true;
            cardFirstPlayer = +input[index++];
            cardSecondPlayer = +input[index++];
            break;
        }
        if (cardFirstPlayer > cardSecondPlayer) {
            pointsFirstPlayer += cardFirstPlayer - cardSecondPlayer;
        } else if (cardSecondPlayer > cardFirstPlayer) {
            pointsSecondPlayer += cardSecondPlayer - cardFirstPlayer;
        } 
        cardFirstPlayer = input[index++];
        cardSecondPlayer = input[index++];
       
    }
    
    if (isTrue === false) {
        console.log(`${nameFirstPlayer} has ${pointsFirstPlayer} points`);
        console.log(`${nameSecondPlayer} has ${pointsSecondPlayer} points`);
    } else {
        console.log(`Number wars!`);
        if (cardFirstPlayer > cardSecondPlayer) {
            console.log(`${nameFirstPlayer} is winner with ${pointsFirstPlayer} points`);        
        } else {
            console.log(`${nameSecondPlayer} is winner with ${pointsSecondPlayer} points`);
        }
    }

}
game([
    'Aleks', 'Georgi', '4',
    '5',     '3',      '2',
    '4',     '3',      '4',
    '4',     '5',      '2',
    '',      '',       ''
  ]
  
  );