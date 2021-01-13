function smallestNumber(input) {
    n = Number(input.shift());
    let minNumber = Number.MAX_SAFE_INTEGER;
    let currentNumber = Number(input.shift());
    for (let i = 1; i <= n; i++) {
        if (currentNumber < minNumber) {
            minNumber = currentNumber;
        }
        currentNumber = Number(input.shift());
    }
    console.log(minNumber);
    

}
smallestNumber([3, 56, 999, -3]);