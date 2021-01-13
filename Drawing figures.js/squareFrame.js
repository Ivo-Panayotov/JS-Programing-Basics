function frame(input) {
    let n = Number(input);
    let firstRow = ``;
    for (let i = 1; i <= n - 2; i++) {
        firstRow += `- `;
    }
    console.log(`+ ${firstRow}+`);
    for (let i = 1; i <= n - 2; i++) {
        let middleRow = ``;
        for (let j = 1; j <= n - 2; j++) {
            middleRow += `- `;
        }
        console.log(`| ${middleRow}|`);
    }
    console.log(`+ ${firstRow}+`);
    
}
frame([5]);