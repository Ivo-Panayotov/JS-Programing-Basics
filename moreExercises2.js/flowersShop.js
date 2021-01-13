function flower(countMagnolia, countZiumbiul, countRoses, countCactus, Giftprice) {
    countCactus = +countCactus;
    countMagnolia = +countMagnolia;
    countRoses = +countRoses;
    countZiumbiul = +countZiumbiul;
    Giftprice = +Giftprice;
    let magnolia = countMagnolia * 3.25;
    let ziumbiul = countZiumbiul * 4;
    let rose = countRoses * 3.5;
    let cactus = 8 * countCactus;
    let total = (magnolia + rose + ziumbiul + cactus) * 0.95;
    if (total >= Giftprice) {
        console.log(`She is left with ${Math.floor(total - Giftprice)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(Giftprice - total)} leva.`);
        
    }

}
flower(2, 3, 5, 1, 50);