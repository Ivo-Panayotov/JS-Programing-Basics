function tree(input) {
    n = Number(input);
    let space = ` `;
    console.log(`${space.repeat(n)} | `);
    let star = `*`;

    for (let i = 1; i <= n; i++) {
        let output = ``;
        for (let j = 1; j <= i; j++) {
            output = `${space.repeat(n - j)}${star.repeat(j)} | ${star.repeat(j)}`
        }
        console.log(output);
        
    }
    

}
tree([10]);