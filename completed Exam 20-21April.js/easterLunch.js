function easter(input) {
    let countKozunak = input[0];
    let countEggs = input[1];
    let kgCookies = input[2];
    let priceKozunak = countKozunak * 3.2;
    let priceEggs = countEggs * 4.35;
    let priceCookies = 5.4 * kgCookies;
    let eggPaint = countEggs * 1.8;
    console.log(`${(priceCookies + priceEggs + priceKozunak + eggPaint).toFixed(2)}`);
    

}
easter([3, 2, 3]);