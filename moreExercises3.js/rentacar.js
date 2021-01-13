function rentacar(budget, season) {
    budget = +budget;
    let typeOfCar;
    let typeOfClass;
    let price = 0;

    if (budget <= 100) {
        typeOfClass = `Economy class`;
        if (season === `Summer`) {
            typeOfCar = `Cabrio`;
            price = budget * 0.35;
        } else if (season === `Winter`) {
            typeOfCar = `Jeep`;
            price = budget * 0.65;
        }
    } else if (budget <= 500) {
        typeOfClass = `Compact class`;
        if (season === `Summer`) {
            typeOfCar = `Cabrio`;
            price = budget * 0.45;
        } else if (season === `Winter`) {
            typeOfCar = `Jeep`;
            price = budget * 0.8;
        }
    } else if (budget > 500) {
        typeOfClass = `Luxury class`;
        typeOfCar = `Jeep`;
            price = budget * 0.9;
    }
    console.log(typeOfClass);
    console.log(`${typeOfCar} - ${price.toFixed(2)}`);
}
rentacar(450, `Summer`);