function read(input) {
    let text = input.shift();
    while (text !== `Stop`) {
        console.log(text);
        text = input.shift();
    }

}
read([`Nakov`, `Pesho`, `van`, `Softuni`, `Water`, `Earth`, `Stop`]);