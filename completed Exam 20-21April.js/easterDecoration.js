function decoration(input) {
    let countClients = input[0];
    let index = 1;
    let total = 0;

    for (let i = 1; i <= countClients; i++) {
        counterItemsBought = 0;
        let currentAmount = 0;
        let command = input[index++];
        while (command !== `Finish`) {
            counterItemsBought++;
            if (command === `basket`) {
                currentAmount += 1.5;
            } else if(command === `wreath`) {
                currentAmount += 3.8;
            }  else if (command === `chocolate bunny`) {
                currentAmount += 7;    
            }
            command = input[index++];
        }
        if (counterItemsBought % 2 === 0) {
            currentAmount *= 0.8;
        }
        total += currentAmount;
        console.log(`You purchased ${counterItemsBought} items for ${currentAmount.toFixed(2)} leva.`);
    }
    console.log(`Average bill per client is: ${(total / countClients).toFixed(2)} leva.`);
}
decoration([
    '2',
    'basket',
    'wreath',
    'chocolate bunny',
    'Finish',
    'wreath',
    'chocolate bunny',
    'Finish'
  ]
  );