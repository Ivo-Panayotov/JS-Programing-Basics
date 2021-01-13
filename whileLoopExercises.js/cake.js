function cake(input) {
    let width = +input.shift();
    let length = +input.shift();
    let amountOfPieces = width * length;

    while (amountOfPieces > 0) {
        let piecesTaken = input.shift();
        if (piecesTaken === `STOP`) {
            break;
        }
        piecesTaken = +piecesTaken;
        amountOfPieces -= piecesTaken;
    }
    if (amountOfPieces >= 0) {
        console.log(`${amountOfPieces} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(amountOfPieces)} pieces more.`);
        
    }
}
cake([]);