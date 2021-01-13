function money(input) {
    let count1Leva = Number(input[0]);
    let count2Leva = Number(input[1]);
    let count5Leva = Number(input[2]);
    let sum = Number(input[3]);

    for (let i = 0; i <= count1Leva; i++) {
        for (let j = 0; j <= count2Leva; j++) {
            for (let k = 0; k <= count5Leva; k++) {
                if ((i + (j * 2) + (k * 5)) === sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                    
                }
            }
        }
    }

}
money([ '3', '2', '3', '10', '', '' ]);