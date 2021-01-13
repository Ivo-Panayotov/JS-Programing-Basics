function pyramid(input) {
    num = +input.shift();
    let totalNumbers = ``;
    let currentNumber = 1;
    let isBigger = false;
    for (rows = 1; rows <= num; rows++) {
        for (let columns = 1; columns <= rows; columns++) {
            if (currentNumber > num) {
                isBigger = true;
                break;
            }
            totalNumbers += currentNumber + ` `;
            currentNumber++;
            
        }
        console.log(totalNumbers);
        totalNumbers = ``;
        if (isBigger) {
            break;
        }
        
    }

}
pyramid([7]);