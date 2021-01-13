function club(input) {
    let wantedAmount = Number(input.shift());
    let income = 0;

    while (income < wantedAmount) {
        let name = input.shift();
        if (name === `Party!`) {
            console.log(`We need ${(wantedAmount - income).toFixed(2)} leva more.`);
            break;
        } 
        let priceDrink = name.length;
       
        let amountCocktails = input.shift();

        let orderAmount = amountCocktails * priceDrink;
        if (orderAmount % 2 == 1) {
            orderAmount = orderAmount * 0.75;
        }
        income += orderAmount;
    }
    if (income >= wantedAmount) {
        console.log(`Target acquired.`);
        
    }
    console.log(`Club income - ${income.toFixed(2)} leva.`)
}
club([`500`, `Bellini`, `6`, `Bamboo`, `7`, `Party!`]);