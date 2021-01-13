function triangle(input) {
    let n = Number(input);

    for (let i = 1; i <= n; i++) {
        let output = ``;
        for (let j = 1; j <= i; j++) {
            output += `$ `;
        }
        console.log(output);
        
    }
}
triangle([44])