function lucky(input) {
    let n = Number(input[0]);
    let output = ``;
    for (let i = 1; i < n, i <= 9; i++) {
        for (let j = 1; j < n, j <= 9; j++) {
            for (let k = 1; k < n, k <= 9; k++) {
                for (let l = 1; l < n, l <= 9; l++) {
                    if ((i + j === k + l) && n % (i + j) === 0) {
                       output += `${i}${j}${k}${l} `;                    
                    }
        
                }
            }
        }
    }
    console.log(output);
    
}
lucky([ '24' ]);