function combinations(input) {
    let beginningInterval = input[0];
    let counter = 0;
    let endingInterval = input[1];
    let invalidChar = input[2];
    let firstNum = beginningInterval.charCodeAt();
    let lastNum = endingInterval.charCodeAt();
    let invalidNum = invalidChar.charCodeAt();
    let stringI = ``;
    let stringJ = ``;
    let stringK = ``;
    let isTrue = false;
    let output = ``;
    for (let i = firstNum; i <= lastNum; i++) {
        if (i === invalidNum) {
            isTrue = true;
            continue;
        }
        for (let j = firstNum; j <= lastNum; j++) {
            if (j === invalidNum) {
                isTrue = true;
                continue;
            }
            for (let k = firstNum; k <= lastNum; k++) {
                if (k === invalidNum) {
                    isTrue = true;
                    continue;
                }
               
                stringI = String.fromCharCode(i);
                stringJ = String.fromCharCode(j);
                stringK = String.fromCharCode(k)
                output += `${stringI}${stringJ}${stringK} `;
                counter++;
            }
            isTrue = false;
        }
    }

    console.log(`${output}${counter}`);

}
combinations(['a', 'c', 'b', '']);