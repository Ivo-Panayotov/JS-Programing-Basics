function letters(text, controlNumber, budget) {
    controlNumber = Number(controlNumber);
    budget = Number(budget);
    let sum = 0;
    for ( i = 0; i < text.length; i ++){
        let char = text[i];
        if (char == `a` || char ==`i` || char == `e` || char == `o` || char == `u` || char == `y`) {
            sum += 3; 
        } else {
            sum += 1;
        }
    }
    let total = sum * controlNumber;
    if (total < budget) {
        console.log(`${text} bought. Money left: ${(budget - total).toFixed(2)}`);
    } else {
        console.log(`Cannot buy ${text}. Product value: ${total.toFixed(2)}`)
    }
}
letters(`milk`,1.4,8);