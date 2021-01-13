function happyCat(input) {
let countDays = Number(input[0]);
let countHoursPerDay = Number(input[1]);
let total = 0;
for (let i = 1; i <= countDays; i++) {
    let amount = 0;
    for (let j = 1; j <= countHoursPerDay; j++) {
        if (i % 2 === 0 && j % 2 === 1) {
            amount += 2.5;
        } else if(i % 2 === 1 && j % 2 === 0) {
            amount += 1.25;
        } else {
            amount += 1;
        }
    }
    console.log(`Day: ${i} - ${amount.toFixed(2)} leva`);
    total += amount;
    
}
console.log(`Total: ${total.toFixed(2)} leva`);

}
happyCat([2, 5]);