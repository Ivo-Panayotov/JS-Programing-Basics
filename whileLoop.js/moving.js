function moving(input) {
    let width = + input.shift();
    let length = +input.shift();
    let height = +input.shift();
    let volume = width * height * length;
    let countBoxes = input.shift();
    while (countBoxes !== `Done`) {
        countBoxes = +countBoxes;
        volume -= countBoxes;
        if (volume < 0) {
            break;
        }
        countBoxes = input.shift();

    }
    if (volume < 0) {
        console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`)
    } else {
        console.log(`${volume} Cubic meters left.`)
        
    }
}
moving([10, 10, 2, 20, 20, 20, 20, 122]);