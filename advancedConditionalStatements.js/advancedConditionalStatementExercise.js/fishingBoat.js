function fishing(budget, season, countFishermans) {
    budget = +budget;
    countFishermans = +countFishermans;
    let rent = 0;
    if (season === `Summer` || season === `Autumn`) {
        rent = 4200;
    } else if (season === `Spring`) {
        rent = 3000;
    } else {
        rent = 2600;
    }
    if (countFishermans <= 6 && countFishermans >0) {
        rent = rent * 0.9;
    } else if (countFishermans <= 11 && countFishermans > 6) {
        rent = rent * 0.85;
    }else if (countFishermans > 11){
        rent = rent * 0.75;
    }
    if (countFishermans % 2 === 0 && season !== `Autumn`) {
        rent = rent * 0.95;
    }
    if (budget >= rent) {
        console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(rent - budget).toFixed(2)} leva.`);
        
    }
    
}
fishing(2000, `Winter`, 13);