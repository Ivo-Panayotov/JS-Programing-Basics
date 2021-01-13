function trip(input) {
    let destination = input[0];
    let datesVacation = input[1];
    let countNights = input[2];
    let pricePerNight = 0;
    if (destination === `France`) {
        switch (datesVacation) {
            case `21-23`:
            pricePerNight = 30;
            break;
            case `24-27`:
            pricePerNight = 35;
            break;
            case `28-31`:
            pricePerNight = 40;
            break;
        }
    } else if (destination === `Italy`) {
        switch (datesVacation) {
            case `21-23`:
            pricePerNight = 28;
            break;
            case `24-27`:
            pricePerNight = 32;
            break;
            case `28-31`:
            pricePerNight = 39;
            break;
        }
    } else if (destination === `Germany`) {
        switch (datesVacation) {
            case `21-23`:
            pricePerNight = 32;
            break;
            case `24-27`:
            pricePerNight = 37;
            break;
            case `28-31`:
            pricePerNight = 43;
            break;
        }
    }
    let totalPrice = countNights * pricePerNight;
    console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`)
    
}
trip([ 'Germany', '24-27', '5', '', '' ]);