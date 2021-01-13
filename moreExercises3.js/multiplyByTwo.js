function solve(...args) {

    for (let index = 0; index < args.length; index++) {
        let element = args[index];
        if (element < 0) {
            console.log(`Negative number!`);
        } else {
            console.log(`Result: ${(element * 2).toFixed(2)}`);
        }

    }

}
solve(12,
    43.2144,
    12.3,
    543.23,
    -20)