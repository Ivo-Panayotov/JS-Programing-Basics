function secondCase(intelligence, power, gender) {
    let typeOfBee = ``;
    if (intelligence >= 80 && power >= 80 && gender === `female`) {
        typeOfBee = `Queen Bee`;
    } else if (intelligence >= 80) {
        typeOfBee = `Repairing Bee`;
    } else if (intelligence >= 60) {
        typeOfBee = `Cleaning Bee`;
    } else if (power >= 80 && gender === `male`) {
        typeOfBee = `Drone Bee`;
    } else if (power >= 60) {
        typeOfBee = `Guard Bee`;
    } else {
        typeOfBee = `Worker Bee`;
    }


    console.log(typeOfBee);
    
}
secondCase(90, 65, `male`);
secondCase(82, 81, `female`);