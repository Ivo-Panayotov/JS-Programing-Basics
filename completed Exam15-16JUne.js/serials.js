function serial(input) {
    let budget = input.shift();
    let serialCount = +input.shift();
    let nameOfSerial = input.shift();
    let priceOfSerial = +input.shift();
    let moneyForSerials = 0;
    for (let i = 1; i <= serialCount; i++) {
        switch (nameOfSerial) {
            case `Thrones` :
            priceOfSerial *= 0.5;
            break;
            case `Lucifer` :
                priceOfSerial *= 0.6;
                break;
                case `Protector` :
                    priceOfSerial *= 0.7;
                    break;
                    case `TotalDrama` :
                        priceOfSerial *= 0.8;
                        break;
                        case `Area` :
                            priceOfSerial *= 0.9;
                            break;
        }
        moneyForSerials += priceOfSerial;
        nameOfSerial = input.shift();
        priceOfSerial = +input.shift();
    } 
    if (budget >= moneyForSerials) {
        console.log(`You bought all the series and left with ${(budget - moneyForSerials).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${(moneyForSerials - budget).toFixed(2)} lv. more to buy the series!`)
    }

}
serial([ 25,
    6,
    `Teen Wolf`,
    8,
    `Protector`,
    5,
    `TotalDrama`,
    5,
    `Area`,
    4,
    `Thrones`,
    5,
    `Lucifer`,
    9 ]);