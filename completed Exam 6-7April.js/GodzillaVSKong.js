function solve(input) {
    let budget = Number(input.shift());
    let countStatists = Number(input.shift());
    let priceClothesPerPerson = Number(input.shift());
    let decor = 0.1 * budget;
    if (countStatists > 150) {
        priceClothesPerPerson = 0.9 * priceClothesPerPerson;
    }
    let moneyDecor = countStatists * priceClothesPerPerson + decor;
    let difference = Math.abs(budget - moneyDecor).toFixed(2);
    
    if (moneyDecor > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${difference} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${difference} leva left.`);
        
    }

}
solve([15437.62, 186, 57.99]);