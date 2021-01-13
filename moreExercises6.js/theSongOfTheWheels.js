function song(input) {
    let counter = 0;
    let n = Number(input[0]);
    let isTrue = false;
    output = ``;
    let password = ``;
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    if (i < j && k > l) {
                        if ((i * j) + (k * l) === n) {
                            counter ++;
                           output += `${i}${j}${k}${l} `;
                           if (counter === 4) {
                            password += `${i}${j}${k}${l}`;
                            isTrue = true;
                           }
                        }
                    }
                }
            
            }
        
        }
    
    }
    console.log(output);
    if (isTrue) {
    console.log(`Password: ${Number(password)}`);
    } else {
        console.log(`No!`);
        
    }
}
song([ '55' ]);