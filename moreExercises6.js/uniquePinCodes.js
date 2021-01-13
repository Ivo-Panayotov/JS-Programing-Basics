function pincode(input) {
    let firstNumberLimit = Number(input[0]);
    let secondNumberLimit = Number(input[1]);
    let thirdNumberLimit = Number(input[2]);
    let output = ``;

    for (let i = 2; i <= firstNumberLimit; i += 2) {
        for (let j = 2; j <= secondNumberLimit; j ++) {
            let isTrue = false;
            if (j < 9 && (j === 2 || j % 2 === 1)) {
               isTrue = true;
            }
            for (let k = 2; k <= thirdNumberLimit; k += 2) {
              output = (`${i} ${j} ${k}`);
              if (isTrue){
            console.log(output);
              }
            }
        }  
    }
}
pincode([ '8', '2', '8', '' ]);