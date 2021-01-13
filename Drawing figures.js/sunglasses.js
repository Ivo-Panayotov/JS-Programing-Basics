function sunglasses(input) {
    let n = Number(input);
    let star = `*`;
    let space = ` `;
    let straightLine = `|`
    console.log(`${star.repeat(n * 2)}${space.repeat(n)}${star.repeat(n * 2)}`);

    for (let i = 1; i <= n - 2; i++) {
        let output = ``;
        let line = `/`;
        for (let j = 1; j <= i; j++) {
            output = `*${line.repeat((n - 1) * 2)}*${space.repeat(n)}*${line.repeat((n - 1) * 2)}*`;
        if ((n % 2 === 0 && i === n / 2 - 1) || (n % 2 === 1 && i === (n - 1) / 2)) {
            output = `*${line.repeat((n - 1) * 2)}*${straightLine.repeat(n)}*${line.repeat((n - 1) * 2)}*`;
        }
          
        }
        console.log(output);
        
    }




    console.log(`${star.repeat(n * 2)}${space.repeat(n)}${star.repeat(n * 2)}`);
}
sunglasses([5]);