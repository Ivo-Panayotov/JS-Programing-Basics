function shop(input) {
    let budget = input[0];
    let index = 1;
    let nameOfProduct = input[index++];
    let priceOfProduct = +input[index++];
    let price = 0;
    let counter = 0;

    // price of equipment if every third product half price
    
    while (nameOfProduct !== `Stop`) {
        counter++;
        if (counter % 3 === 0) {
            priceOfProduct *= 0.5;
        }
        price += priceOfProduct;
        if (price > budget) {
            break;
        }
    nameOfProduct = input[index++];
    priceOfProduct = +input[index++];
    }
    if (nameOfProduct === `Stop`) {
        console.log(`You bought ${counter} products for ${price.toFixed(2)} leva.`);
    } else {
        console.log(`You don't have enough money!`);
        console.log(`You need ${(price - budget).toFixed(2)} leva!`);
        
    }

}
shop([ '153.20', 'Backpack', '25.20', 'Shoes', '54', 'Sunglasses', '30', 'Stop']);