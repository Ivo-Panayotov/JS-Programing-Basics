function pets(input) {
    let countdays = +input[0];
    let totalAmountFood = +input[1];
    let index = 2;
    let dogDailyEatenFood = +input[index++];
    let catDailyEatenFood = +input[index++];
    let biscuits = 0;
    let totalFoodEaten = 0;
    let dogAmount = 0;
    let catAmount = 0;
    for (let i = 1; i <= countdays; i++) {
        if (i % 3 === 0) {
            biscuits += ((dogDailyEatenFood + catDailyEatenFood) * 0.1);
        }
        totalFoodEaten += dogDailyEatenFood + catDailyEatenFood;
        dogAmount += dogDailyEatenFood;
        catAmount += catDailyEatenFood;
        dogDailyEatenFood = +input[index++];
        catDailyEatenFood = +input[index++];   
    }
    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${(totalFoodEaten / totalAmountFood * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(dogAmount / totalFoodEaten * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(catAmount / totalFoodEaten * 100).toFixed(2)}% eaten from the cat.`);

}
pets([
    '3',   '1000',
    '300', '20',
    '100', '30',
    '110', '40']);