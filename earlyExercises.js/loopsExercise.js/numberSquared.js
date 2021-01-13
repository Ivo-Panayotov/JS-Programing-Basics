function solve(n) {
    n = Number(n);
    sumNeeded = 0;
    for (let i = 1; i <= n; i ++) {
        
         sumNeeded += i*i ;
        

    }
    console.log(sumNeeded);

}
solve(7);