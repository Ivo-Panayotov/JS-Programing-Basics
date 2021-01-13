function fourth(amountBees, years) {
    amountBees = Number(amountBees);
    years = Number(years);
    let currentAmountBees = amountBees;
    for (let i = 1; i <= years; i++) {
        currentAmountBees += Math.floor(currentAmountBees / 10) * 2;
        if (i % 5 === 0) {
            currentAmountBees -= Math.floor(currentAmountBees / 50) * 5;
        }
        currentAmountBees -= Math.floor(currentAmountBees / 20) * 2;
    }
    console.log(`Beehive population: ${currentAmountBees}`);
    
}
fourth(100, 6);
fourth(1000, 23);
//1г. => 100 / 10 * 2 = 20 излюпени пчели (120 общо)
//120 / 20 * 2 = 12 измрели пчели.
//2г. => 108 / 10 * 2 = 20 (128 общо)
//128 / 20 * 2 = 12 измрели пчели.
//3г. => 116 / 10 * 2 = 22 (138 общо)
//138 / 20 * 2 = 12 измрели пчели.
//4г. => 126 / 10 * 2 = 24 (150 общо)
//150 / 20 * 2 = 14 измрели пчели.
//5г. => 136 / 10 * 2 = 26 (162 общо)
//Тъй като годината е пета, пчелите мигрират:
//162 / 50 * 5 = 15 мигрирали пчели (147 остават)
//147 / 20 * 2 = 14 измрели пчели.
//6г. => 133 / 10 * 2 = 26 (159 общо)
//159 / 20 * 2 = 14 измрели пчели.
//145 пчели е популацията след 6-те години. 