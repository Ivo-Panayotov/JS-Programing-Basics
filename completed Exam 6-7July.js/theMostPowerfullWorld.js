function world(input) {
    let command = input.shift();
    let topWordPoints = 0;
    let powerfullWord = ``;
    let a = false;
    while (command !== `End of words`) {
        let counter = 0;
        for (let i = 0; i < command.length; i++) {
            counter += command.charCodeAt(i);
        }
        if (command[0] === `a`|| command[0] === `A`|| command[0] === `e`|| command[0] === `E`|| command[0] === `O`||
        command[0] === `o`|| command[0] === `i`||command[0] === `I`||command[0] === `u`||command[0] === `U`
        || command[0] === `y`|| command [0] === `Y`) {
            counter = Math.floor(counter * command.length);
        } else {
            counter = Math.floor(counter / command.length);
        }
        if (counter > topWordPoints) {
            topWordPoints = counter;
            powerfullWord = command;
        }
        command = input.shift();
    }
    console.log(`The most powerful word is ${powerfullWord} - ${topWordPoints}`)
    

} 
world(['The', 'Most', 'Powerful', 'Word', 'Is', 'Experience', 'End of words']);