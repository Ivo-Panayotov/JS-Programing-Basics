function fifthCase(countBees, healthBear, attackBear) {
    let beeAttack = 5;
    let bearWinCheck = false;
    while (healthBear > 0) {
        countBees -= attackBear;
        if (countBees <= 100) {
            bearWinCheck = true;
            break;
        }
        healthBear -= countBees * beeAttack;

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
fifthCase(200, 100, 10);