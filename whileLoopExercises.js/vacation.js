function vacation(input) {
    let moneyNeeded = +input.shift();
    let moneyInThePocket = +input.shift();
    let count = 0;
    let minusCount = 0;
    let action;
    let amountPerAction = 0;
    while (moneyInThePocket < moneyNeeded) {
        action = input.shift();
        amountPerAction = +input.shift();
        count++;
        if (action === `save`) {
            minusCount = 0;
            moneyInThePocket += amountPerAction;
        } else if (action === `spend`) {
            minusCount++;
            if (minusCount >= 5) {
                break;
            }
            moneyInThePocket -= amountPerAction;
            if (moneyInThePocket < 0) {
                moneyInThePocket = 0;
            }
            
        }
    }
    if (moneyInThePocket >= moneyNeeded) {
        console.log(`You saved the money for ${count} days.`);
    } else {
        console.log(`You can't save the money.`);
        console.log(`${count}`);
    }


}
vacation([250, 150, `spend`, 50, `spend`, 50, `save`, 100, `save`, 100]);