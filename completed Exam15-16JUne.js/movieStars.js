function Stars(input) {
    let budget = +input.shift();
    let nameOfActor = input.shift();
    let moneyCounter = 0;
   
    while (nameOfActor !== `ACTION`) {
        if (nameOfActor.length > 15) {
            moneyCounter += (budget - moneyCounter) * 0.2;
            nameOfActor = input.shift();
            continue;
        }
        let salaryOfActor = +input.shift();
        moneyCounter += salaryOfActor;
        if (moneyCounter > budget) {
            break;
        }
        nameOfActor = input.shift();
        if (nameOfActor.length > 15) {
            moneyCounter += (budget - moneyCounter) * 0.2;
            nameOfActor = input.shift();
        }
    }
    if (budget >= moneyCounter) {
        console.log(`We are left with ${(budget - moneyCounter).toFixed(2)} leva.`);
    } else {
        console.log(`We need ${(moneyCounter - budget).toFixed(2)} leva for our actors.`);
    }
}
Stars([2100000,
    `Frederic Gustafsson I`,
    `Frederic Gustafsson II`,
    `Frederic Gustafsson III`,
    `Frederic Gustafsson IV`,
    `Frederic Gustafsson V`,
    `Frederic Gustafsson VI`,
    `Frederic Gustafsson VII`,
    `Frederic Gustafsson VIII`,
    `Frederic Gustafsson IX`,
    `Frederic Gustafsson X`,
    `Frederic Gustafsson XI`,
    `Frederic Gustafsson XII`,
    `Frederic Gustafsson XIII`,
    `Frederic Gustafsson XIV`,
    `Frederic Gustafsson XV`,
    `Frederic Gustafsson XVI`,
    `Frederic Gustafsson XVII`,
    `Frederic Gustafsson XVIII`,
    `Frederic Gustafsson XIX`,
    `Frederic Gustafsson XX`,
    `ACTION`

]);