function solve(n) {
    n = Number(n);
    for (let i = 1; i <= n; i ++) {
        if (n % 2 == 0) {
            if (i % 2 ==0) {
            console.log(`Current number: ${i}. Cube: ${i**3}`);
            }
        } else if (n % 2 == 1) {
            if (i % 2 == 1) {
                console.log(`Current number: ${i}. Cube: ${i**3}`);
        }
    }
}
}
solve(3);