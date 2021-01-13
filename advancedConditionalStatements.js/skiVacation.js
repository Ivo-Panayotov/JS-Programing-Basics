function skiing(days, typeOfAccomodation, criticReview) {
    days = +days - 1;
    let finalPrice = 0;
    if (typeOfAccomodation === `room for one person`) {
        finalPrice = 18;
        if (criticReview === `positive`) {
            finalPrice = finalPrice * 1.25;
        } else {
            finalPrice = finalPrice * 0.9;
        }
    } else if (typeOfAccomodation === `apartment`) {
        finalPrice = 25;
        if (days < 10) {
            finalPrice = finalPrice * 0.7;
            if (criticReview === `positive`) {
                finalPrice = finalPrice * 1.25;
            } else {
                finalPrice = finalPrice * 0.9;
            }
        } else if (days >= 10 && days <= 15) {
            finalPrice = finalPrice * 0.65;
            if (criticReview === `positive`) {
                finalPrice = finalPrice * 1.25;
            } else {
                finalPrice = finalPrice * 0.9;
            }
        } else if (days > 15) {
            finalPrice = finalPrice * 0.5;
            if (criticReview === `positive`) {
                finalPrice = finalPrice * 1.25;
            } else {
                finalPrice = finalPrice * 0.9;
            }
        }
    }  else if (typeOfAccomodation === `president apartment`) {
        finalPrice = 35;
        if (days < 10) {
            finalPrice = finalPrice * 0.9;
            if (criticReview === `positive`) {
                finalPrice = finalPrice * 1.25;
            } else {
                finalPrice = finalPrice * 0.9;
            }
        } else if (days >= 10 && days <= 15) {
            finalPrice = finalPrice * 0.85;
            if (criticReview === `positive`) {
                finalPrice = finalPrice * 1.25;
            } else {
                finalPrice = finalPrice * 0.9;
            }
        } else if (days > 15) {
            finalPrice = finalPrice * 0.8;
            if (criticReview === `positive`) {
                finalPrice = finalPrice * 1.25;
            } else {
                finalPrice = finalPrice * 0.9;
            }
        }
    }
    
                console.log((finalPrice * days).toFixed(2));

            }
            skiing(14, `apartment`, `positive`);