function shop(input) {
    let amountGamesSold = +input.shift();
    let nameOfTheGame = input.shift();
    let countHearthstone = 0;
    let countFournite = 0;
    let countOverwatch = 0;
    let countOthers = 0;
    for (let i = 1; i <= amountGamesSold; i ++) {
        if (nameOfTheGame === `Hearthstone`) {
            countHearthstone++;
        } else if (nameOfTheGame === `Fornite`) {
            countFournite++;
        } else if (nameOfTheGame === `Overwatch`) {
            countOverwatch++;
        } else {
            countOthers++;
        }
        nameOfTheGame = input.shift();
    }
    console.log(`Hearthstone - ${(countHearthstone / amountGamesSold * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(countFournite / amountGamesSold * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(countOverwatch / amountGamesSold * 100).toFixed(2)}%`);
    console.log(`Others - ${(countOthers / amountGamesSold * 100).toFixed(2)}%`);
}
shop([ '4', 'Hearthstone', 'Fornite', 'Overwatch', 'Counter-Strike' ]);