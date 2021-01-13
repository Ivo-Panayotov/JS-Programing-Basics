function hotelArrangement(month, nightsNumber) {
    nightsNumber = Number(nightsNumber);
    let pricePerNightStudio = 0;
    let pricePerNightApartment = 0;
    if (month == "May" || month == "October") {
        if (nightsNumber < 8) {
            pricePerNightStudio = 50;
            pricePerNightApartment = 65;
        } else if (nightsNumber <= 14) {
            pricePerNightStudio = 50;
            pricePerNightApartment = 65;
            pricePerNightStudio = pricePerNightStudio * 0.95;
        } else if (nightsNumber > 14) {
            pricePerNightStudio = 50;
            pricePerNightApartment = 65;
            pricePerNightStudio = pricePerNightStudio * 0.7;
            pricePerNightApartment = pricePerNightApartment * 0.9;
        }
    } else if (month == "June" || month == "September") {
        if (nightsNumber <= 14) {
            pricePerNightApartment = 68.7;
            pricePerNightStudio = 75.2;
        } else if(nightsNumber > 14) {
            pricePerNightApartment = 68.7;
            pricePerNightStudio = 75.2;
            pricePerNightStudio = pricePerNightStudio * 0.8;
            pricePerNightApartment = pricePerNightApartment * 0.9;
        }
    } else if (month == "July" || month == "August") {
        pricePerNightApartment = 77;
        pricePerNightStudio = 76;
        if (nightsNumber > 14) {
            pricePerNightApartment = 77;
            pricePerNightStudio = 76;
            pricePerNightApartment = pricePerNightApartment * 0.9;
        }
    }
    let totalPriceApartment = pricePerNightApartment * nightsNumber;
    let totalPriceStudio =  pricePerNightStudio * nightsNumber;
console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`)
}
hotelArrangement("May",9);