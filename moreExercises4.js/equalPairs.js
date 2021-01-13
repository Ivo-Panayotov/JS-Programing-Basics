function solve(input) {
    let index = 0;
    let n = Number(input[index++]);
    let firstNum = Number(input[index++]);
    let secondNum = Number(input[index++]);
    let lastSum = firstNum + secondNum;
    let sum = 0;
    let isTrue = false;
    let difference = 0;
    for (i = 1; i < n; i++) {
        firstNum = Number(input[index++]);
        secondNum = Number(input[index++]);
        sum = firstNum + secondNum;
        if (sum !== lastSum) {
            if (Math.abs(sum - lastSum) > difference){
            difference = Math.abs(sum - lastSum);
            isTrue = true;
        }
    }
        lastSum = sum;
    }
    if (isTrue){
        console.log(`No, maxdiff=${difference}`);
        

    } else {
        console.log(`Yes, value=${lastSum}`);
        
    }
}
solve([4,
    1,
    1,
    3,
    1,
    2,
    2,
    0,
    0]);