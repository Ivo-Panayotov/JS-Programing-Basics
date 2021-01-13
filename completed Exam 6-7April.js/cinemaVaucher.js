function cinemaNight(input) {
    let vaucherAmount = Number(input[0]);
    let index = 1;
    let command = input[index++];
    let ticketCounter = 0;
    let snacksCounter = 0;

    while (command !== `End`) {
        if (command.length > 8) {
            vaucherAmount -= (command.charCodeAt(0) + command.charCodeAt(1));
            if (vaucherAmount < 0) {
                break;
            }
            ticketCounter++;
        } else {
            vaucherAmount -= command.charCodeAt(0);
            if (vaucherAmount < 0) {
                break;
            }
            snacksCounter++;
    }
    command = input[index++];
}
console.log(ticketCounter);
console.log(snacksCounter);
    
}
cinemaNight(['300', 'Captain Marvel', 'popcorn', 'Pepsi']);