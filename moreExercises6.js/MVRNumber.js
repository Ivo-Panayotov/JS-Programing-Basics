function mvr(input) {
let first = Number(input[0]);
let last = Number(input[1]);
    output = ``;
    for (let i = first; i <= last; i++) {
        for (let j = first; j <= last; j++) {
            for (let k = first; k <= last; k++) {
                for (let l = first; l <= last; l++) {
                    if((i % 2 === 1 && l % 2 === 0) || (l % 2 === 1 && i % 2 === 0)) {
                        if (i > l && (j + k) % 2 === 0) {
                            output += (`${i}${j}${k}${l} `)

                        }
                        
                    }
        
                }
            }
        }
    }
    console.log(output);
    
}
mvr([ '2', '3', '' ]);