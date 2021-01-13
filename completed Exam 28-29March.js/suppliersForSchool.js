function supplies(input) {
    let countPens = +input[0];
    let countMarkers = +input[1];
    let countLitresCleaningMaterial = +input[2];
    let percentDiscount = +input[3];
    let pricePens = countPens * 5.8;
    let priceMarkers = countMarkers * 7.2;
    let priceCleaningMaterial = 1.2 * countLitresCleaningMaterial;
    let total = priceCleaningMaterial + priceMarkers + pricePens;
    let discount = total * percentDiscount / 100;
    console.log((total - discount).toFixed(3));
    
}
supplies([ '2', '3', '2.5', '25' ]);