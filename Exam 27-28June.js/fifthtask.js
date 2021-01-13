function fifthCase(countBees, healthBear, attackBear) {
    let attackBee = 5;
    let bearWinCheck = false;
    while (healthBear > 0) {
        countBees -= attackBear;
        if (countBees < 100) {
            bearWinCheck = true;
            break;
        }
        healthBear -= countBees * 5;

    }
    if (countBees < 0) {
        countBees = 0;
    }
    if (bearWinCheck) {
        console.log(`The bear stole the honey! Bees left ${countBees}.`);
    } else {
        console.log(`Beehive won! Bees left ${countBees}.`);
        
    }

}
fifthCase(1000, 10000, 100);