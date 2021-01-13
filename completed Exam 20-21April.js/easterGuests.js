function easterGuests(input) {
    let countGuests = +input[0];
    let budget = +input[1];
    let countEggs = countGuests * 2;
    let priceEggs = countEggs * 0.45;
    let countEasterBread = Math.ceil(countGuests / 3);
    let priceEasterbread = countEasterBread * 4;
    let totalSum = priceEggs + priceEasterbread;
    if (budget >= totalSum) {
        console.log(`Lyubo bought ${countEasterBread} Easter bread and ${countEggs} eggs.`);
        console.log(`He has ${(budget - totalSum).toFixed(2)} lv. left.`);   
    } else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(totalSum - budget).toFixed(2)} lv. more.`)
        
    }

}
easterGuests([ '10', '35' ]);