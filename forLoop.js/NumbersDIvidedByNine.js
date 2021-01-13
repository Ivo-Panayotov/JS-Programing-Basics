function solve(a, b) {
    a = +a;
    b = +b;
    let sum = 0;
    for (i = a; i <= b; i++) {

        if (i % 9 === 0) {
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);
    for (i = a; i <= b; i++) {

        if (i % 9 === 0) {
            console.log(i);
            
        }
    }
}
solve(`100`, `200`);