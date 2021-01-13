function vacation(budget, season) {
    budget = +budget;
    let price = 0;
    let location;
    let accomodation;
    if (budget <= 1000) {
        accomodation = `Camp`;
        if (season === `Summer`) {
            location = `Alaska`;
            price = budget * 0.65;
        } else if (season === `Winter`) {
            location = `Morocco`;
            price = budget * 0.45;
        }
    } else if (budget <= 3000) {
        accomodation = `Hut`;
        if (season === `Summer`) {
            location = `Alaska`;
            price = budget * 0.8;
        } else if (season === `Winter`) {
            location = `Morocco`;
            price = budget * 0.6;
        }
    } else {
        accomodation = `Hotel`;
        price = budget * 0.9;
        if (season === `Winter`){
            location = `Morocco`;
        } else if (season === `Summer`) {
            location = `Alaska`;
        }
    }
    console.log(`${location} - ${accomodation} - ${price.toFixed(2)}`);
}
vacation(2544, `Winter`);