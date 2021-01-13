function division(input) {
    let numLength = input[0];
    let index = 1;
    let number = +input[index++];
    let counterBy3 = 0;
    let counterBy2 = 0;
    let counterBy4 = 0;
    for (let i = 0; i < numLength; i++) {
        if (number % 2 ===0) {
            counterBy2++;
        } 
        if (number % 3 === 0) {
            counterBy3++;
        } 
        if (number % 4 === 0) {
            counterBy4++;
        }
        number = +input[index++];
    } 
    console.log(`${(counterBy2 / numLength * 100).toFixed(2)}%`);
    console.log(`${(counterBy3 / numLength * 100).toFixed(2)}%`);
    console.log(`${(counterBy4 / numLength * 100).toFixed(2)}%`);
    
    

}
division(['10',  '680', '2', '600', '200', '800', '799', '199', '46', '128', '65']);