function findNumber (input) {
    let currentNumber = input.shift();
    let biggestNumber = Number.MIN_SAFE_INTEGER;
    while (currentNumber !== `Stop`) {
        currentNumber = +currentNumber;
        if (currentNumber > biggestNumber) {
            biggestNumber = currentNumber;
        } 
        currentNumber = input.shift();
    }
    console.log(biggestNumber);
}
findNumber([100, 99, 88, 77, `Stop`]);