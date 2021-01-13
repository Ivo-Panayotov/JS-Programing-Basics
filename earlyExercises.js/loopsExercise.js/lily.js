function solve(yearsOfLily, priceWashmachine, priceToy) {
    yearsOfLily = Number(yearsOfLily);
    priceWashmachine = Number(priceWashmachine);
    priceToy = Number(priceToy);
    let moneyOfLily = 0;
    let giftsOfLily = 0;
    let totalMoney = 0;
    for (let i = 1; i <= yearsOfLily; i++) {
        if (i % 2 === 0) {
            moneyOfLily += (i * 5) - 1;
        } else {
            giftsOfLily += priceToy; 
        }
    }
    totalMoney = moneyOfLily + giftsOfLily; 
    if (totalMoney >= priceWashmachine) {
        console.log(`Yes! ${(totalMoney - priceWashmachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceWashmachine - totalMoney).toFixed(2)}`);
    }

}
solve(10,170, 6);