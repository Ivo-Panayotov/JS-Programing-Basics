function nameGame(input) {
    let nameOfPlayer = input.shift();
    let winnerPoints = 0;
    let winnerName;
    while (nameOfPlayer !== `Stop`) {
        let pointsCounter = 0;
        for (let i = 0; i < nameOfPlayer.length; i ++) {
            let char = input.shift();
            let asciiCode = nameOfPlayer.charCodeAt(i); 
            
            if (asciiCode == char) { 
                pointsCounter += 10;
            } else {
                pointsCounter += 2;
            }
        }
        if (pointsCounter >= winnerPoints) {
            winnerPoints = pointsCounter;
            winnerName = nameOfPlayer;
        }
        nameOfPlayer = input.shift();
    }

    console.log(`The winner is ${winnerName} with ${winnerPoints} points!`);
}
nameGame([`Pesho`,
    124,
    34,
    111,
    97,
    99,
    `Gosho`,
    `98`,
    `124`,
    `88`,
    `76`,
    `18`,
    `Stop`]);