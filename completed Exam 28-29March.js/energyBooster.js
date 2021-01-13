function booster(input) {
    let fruit = input[0];
    let size = input[1];
    let countOrders = input[2];
    let price = 0;
    switch(fruit) {
        case `Watermelon`:
            if (size === `small`) {
                price = 2 * 56 * countOrders;
            } else {
                price = 5 * 28.7 * countOrders;
            }
            break;
            case `Mango`:
            if (size === `small`) {
                price = 2 * 36.66 * countOrders;
            } else {
                price = 5 * 19.6 * countOrders;
            }
            break;
            case `Pineapple`:
            if (size === `small`) {
                price = 2 * 42.1 * countOrders;
            } else {
                price = 5 * 24.8 * countOrders;
            }
            break;
            case `Raspberry`:
            if (size === `small`) {
                price = 2 * 20 * countOrders;
            } else {
                price = 5 * 15.2 * countOrders;
            }
            break;
    }
    if (price > 1000) {
        price *= 0.5;
    } else if (price >= 400) {
        price *= 0.85;
    }
    console.log(`${price.toFixed(2)} lv.`);
    
}
booster([ 'Watermelon', 'big', '4' ]);