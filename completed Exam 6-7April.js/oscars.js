function oscars(input) {
    let rent = Number(input.shift());
    let priceStatuettes = 0.7 * rent;
    let priceCatering = 0.85 * priceStatuettes;
    let priceMusic = 0.5 * priceCatering;
    console.log((rent + priceStatuettes + priceMusic + priceCatering).toFixed(2));
    
}
oscars([3500]);