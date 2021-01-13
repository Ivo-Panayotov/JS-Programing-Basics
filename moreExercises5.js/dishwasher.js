function dishwasher (input) {
    let countBottles = +input.shift();
    let quantityOfDetergent = countBottles * 0.750;
    let counter = 0;
    let countPlatesCleaned = 0;
    let countPotsCleaned = 0;
    let countDishes = input.shift();
    while (countDishes !== `End`) {
        counter++;
        countDishes = +countDishes;
        if (counter % 3 === 0) {
            countPotsCleaned += countDishes;
            quantityOfDetergent -= countDishes * 0.015;
        } else {
            countPlatesCleaned+= countDishes;
            quantityOfDetergent -= countDishes * 0.005;
        }
        if (quantityOfDetergent < 0) {
            break;
        }
        countDishes = input.shift();
    }
    if (quantityOfDetergent >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${countPlatesCleaned} dishes and ${countPotsCleaned} pots were washed.`);
        console.log(`Leftover detergent ${(quantityOfDetergent * 1000).toFixed(0)} ml.`)
        
    } else {
        console.log(`Not enough detergent, ${Math.abs(quantityOfDetergent * 1000).toFixed(0)} ml. more necessary!`)
        
    }
}
dishwasher([1, 10, 15, 10, 12, 13, 30]);