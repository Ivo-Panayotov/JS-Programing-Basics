function solve(n) {
    n = Number(n);
    let sumOdd = 0;
    let sumOdd7 = 0;
    let sumEven = 0;
    let sumEven100 = 0;
    for (let i = 1; i <= n; i ++) {
        if (100 % i === 0) {
            sumEven100 ++;
        } 
         if (i % 2 === 0){
            sumEven ++;
        } 
         if (i % 2 === 1 && i < 10) {
            sumOdd ++;
        }
         if (i % 10 === 7) {
            sumOdd7 ++;
        } 
 
    }
    let percent1 = ((sumEven100 / n * 100).toFixed(2));
    let percent2 = ((sumEven / n * 100).toFixed(2));
    let percent3 = ((sumOdd / n * 100).toFixed(2));  
    let percent4 = ((sumOdd7 / n * 100).toFixed(2));
    
    console.log(`${percent3}%`);
    console.log(`${percent2}%`);
    console.log(`${percent4}%`);
    console.log(`${percent1}%`);
    }
solve(49);