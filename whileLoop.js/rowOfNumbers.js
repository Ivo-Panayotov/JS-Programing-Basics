function solve(input) {
    input = +input;
    let sum = 0;
    let counter = 1;
   
    while (sum < input) {
    console.log(counter);
    sum += counter;
    counter = (counter * 2) + 1;
    
    }

}
solve([`55`]);