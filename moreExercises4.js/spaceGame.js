function game(input) {
    let countMovesOfTheGame = Number(input.shift());
    let result = 0;
    let zeroToNine = 0;
    let tenToNineteen = 0;
    let twentyToTwentynine = 0;
    let thirtyToThirtynine = 0;
    let fourtyToFifty = 0;
    let invalidNumbers = 0;
    let currentNumber = Number(input.shift());
    for (let i = 1; i <= countMovesOfTheGame; i ++) {
        if (currentNumber <= 9 && currentNumber >= 0) {
            zeroToNine ++;
            result += (currentNumber * 0.2);
        } else if (currentNumber <= 19 && currentNumber >= 10) {
            tenToNineteen ++;
            result += (currentNumber * 0.3);
        } else if (currentNumber <= 29 && currentNumber >= 20) {
            twentyToTwentynine ++;
            result += (currentNumber * 0.4);
        } else if (currentNumber <= 39 && currentNumber >= 30) {
            thirtyToThirtynine ++;
            result += 50;
        } else if (currentNumber <= 50 && currentNumber >= 40) {
            fourtyToFifty ++;
            result += 100;
        } else {
            invalidNumbers ++;
            result = result / 2;
        }
        currentNumber = Number(input.shift());
    }
    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${(zeroToNine / countMovesOfTheGame * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${( tenToNineteen / countMovesOfTheGame * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(twentyToTwentynine / countMovesOfTheGame * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(thirtyToThirtynine / countMovesOfTheGame * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(fourtyToFifty / countMovesOfTheGame * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalidNumbers / countMovesOfTheGame * 100).toFixed(2)}%`);
}
game([10, 43, 57, -12, 23, 12, 0, 50, 40, 30 , 20]);