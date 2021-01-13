function logistic(input) {
    let countCragoForTransportation = Number(input.shift());
    let countCargoTrain = 0;
    let countCargoTruck = 0;
    let countCargoBus = 0;
    let price = 0;
    let total = 0;
    let weight = Number(input.shift());
    for (let i = 1; i <= countCragoForTransportation; i ++) {
        total += weight;

        if (weight <= 3) {
            countCargoBus += weight;
            price += (200 * weight)
        } else if (weight <= 11) {
            countCargoTruck += weight;
            price += (weight * 175);
        } else {
            countCargoTrain += weight;
            price += (weight * 120);
        }
        weight = Number(input.shift());
    }
    console.log((price / total).toFixed(2));
    console.log(`${(countCargoBus / total * 100).toFixed(2)}%`);
    console.log(`${(countCargoTruck / total * 100).toFixed(2)}%`);
    console.log(`${(countCargoTrain / total * 100).toFixed(2)}%`);
}
logistic([4, 1, 5, 16, 3]);
