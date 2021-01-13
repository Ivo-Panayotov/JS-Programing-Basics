function solve(budget,statistNumber,clothesPerStatist) {
    budget = Number(budget);
    statistNumber = Number(statistNumber);
    clothesPerStatist = Number(clothesPerStatist);
    let decor = budget * 0.1;
    let fullAmountNeeded = statistNumber * clothesPerStatist + decor;
    if (statistNumber > 150) {
        clothesPerStatist = clothesPerStatist * 0.9;
        fullAmountNeeded = statistNumber * clothesPerStatist + decor;
    }
    if (budget < fullAmountNeeded) {
        let moneyNeeded = fullAmountNeeded - budget;
        console.log("Not enough money!");
        console.log("Wingard needs " + moneyNeeded.toFixed(2) + " leva more.");
    } else {
        moneyNeeded = budget - fullAmountNeeded;
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${moneyNeeded.toFixed(2)} leva left.`)

    }

}
solve(20000,120,55.5);