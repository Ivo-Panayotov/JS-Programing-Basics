function pass(input) {
    let firstLastNum = Number(input[0]);
    let secondPenultimate = Number(input[1]);
    maxCountTryings = Number(input[2]);
    let counter = 0;
    let output = ``;
    let isTruek = false;
    let isTruel = false;
    for (let i = 35; i <= 56; i++) {
        for (let j = 64; j <= 97; j++) {
            for (let k = 1; k <= firstLastNum; k++) {
                for (let l = 1; l <= secondPenultimate; l++) {
                    if (i === 56) {
                        i = 35;
                    }
                    if (j === 97) {
                        j = 64;
                    }
                    counter++;
                    output +=`${String.fromCharCode(i)}${String.fromCharCode(j)}${k}${l}${String.fromCharCode(j)}${String.fromCharCode(i)}|`;
                    i++;
                    j++;
                    if ((k === firstLastNum && l === secondPenultimate)|| counter === maxCountTryings) {
                        console.log(output);
                        return;
                    }
                }
            }
        }
    }
}
pass(['2', '3', '10']);