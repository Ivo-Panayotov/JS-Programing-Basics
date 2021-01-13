function solve(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        let element = input[i];
        element = +element;
        sum += element;
    }
    console.log(`The sum of the digits is:${sum}`);
    
}
solve(`5678`);
