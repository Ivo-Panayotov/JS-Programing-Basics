function solve(input) {
    let userName = input[0];
    let userPassword = input.shift[1];
    let index = 2;
    let passwordCheck = input[index];
    while (passwordCheck !== userPassword) {
        index++;
        passwordCheck = input[index];
    }
    if (passwordCheck == userPassword) {
        console.log(`Welcome ${userName}!`);
        
    }

}
solve([`Nakov`, 1234, `Pass`, 45, 34, 29, 37, 1234, 4343, 1234]);