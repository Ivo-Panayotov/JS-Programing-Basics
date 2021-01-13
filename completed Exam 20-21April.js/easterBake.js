function baking(input) {
    let packageOfSugar = 950;
    let packageOfFlour = 750;
    let countEasterBread = +input[0];
    let index = 1;
    let amountUsedSugar = +input[index++];
    let amountUsedFlour = +input[index++];
    let biggestAmountSugar = 0;
    let biggestAmountFlour = 0;
    let flourCollector = 0;
    let sugarCollector = 0;

    for (let i = 1; i <= countEasterBread; i++) {
        if (amountUsedFlour > biggestAmountFlour) {
            biggestAmountFlour = amountUsedFlour;
        }
        if (amountUsedSugar > biggestAmountSugar) {
            biggestAmountSugar = amountUsedSugar;
        }
        flourCollector += amountUsedFlour;
        sugarCollector += amountUsedSugar;
        amountUsedSugar = +input[index++];
        amountUsedFlour = +input[index++];
    }

    console.log(`Sugar: ${Math.ceil(sugarCollector / packageOfSugar)}`);
    console.log(`Flour: ${Math.ceil(flourCollector / packageOfFlour)}`);
    console.log(`Max used flour is ${biggestAmountFlour} grams, max used sugar is ${biggestAmountSugar} grams.`)
    
}
baking([
    '3', '400',
    '350', '250',
    '300', '450',
    '380', ''
]
);