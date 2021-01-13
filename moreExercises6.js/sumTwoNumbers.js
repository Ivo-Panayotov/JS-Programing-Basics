function numbers(input) {
    let counter = 0;
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let isTrue = false;
    let first = 0;
    let second = 0;
    for (let i = firstNum; i <= secondNum; i++) {
        for (let j = firstNum; j <= secondNum; j++) {
            counter++;
            if ((i + j) === magicNum) {
                first = i;
                second = j;
                isTrue = true;
                break;
            }
        }
        if (isTrue) {
            break;
        }
    }
    if (isTrue) {
        console.log(`Combination N:${counter} (${first} + ${second} = ${magicNum})`);
    } else {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
        
    }
}
numbers(['23', '24', '20']);