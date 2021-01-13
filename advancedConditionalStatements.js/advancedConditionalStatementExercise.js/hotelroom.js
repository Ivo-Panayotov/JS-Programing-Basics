function solve(month, countNights) {
    countNights = Number(countNights);
    let apartmentPrice = 0;
    let studioPrice = 0;
    if (month === `May` || month === `October`) {
        studioPrice = 50;
        apartmentPrice = 65;
        if (countNights > 14) {
            studioPrice = studioPrice * 0.7;
        } else if (countNights > 7) {
            studioPrice = studioPrice * 0.95;
        }
    } else if (month === `June` || month === `September`) {
        studioPrice = 75.2;
        apartmentPrice = 68.7;
        if (countNights > 14) {
            studioPrice = studioPrice * 0.8;
        }
    } else if (month === `July` || month === `August`) {
        studioPrice = 76;
        apartmentPrice = 77;
    }
    if (countNights > 14) {
        apartmentPrice = apartmentPrice * 0.9;
    }

    let priceApartmentTotal = (countNights * apartmentPrice).toFixed(2);
    let priceStudioTotal = (countNights * studioPrice).toFixed(2);
    console.log(`Apartment: ${priceApartmentTotal} lv.`);
    console.log(`Studio: ${priceStudioTotal} lv.`);
    
}
solve(`August`, 20);