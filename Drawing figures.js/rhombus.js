function rhombus(input) {
    let n = Number(input);

    for (let i = 1; i <= n; i++) {
        let space = ` `;
        let star = `* `;
        let output = ``;
        for (let j = 1; j <= i; j++) {
            output = space.repeat(n - j) + star.repeat(j);
        }
        console.log(output);
    }
    for (let i = n - 1; i >= 1; i--) {
        let space = ` `;
        let star = `* `;
        let output = ``;
        for (let j = n - 1 ; j >= i; j--) {
            output = space.repeat(n - j) + star.repeat(j);
        }
        console.log(output);
        
    }
    

}
rhombus([22]);