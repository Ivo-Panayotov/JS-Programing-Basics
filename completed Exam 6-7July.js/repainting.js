function paint(input) {
    neededQuantityNylon = Number(input.shift());
    neededQuantityPaint = Number(input.shift());
    neededQuantityThinner = Number(input.shift());
    hoursWorkNeeded = Number(input.shift());

    let priceNylonPerSqm = 1.5;
    let pricePaintPerLtr = 14.5;
    let priceThinnerPerLtr = 5;
    let totalPaint = neededQuantityPaint * 1.1 * pricePaintPerLtr;
    let totalNylon = (neededQuantityNylon + 2) * priceNylonPerSqm;
    let totalThinner = neededQuantityThinner * priceThinnerPerLtr;
    let totalSum = (totalNylon + totalPaint + totalThinner + 0.4);
    let totalHours = totalSum * 0.3 * hoursWorkNeeded;

    console.log(`Total expenses: ${(totalSum + totalHours).toFixed(2)} lv.`);
}
 paint([10, 11, 4, 8]);