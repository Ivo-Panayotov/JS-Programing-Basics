function solve(input) {
    let bigNumber = +input.shift();
    let sum = 0;
    let currentNumber = +input.shift();
    while (sum < bigNumber) {
        sum += currentNumber;
        currentNumber = +input.shift();
    }
    console.log(sum);
    
}
solve([100, 10, 20, 30, 40, 2]);