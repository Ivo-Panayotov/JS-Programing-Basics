function solve(...args) {
    let index = 0;
    let x = Number(args[index++]);
    while (x >= 0) {
        console.log(`Result: ${(x * 2).toFixed(2)}`);
        x = Number(args[index++]);
    }
    console.log(`Negative number!`);
    
}
solve(12,
    43.2144,
    12.3,
    543.23,
    -20);