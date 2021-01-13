function solve(input) {

    let currentWord = input.shift();

    while (currentWord !== `Stop`) {
        console.log(currentWord);
        currentWord = input.shift();
    }
}
solve([`Nakov`, `Softuni`, `Sofia`, `Bulgaria`, `SomeText`, `Stop`]);