function care(input) {
    let kgFoodBought = +input[0];
    kgFoodBought *= 1000;
    let index = 1;
    let command = input[index++];
    let foodEaten = 0;
    while (command !== `Adopted`) {
        foodEaten += +command;

        command = input[index++];
    }
    if (foodEaten <= kgFoodBought) {
        console.log(`Food is enough! Leftovers: ${kgFoodBought - foodEaten} grams.`);
    } else {
        console.log(`Food is not enough. You need ${foodEaten - kgFoodBought} grams more.`)
        
    }
}
care([
    '4',   '130',
    '345', '400',
    '180', '230',
    '120', 'Adopted',
    '',    '']);