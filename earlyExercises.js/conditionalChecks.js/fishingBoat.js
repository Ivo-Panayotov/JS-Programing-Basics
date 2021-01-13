function boatTrip(budget, season, numberFishermans) {
    budget = Number(budget);
    numberFishermans =Number(numberFishermans);
    let shipRent = 0;
    
    if (season == "Spring") {
         shipRent = 3000;
        if (numberFishermans <=6) {
             shipRent = shipRent * 0.9;
        } else if (numberFishermans <= 11 && numberFishermans > 6) {
             shipRent = shipRent * 0.85
        } else if (numberFishermans > 11) {
             shipRent = shipRent * 0.75;
        }
    } else if (season == "Summer" || season == "Autumn") {
         shipRent = 4200;
        if (numberFishermans <=6) {
             shipRent = shipRent * 0.9;
        } else if (numberFishermans <= 11 && numberFishermans > 6) {
             shipRent = shipRent * 0.85
        } else if (numberFishermans > 11) {
             shipRent = shipRent * 0.75;
        }
    } else if (season == "Winter") {
         shipRent = 2600;
        if (numberFishermans <=6) {
             shipRent = shipRent * 0.9;
        } else if (numberFishermans <= 11 && numberFishermans > 6) {
             shipRent = shipRent * 0.85
        } else if (numberFishermans > 11) {
             shipRent = shipRent * 0.75;
        }
    }
    if (numberFishermans % 2 == 0 && season != "Autumn" ) {
         shipRent = shipRent * 0.95;
    }
    if (budget >= shipRent) { 
        let moneyLeft = (budget - shipRent).toFixed(2);
    console.log(`Yes! You have ${moneyLeft} leva left.`);
    } else {
        let moneyNeeded = (shipRent - budget).toFixed(2);
        console.log(`Not enough money! You need ${moneyNeeded} leva.`); 
    }
}
boatTrip(3000, "Summer", 11);