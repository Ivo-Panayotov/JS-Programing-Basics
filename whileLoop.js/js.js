function solve(n){
    n= +n;
    let sum = 2;
    for(let i = 1; i <= n; i++) {
        sum *= sum ;
        
    }
    console.log(sum);

}
solve(3);
