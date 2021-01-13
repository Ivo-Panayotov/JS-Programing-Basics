function bakery(input) {
    let priceFlourPerKg = input[0];
    let kgFlour = input[1];
    let kgSugar = input[2];
    let countEggs = input[3];
    let countYeast = input[4];
    let priceSugarPerKg = 0.75 * priceFlourPerKg;
    let priceEggsPerKg = 1.1 * priceFlourPerKg;
    let priceYeastPerKg = priceSugarPerKg * 0.2;
    console.log(`${(priceSugarPerKg * kgSugar + priceYeastPerKg * countYeast + kgFlour * priceFlourPerKg + countEggs * priceEggsPerKg).toFixed(2)}`)
    
}
bakery([50, 10, 3.5, 6, 1]);