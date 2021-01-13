function shop(input) {
    let initialAmountEggs = +input[0];
    let index = 1;
    let command = input[index++];
    let eggsBought = 0;
    let lastAmountEggs = initialAmountEggs;
    let currentEggs = initialAmountEggs;
    let isTrue = false;
    while (command !== `Close`) {
        let counteggs = +input[index++];
        if (command === `Buy`) {
            eggsBought += counteggs;
            currentEggs -= counteggs;
        } else if (command === `Fill`) {
            currentEggs += counteggs;
        }
        if (currentEggs < 0) {
            isTrue = true;
            console.log(`Not enough eggs in store!`);
            console.log(`You can buy only ${lastAmountEggs}.`)
            break;
        }
        lastAmountEggs = currentEggs;
        command = input[index++];
    }    
    if (isTrue === false) {
        console.log(`Store is closed!`);
        console.log(`${eggsBought} eggs sold.`);
}
}
shop([
    '20', 'Fill',
    '30', 'Buy',
    '15', 'Buy',
    '20', 'Close'
]

);