function paintingEggs(input) {
    let eggsSize = input[0];
    let eggsColor = input[1];
    let countBatches = input[2];
    let price = 0;
    if (eggsSize === `Large`) {
        switch (eggsColor) {
            case `Red`:
                price = 16;
                break;
                case `Green`:
                price = 12;
                break;
                case `Yellow`:
                price = 9;
                break;
        }
    } else if (eggsSize === `Medium`) {
        switch (eggsColor) {
            case `Red`:
                price = 13;
                break;
                case `Green`:
                price = 9;
                break;
                case `Yellow`:
                price = 7;
                break;
        }
    } else if (eggsSize === `Small`) {
        switch (eggsColor) {
            case `Red`:
                price = 9;
                break;
                case `Green`:
                price = 8;
                break;
                case `Yellow`:
                price = 5;
                break;
        }
    } 
    let finalPrice = price * countBatches;
    let manufactoringCosts = finalPrice * 0.35;
    console.log(`${(finalPrice - manufactoringCosts).toFixed(2)} leva.`);
    


}
paintingEggs(['Large', 'Red', '7']);