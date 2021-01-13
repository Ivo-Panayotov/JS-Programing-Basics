function solve(countChrysanthemum, countRoses, countTulips, season, holidayOrNot) {
    countChrysanthemum = +countChrysanthemum;
    countRoses = +countRoses;
    countTulips = +countTulips;
    let priceChrysanthemum = 0;
    let priceRoses = 0;
    let priceTulips = 0;
    if (season === `Spring` || season === `Summer`) {
        priceChrysanthemum = 2;
        priceRoses = 4.1;
        priceTulips = 2.5;
    } else if(season === `Autumn` || season === `Winter`) {
        priceChrysanthemum = 3.75;
        priceRoses = 4.5;
        priceTulips = 4.15;
    }
    if (holidayOrNot === `Y`) {
        priceTulips = priceTulips * 1.15;
        priceRoses = priceRoses * 1.15;
        priceChrysanthemum = priceChrysanthemum * 1.15;
    }
    let bouquet = priceChrysanthemum * countChrysanthemum + priceRoses * countRoses + priceTulips * countTulips;
    if (season === `Spring` && countTulips > 7) {
        bouquet = bouquet * 0.95;
    } else if (season === `Winter` && countRoses >= 10) {
        bouquet = bouquet * 0.9;
    }
    if ((countRoses + countTulips + countChrysanthemum) > 20) {
        bouquet = bouquet * 0.8;
    }
    bouquet = bouquet + 2;
    console.log(bouquet.toFixed(2));
}
solve(2, 4, 8, `Spring`, `Y`);