function repair(input) {
    let height = +input.shift();
    let width = +input.shift();
    let percentageDoorsAndWindows = +input.shift();
    let perimeter = height * width * 4;
    let paintNeeded = perimeter - (perimeter * percentageDoorsAndWindows / 100);
    let litresPaintReceived = input.shift();

    while (litresPaintReceived !== `Tired!`) {
        litresPaintReceived = +litresPaintReceived;
        paintNeeded -= litresPaintReceived;
        if (paintNeeded <= 0) {
            break;
        }
        litresPaintReceived = input.shift();
    }
    if (paintNeeded > 0) {
        console.log(`${paintNeeded} quadratic m left.`)
    } else if (paintNeeded === 0) {
        console.log(`All walls are painted! Great job, Pesho!`);
    } else {
        console.log(`All walls are painted and you have ${Math.abs(paintNeeded)} l paint left!`)
        
    }

}
repair([ '3', '5', '10', '2', '3', '4', 'Tired!' ]);