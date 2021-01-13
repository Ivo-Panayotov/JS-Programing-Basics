function coffee(input) {
    typeOfDrink = input.shift();
    typeOfSugar = input.shift();
    countDrinks = Number(input.shift());
    let price;
    if (typeOfDrink === `Espresso` && typeOfSugar === `Without`) {
        price = 0.9;
    } else if (typeOfDrink === `Espresso` && typeOfSugar === `Normal`) {
        price = 1;
    } else if (typeOfDrink === `Espresso` && typeOfSugar === `Extra`) {
        price = 1.2;
    } else if (typeOfDrink === `Cappuccino` && typeOfSugar === `Without`) {
        price = 1;
    } else if (typeOfDrink === `Cappuccino` && typeOfSugar === `Normal`) {
        price = 1.2;
    } else if (typeOfDrink === `Cappuccino` && typeOfSugar === `Extra`) {
        price = 1.6;
    } else if (typeOfDrink === `Tea` && typeOfSugar === `Without`) {
        price = 0.5;
    } else if (typeOfDrink === `Tea` && typeOfSugar === `Normal`) {
        price = 0.6;
    } else if (typeOfDrink === `Tea` && typeOfSugar === `Extra`) {
        price = 0.7;
    }
    let finalAmount = price * countDrinks;
    if (typeOfDrink === "Espresso" && countDrinks >= 5) {
        finalAmount = finalAmount * 0.75;
    } 
    if (typeOfSugar === `Without`) {
        finalAmount = finalAmount * 0.65;
    }
    if (finalAmount > 15) {
        finalAmount = finalAmount * 0.8;
    }

    console.log(`You bought ${countDrinks} cups of ${typeOfDrink} for ${finalAmount.toFixed(2)} lv.`);
}
coffee([`Espresso`, `Without`, `10`]);