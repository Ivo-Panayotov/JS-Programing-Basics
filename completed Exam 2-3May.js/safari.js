function safari (input) {
    let priceFuelPerLiter = 2.1;
    let priceForGuide = 100;
    let budget = +input[0];
    let LitersNeeded = +input[1];
    let daySelected = input[2];
    let priceSafari = priceForGuide + priceFuelPerLiter * LitersNeeded;
    if (daySelected === `Saturday`) {
        priceSafari *= 0.9; 
    } else {
        priceSafari *= 0.8; 
    }
    if (budget >= priceSafari) {
        console.log(`Safari time! Money left: ${(budget - priceSafari).toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${(priceSafari - budget).toFixed(2)} lv.`);
        
    }


}
safari([ '1000', '10', 'Sunday', '' ]);