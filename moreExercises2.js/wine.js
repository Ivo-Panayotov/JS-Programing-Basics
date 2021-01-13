function harvest(x, y, z, countWorkers) {
    let squareMetresFarm = Number(x);
    let grapePerSquareMeter = Number(y);
    let NeededLitresWine = Number(z);
    countWorkers = Number(countWorkers);
    let grapeCollected = squareMetresFarm * 0.4 * grapePerSquareMeter;
    let litresProduced = grapeCollected / 2.5;

    if (litresProduced < NeededLitresWine) {
        console.log(`It will be a tough winter! More ${Math.floor(NeededLitresWine - litresProduced)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(litresProduced)} liters.`);
        console.log(`${Math.ceil(litresProduced - NeededLitresWine)} liters left -> ${Math.ceil((litresProduced - NeededLitresWine) / countWorkers)} liters per person.`);
        
        
    }

}
harvest(650, 2, 175, 3);