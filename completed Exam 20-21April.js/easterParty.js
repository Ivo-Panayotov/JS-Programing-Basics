function easter(input) {
    let countGuests = input[0];
    let pricePerPerson = input[1];
    let budget = input[2];
    if (countGuests <= 15 && countGuests >= 10) {
        pricePerPerson *= 0.85;
    } else if (countGuests <= 20 && countGuests > 15) {
        pricePerPerson *= 0.8;
    } else if (countGuests > 20) {
        pricePerPerson *= 0.75;
    }
    let totalPrice = pricePerPerson * countGuests;
    let birthdayCake = budget * 0.1;
    if (budget >= (totalPrice + birthdayCake)) {
        console.log(`It is party time! ${(budget - (totalPrice + birthdayCake)).toFixed(2)} leva left.`); 
    } else {
        console.log(`No party! ${(totalPrice + birthdayCake - budget).toFixed(2)} leva needed.`);        
    }
}
easter([ '18', '30', '450', '', '' ]);