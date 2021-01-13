function num(input) {
    let count = +input.shift();
    let sum = 0;
    for (let i = 1; i <= count; i++) {
        sum += +input.shift();
    }
console.log((sum / count).toFixed(2));

}
num([4, 2, 2, 2, 2]);