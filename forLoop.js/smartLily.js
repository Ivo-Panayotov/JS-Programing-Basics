function lily(input) {
    let ageLily = Number(input.shift());
    let priceWashmachine = Number(input.shift());
    let priceSIngleToy = Number(input.shift());
    let sum = 0;

    for (let i = 1; i <= ageLily; i ++) {
        if (i % 2 === 0) {
            sum += i * 5 - 1;
        } else {
            sum += priceSIngleToy;
        }
    }
    if (sum >= priceWashmachine) {
        console.log(`Yes! ${(sum - priceWashmachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceWashmachine - sum).toFixed(2)}`);
        
    }

}
lily(`10`, `170`, `6`);