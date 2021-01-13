function solve(input) {
    let beginningNumber = Number(input.shift());
    let endingNumber = Number(input.shift());
    let magicalNumber = Number(input.shift());
    let firstNumber = 0;
    let secondNumber = 0
    let count = 0;
    let flag = false;
    for (let i = beginningNumber; i <= endingNumber; i++) {
        firstNumber = i;
        for (let j = beginningNumber; j <= endingNumber; j++) {
            secondNumber = j;
            count++;
            if ((i + j) == magicalNumber) {
                flag = true;
                break;
            }
        }
        if (flag) {
            break;
        }
    }
    if (flag) {
        console.log(`Combination N:${count} (${firstNumber} + ${secondNumber} = ${magicalNumber})`);
    } else {
        console.log(`${count} combinations - neither equals ${magicalNumber} `);

    }
}
solve([1, 10, 5]);