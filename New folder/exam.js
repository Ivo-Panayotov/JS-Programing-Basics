function solve (input) {
    let end = +input[0];
    let twoDivider = 0;
    let threeDivider = 0;
    let fourDivider = 0;
    let index = 1;
    let num = Number(input[index++]);
    for (let i = 1; i <= end; i++) {
        if(num % 2 === 0) {
            twoDivider++;
        }
        if (num % 3 === 0) {
            threeDivider++;
        }
        if (num % 4 === 0) {
            fourDivider++;
        }
        num = Number(input[index++]);
    }
    console.log((`${(twoDivider / end * 100).toFixed(2)}%`));
    console.log((`${(threeDivider / end * 100).toFixed(2)}%`));
    console.log((`${(fourDivider / end * 100).toFixed(2)}%`));
    
}
solve([ '3', '3', '6', '9' ]);
solve([
    '10',  '680', '2',
    '600', '200', '800',
    '799', '199', '46',
    '128', '65']);