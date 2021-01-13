function veterinar(input) {
    let countDays = input[0];
    let hoursPerDay = input[1];
    let evenHour = 0;
    let evenDay = 0;
    let oddDay = 0;
    let oddHour = 0;
    let totalSum = 0;

    for (let i = 1; i <= countDays; i++) {
        let sum = 0;
        for (j = 1; j <= hoursPerDay; j++) {
            if (i % 2 === 0 && j % 2 === 1) {
                sum += 2.5;
            } else if (i % 2 === 1 && j % 2 === 0) {
                sum += 1.25;
            } else {
                sum += 1;
            }
        }
        console.log(`Day: ${i} - ${sum.toFixed(2)} leva`);
        totalSum += sum;
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`)
    
}
veterinar([ '2', '5' ]);