function tickets(input) {
    let a1 = +input.shift();
    let a2 = +input.shift();
    let n = +input.shift();
    let output = ``;

    for (let firstLetter = a1; firstLetter <= a2 - 1; firstLetter++) {
        for (let secondLetter = 1; secondLetter <= n - 1; secondLetter++) {
            for (let thirdLetter = 1; thirdLetter <= (n / 2 - 1); thirdLetter++) {
                for (let fourthLetter = firstLetter.toString(); fourthLetter <= firstLetter.toString(); fourthLetter++) {
                    fourthLetter = +fourthLetter;
                    if (firstLetter % 2 === 1) {
                        if ((secondLetter + thirdLetter + fourthLetter) % 2 === 1) {
                            output = `${String.fromCharCode(firstLetter)}-${secondLetter}${thirdLetter}${fourthLetter} `;
                            console.log(output);
                            
                        }
                    }
                }
            }
        }

    }


}
tickets([71, 74, 6]);