function ballance(input) {
    let amountIn = +input.shift();
    let amount = 0;
    while (amountIn >= 0) {
        console.log(`Increase: ${amountIn.toFixed(2)}`);
        amount+= amountIn;
        amountIn = +input.shift();
    }
    if (amountIn < 0) {
        console.log(`Invalid operation!`);
        
    }
    console.log(`Total: ${amount.toFixed(2)}`);
    

}
ballance([100, 45, -3]);