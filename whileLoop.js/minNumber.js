function solve(input) {
    let currentNumber = input.shift();
    let smallestNumber = Number.MAX_SAFE_INTEGER;
    while (currentNumber !== `Stop`) {
        currentNumber = +currentNumber;
        if (currentNumber < smallestNumber) {
            smallestNumber = currentNumber;
        }
        currentNumber = input.shift();
    }
    console.log(smallestNumber);
    

}
solve([100, 40, 2000, 30, `Stop`]);