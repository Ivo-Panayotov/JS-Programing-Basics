function solve(input) {
    let dividedByTwo = 0;
    let dividedByThree = 0;
    let dividedByFour = 0;
    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let a = input.shift();
        if (a % 2 === 0) {
            dividedByTwo++;
        } 
         if (a % 3 === 0) {
            dividedByThree++;
        } 
         if (a % 4 === 0) {
            dividedByFour++;
        }

    }
    console.log(`${(dividedByTwo / n * 100).toFixed(2)}%`);
    console.log(`${(dividedByThree / n * 100).toFixed(2)}%`);
    console.log(`${(dividedByFour / n * 100).toFixed(2)}%`);

}
solve([3, 3, 6, 9]);