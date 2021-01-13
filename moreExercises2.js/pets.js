function pets(countDays, KGFoodLeft, dogFoodPerDayKG, catFoodPerDayKG, turtleFoodPerDayGrams ) {
    countDays = +countDays;
    KGFoodLeft = +KGFoodLeft;
    dogFoodPerDayKG = +dogFoodPerDayKG;
    catFoodPerDayKG = +catFoodPerDayKG;
    turtleFoodPerDayGrams = +turtleFoodPerDayGrams;
    let dog = dogFoodPerDayKG * countDays;
    let cat = catFoodPerDayKG * countDays;
    let turtle = (turtleFoodPerDayGrams / 1000) * countDays;
    let total = cat + dog + turtle;
    if (KGFoodLeft >= total) {
        console.log(`${Math.floor(KGFoodLeft - total)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(total - KGFoodLeft)} more kilos of food are needed.`);
        
    }

}
pets(2, 10, 1, 1, 1200)