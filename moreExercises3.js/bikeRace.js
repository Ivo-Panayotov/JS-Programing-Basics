function race(countJuniorBikers, countSeniorBikers, typeOfRoad) {
    countSeniorBikers = +countSeniorBikers;
    countJuniorBikers = +countJuniorBikers;
    let ticketJunior = 0;
    let ticketSenior = 0;
    if (typeOfRoad === `trail`) {
        ticketJunior = 5.5;
        ticketSenior = 7;
    } else if (typeOfRoad === `cross-country`) {
        ticketJunior = 8;
        ticketSenior = 9.5;
    } else if (typeOfRoad === `downhill`) {
        ticketJunior = 12.25;
        ticketSenior = 13.75;
    } else if (typeOfRoad === `road`) {
        ticketJunior = 20;
        ticketSenior = 21.5;
    }
    if ((countJuniorBikers + countSeniorBikers) >= 50 && typeOfRoad === `cross-country`) {
        ticketSenior = ticketSenior * 0.75;
        ticketJunior = ticketJunior * 0.75;
    }
    let total = (ticketJunior * countJuniorBikers) + (ticketSenior * countSeniorBikers);
    let expenses = total * 0.05;
    total = total - expenses;
    console.log(total.toFixed(2));

}
race(3,
    40,
    `road`);