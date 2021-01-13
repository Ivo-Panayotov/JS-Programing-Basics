function shopping(input) {
    budget = Number(input.shift());
    countVideocards = Number(input.shift());
    countProcessors = Number(input.shift());
    countRam = Number(input.shift());
    let priceVideocard = 250;
    let priceProcessor = countVideocards * priceVideocard * 0.35;
    let priceRam = countVideocards * priceVideocard * 0.1;
    let finalAmount = priceVideocard * countVideocards + priceRam * countRam + priceProcessor * countProcessors;
    if (countVideocards > countProcessors) {
        finalAmount = finalAmount * 0.85;
        if (budget >= finalAmount) {
            console.log(`You have ${(budget - finalAmount).toFixed(2)} leva left!`);
        } else {
            console.log(`Not enough money! You need ${(finalAmount - budget).toFixed(2)} leva more!`);
            
        }
        

    } else {
        if (budget >= finalAmount) {
            console.log(`You have ${(budget - finalAmount).toFixed(2)} leva left!`);
        } else {
            console.log(`Not enough money! You need ${(finalAmount - budget).toFixed(2)} leva more!`);
            
        }
    }

}
shopping([900, 2, 1, 3])