function sixth(input) {
    let index = 0;
    let amountOfHoneyNeeded = Number(input[index++]);
    let command = input[index++];
    let totalHoneyCollected = 0;
    let isTrue = false;
    while (command !== `Winter has come`) {
        let nameOfBee = command;
        let currentHoney = 0;
        for (let i = 1; i <= 6; i++) {
            let monthlyHarvest = Number(input[index++]);
            totalHoneyCollected += monthlyHarvest;
            currentHoney += monthlyHarvest;
           
        }
        if (currentHoney < 0) {
            console.log(`${nameOfBee} was banished for gluttony`);
        }
        if (totalHoneyCollected >= amountOfHoneyNeeded) {
            isTrue = true;
            break;
        }
        
        command = input[index++];
    }
if (isTrue) {
    console.log(`Well done! Honey surplus ${(totalHoneyCollected - amountOfHoneyNeeded).toFixed(2)}.`);
} else {
    console.log(`Hard Winter! Honey needed ${(amountOfHoneyNeeded - totalHoneyCollected).toFixed(2)}.`);
    
}

}
sixth([
    '1000',
    'Maya',
    '50',
    '10.5',
    '19.5',
    '30',
    '100',
    '100',
    'Winter has come'
  ]
  );