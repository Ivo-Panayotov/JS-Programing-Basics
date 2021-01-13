function future(input) {
    let inheritedMoney = Number(input.shift());
    let yearTillWhichHeHasToLive = Number(input.shift());
    let spendedMoney = 0;
    let ivansYears = 18;
    for (let i = 1800; i <= yearTillWhichHeHasToLive; i++) {
        if (i % 2 === 0) {
            spendedMoney += 12000;
        } else {
            spendedMoney += 12000 + (50 * ivansYears);
        }
        ivansYears++;
    }
    if (spendedMoney <= inheritedMoney) {
        console.log(`Yes! He will live a carefree life and will have ${(inheritedMoney - spendedMoney).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(spendedMoney - inheritedMoney).toFixed(2)} dollars to survive.`);
        
    }

}
future([50000, 1802]);