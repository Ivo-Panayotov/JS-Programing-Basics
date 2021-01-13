function diamond(input) {
    let n = Number(input);
    let zero = 0;
    let lastZero = 0;
    if (n === 1) {
        console.log(`*`);
    } else if (n === 2) {
        console.log(`**`);
    }
    if (n % 2 === 0 && n > 2) {
        for (let i = 1; i <= n / 2; i++) {
            console.log(`${"-".repeat(n / 2 - i)}*${"-".repeat(zero)}*${"-".repeat(n / 2 - i)}`);
            lastZero = zero;
            zero += 2;
        }
        zero = lastZero - 2;
        let one = 1;
        let lastone = 0;
        for (let j = n / 2 - 1; j > 0; j--) {
            console.log(`${"-".repeat(one)}*${"-".repeat(zero)}*${"-".repeat(one)}`);
            one++;
            zero -= 2;
        }
    } else if(n % 2 === 1 && n > 1) {
        console.log(`${"-".repeat((n - 1) / 2)}*${"-".repeat((n - 1) / 2)}`);
        let one = 1;
        for (let i = 1; i < (n + 1) / 2; i++){
        console.log(`${"-".repeat((n - 1) / 2 - i)}*${"-".repeat(one)}*${"-".repeat((n - 1) / 2 - i)}`);
        lastone = one;
        one += 2;
        }
        one = 1;
        for (let j = 1; j < (n - 1) / 2; j++){
            console.log(`${"-".repeat(one)}*${"-".repeat(lastone - 2)}*${"-".repeat(one)}`);
            one++;
            lastone -= 2;
        }
        console.log(`${"-".repeat((n - 1) / 2)}*${"-".repeat((n - 1) / 2)}`);
    }
}
diamond([11]);