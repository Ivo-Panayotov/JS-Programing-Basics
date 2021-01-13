function couples(input) {
    let firstPair = input[0];
    let addFirst = input[2];
    let iBegin = Number(firstPair[0]);
    let jBegin = Number(firstPair[1]);
    firstPair = String(Number(firstPair) + Number(addFirst));
    let iLast = Number(firstPair[0]);
    let jLast = Number(firstPair[1]);
    let secondPair = input[1];
    let addSecond = input[3];
    let kBegin = Number(secondPair[0]);
    let lBegin = Number(secondPair[1]);
    secondPair = String(Number(secondPair) + Number(addSecond));
    let kLast = Number(secondPair[0]);
    let lLast = Number(secondPair[1]);
   
    for (let i = iBegin; i <= iLast; i++) {
        for (let j = jBegin; j <= jLast; j++) {
            for (let k = kBegin; k <= kLast; k++) {
                for (let l = lBegin; l <= lLast; l++) {
                    let ij = Number(`${i}${j}`);
                    let kl = Number(`${k}${l}`);
                    let isTrue1 = true;
                    let isTrue2 = true;
                    for (let m = 2; m <= Math.sqrt(ij); m++) {
                        if (ij % m === 0) {
                            isTrue1 = false;
                            break;
                        }
                    }
                    for (let n = 2; n <= Math.sqrt(kl); n++) {
                        if (kl % n === 0) {
                            isTrue2 = false;
                            break;
                        }
                    }
                    if (isTrue1 && isTrue2) {
                        console.log(`${ij}${kl}`);
                    }

                }
            }
        }
    }
}
couples(['51', '75', '4', '7']);
