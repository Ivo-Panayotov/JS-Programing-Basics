function cinema(input) {
    let capacityOfCinema = +input.shift();
    let peopleIn = input.shift();
    let counterPeople = 0;
    let price = 0;
    
    while (peopleIn !== `Movie time!`) {
        peopleIn = +peopleIn;
        counterPeople += peopleIn;
        if (counterPeople > capacityOfCinema) {
            break;
        }
        if (peopleIn % 3 === 0) {
            price += peopleIn * 5 - 5;
        } else {
            price += peopleIn * 5;
        }
        peopleIn = input.shift();
    }
    if (counterPeople > capacityOfCinema) {
        console.log(`The cinema is full.`);
    } else {
        console.log(`There are ${capacityOfCinema - counterPeople} seats left in the cinema.`);
    }

    console.log(`Cinema income - ${price} lv.`);  
}
cinema([`50`,
`15`, 
`10`, 
`10`, 
`15`, 
`5`]);