function solve(input) {
    let first = +input[0];
    let last = +input[1];
    let output = ``;
    for (let i = first; i <= last; i++) {
        let num = i.toString();
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j < num.length; j++) {
            let newNum = +num[j];
            if (j % 2 === 0) {
                evenSum += newNum;
            } else {
                oddSum += newNum;
            }
        }
        if (evenSum === oddSum) {
            output += num + ` `;
        }
    }
    console.log(output);
    
}
solve([100000, 100050]);