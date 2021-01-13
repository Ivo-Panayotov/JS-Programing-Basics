function snooker(input) {
    let phaseOfTournament = input[0];
    let typeOfTicket = input[1];
    let countTickets = +input[2];
    let pictureWithTrophey = input[3];
    let price = 0;
    let isTrue = false;
   

    if (phaseOfTournament === `Quarter final`) {
        if (typeOfTicket === `Standard`) {
            price = 55.5 * countTickets;
        } else if (typeOfTicket === `Premium`) {
            price = 105.2 * countTickets;
        } else if (typeOfTicket === `VIP`) {
            price = 118.9 * countTickets;
        }
    } else if (phaseOfTournament === `Semi final`) {
        if (typeOfTicket === `Standard`) {
            price = 75.88 * countTickets;
        } else if (typeOfTicket === `Premium`) {
            price = 125.22 * countTickets;
        } else if (typeOfTicket === `VIP`) {
            price = 300.4 * countTickets;
        }
    } else if (phaseOfTournament === `Final`) {
        if (typeOfTicket === `Standard`) {
            price = 110.1 * countTickets;
        } else if (typeOfTicket === `Premium`) {
            price = 160.66 * countTickets;
        } else if (typeOfTicket === `VIP`) {
            price = 400 * countTickets;
        }
    }
    if (price > 4000) {
        isTrue = true;
        price *= 0.75;
    } else if (price > 2500) {
        price *= 0.9;
    }
    if (pictureWithTrophey === `Y`) {
        price += 40 * countTickets;
    }
    if (pictureWithTrophey === `Y` && isTrue === true) {
        price -= 40 * countTickets;
    }
        
    
    console.log(price.toFixed(2));
}
snooker([ 'Semi final', 'VIP', '9', 'Y' ]);