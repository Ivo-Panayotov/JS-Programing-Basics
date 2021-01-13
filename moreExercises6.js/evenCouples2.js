function solve(input) {
    let firstPair = +input[0];
    let secondPair = +input[1];
    let firstPairAdd = +input[2];
    let secondPairAdd = +input[3];
    
    for (let i = firstPair; i <= firstPair + firstPairAdd; i++) {
        for (let j = secondPair; j <= secondPair + secondPairAdd; j++) {
            let isTrue1 = true;
            let isTrue2 = true;
            for (let k = 2; k <= Math.sqrt(i); k++) {
             if (i % k === 0) {
                isTrue1 = false;
                break;
             } 
            }
            for (let l = 2; l <= Math.sqrt(j); l++) {
                if (j % l === 0) {
                   isTrue2 = false;
                   break;
                } 
               }
               if (isTrue1 && isTrue2) {
                   console.log(`${i}${j}`);
                
               }
        }
        
    }


}
solve([ '10', '20', '5', '5' ]);