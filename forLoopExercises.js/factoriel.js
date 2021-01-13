function solve(n){
    n= +n;
    let sum = 1;
    for(let i = 1; i <= n; i++) {
        sum *= i;
    }
    console.log(sum);

}
solve(4);
