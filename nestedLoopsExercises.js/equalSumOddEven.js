function equal(input) {
    let firstNumber = input.shift();
    let lastNumber = input.shift();
    let printLine = ``;
    for (let i = firstNumber; i <= lastNumber; i++) {
        let currentNum = i.toString();
        let sumOdd = 0;
        let sumEven = 0;
        for(j = 0; j < currentNum.length; j++){
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                sumEven += currentDigit;
            } else {
                sumOdd += currentDigit;
            }
        }
        if (sumEven === sumOdd) {
            printLine += currentNum + ` `;
        }
    }
    console.log(printLine);

}
equal([`299900`, `300000`]);