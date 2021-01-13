function trip(input) {
    budget = Number(input.shift());
    numberOfDays = Number(input.shift());
    pricePerDay = Number(input.shift());
    percentExtraExpenses = Number(input.shift());
     if (numberOfDays <= 7) {
    let priceTrip = (numberOfDays * pricePerDay) + (budget * percentExtraExpenses / 100);
    if (budget >= priceTrip) {
        console.log(`Ivanovi will be left with ${(budget - priceTrip).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(priceTrip - budget).toFixed(2)} leva needed.`);
    }
    } else {
        let priceTrip = numberOfDays * (pricePerDay * 0.95) + (budget * percentExtraExpenses / 100);
        if (budget >= priceTrip) {
            console.log(`Ivanovi will be left with ${(budget - priceTrip).toFixed(2)} leva after vacation.`);
        } else {
            console.log(`${(priceTrip - budget).toFixed(2)} leva needed.`);
        }
    }
}
trip([800.5, 8, 100, 2])