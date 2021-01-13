function coins(input) {
    let amount = +input.shift();
    let countMinimumCoins = 0;
        while (amount >= 2) {
            amount-= 2;
            countMinimumCoins++;
            amount = +amount.toFixed(2);
        }
        while (amount >= 1) {
            amount--;
            countMinimumCoins++;
        }
        while (amount >= 0.5) {
            amount -= 0.5;
            countMinimumCoins++;
            amount = +amount.toFixed(2);
        }
        while (amount >= 0.2) {
            amount -= 0.2;
            countMinimumCoins++;
        }
        amount = +amount.toFixed(2);
        while (amount >= 0.1) {
            amount -= 0.1;
            countMinimumCoins++;
        }
        amount = +amount.toFixed(2);
        while (amount >= 0.05) {
            amount -= 0.05;
            countMinimumCoins++;
        }
        amount = +amount.toFixed(2);
        while (amount >= 0.02) {
            amount -= 0.02;
            countMinimumCoins++;
        }
        amount = +amount.toFixed(2);
        if (amount > 0) {
            countMinimumCoins++;
        }
        console.log(countMinimumCoins);
    }
coins([3]);
