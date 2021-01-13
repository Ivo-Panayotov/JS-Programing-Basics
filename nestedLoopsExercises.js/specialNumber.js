function special(input) {
    let n = +input.shift();
    let output = ``;
    for (d1 = 1; d1 <= 9; d1++) {
        for (d2 = 1; d2 <= 9; d2++) {
            for (d3 = 1; d3 <= 9; d3++) {
                for (d4 = 1; d4 <= 9; d4++) {
                    let firstCheck = n % d1 === 0;
                    let secondCheck = n % d2 === 0;
                    let thirdCheck = n % d3 === 0;
                    let fourthCheck = n % d4 === 0;
                    if (firstCheck && secondCheck && thirdCheck && fourthCheck) {
                        output +=`${d1}${d2}${d3}${d4} `;
                    }
                }
            }
        }
    }
    console.log(output);
    
}
special([3]);