function solve(input) {
    let monthsIncluded = Number(input.shift());
    let electricity = Number(input.shift());
    let water = 0;
    let internet = 0;
    let others = 0;
    let average = 0;
    let amountElectricity = 0;

    for (let i = 1; i <= monthsIncluded; i++) {
        water += 20;
        internet += 15;
        others += (20 + 15 + electricity) * 1.2;
        amountElectricity += electricity;
        electricity = Number(input.shift());
        average = water + internet + amountElectricity + others;
    }
  
    console.log(`Electricity: ${amountElectricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${(average / monthsIncluded).toFixed(2)} lv`);
    
}
solve([5, 68.63, 89.25, 132.53, 93.53, 63.22]);