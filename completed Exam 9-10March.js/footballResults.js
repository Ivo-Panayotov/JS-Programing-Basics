function football(input) {
    let resultFirstGame = input[0];
    let resultSecondGame = input[1];
    let resultThirdGame = input[2];
    let winCounter = 0;
    let drawCounter = 0;
    let loseCounter = 0;

    if (resultFirstGame[0] > resultFirstGame[2]) {
        winCounter++;
    } else if (resultFirstGame[0] === resultFirstGame[2]) {
        drawCounter++;
    } else {
        loseCounter++;
    }
    if (resultSecondGame[0] > resultSecondGame[2]) {
        winCounter++;
    } else if (resultSecondGame[0] === resultSecondGame[2]) {
        drawCounter++;
    } else {
        loseCounter++;
    }
    if (resultThirdGame[0] > resultThirdGame[2]) {
        winCounter++;
    } else if (resultThirdGame[0] === resultThirdGame[2]) {
        drawCounter++;
    } else {
        loseCounter++;
    }
      console.log(`Team won ${winCounter} games.`);
      console.log(`Team lost ${loseCounter} games.`);
      console.log(`Drawn games: ${drawCounter}`);
        
}
football([ '3:1', '0:2', '0:0', '', '', '' ]);