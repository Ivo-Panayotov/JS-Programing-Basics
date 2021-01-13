function moviePremiere(input) {
    let movie = input.shift();
    let packegaForMovie = input.shift();
    let countTickets = Number(input.shift());
    let ticketPrice = 0;

    if (movie === `John Wick`) {
        if (packegaForMovie === `Drink`) {
            ticketPrice = 12;
        } else if (packegaForMovie === `Popcorn`) {
            ticketPrice = 15;
        } else if (packegaForMovie === `Menu`) {
            ticketPrice = 19;
        }
    } else if (movie === `Star Wars`) {
        if (packegaForMovie === `Drink`) {
            ticketPrice = 18;
        } else if (packegaForMovie === `Popcorn`) {
            ticketPrice = 25;
        } else if (packegaForMovie === `Menu`) {
            ticketPrice = 30;
        }
    } else if (movie === `Jumanji`) {
        if (packegaForMovie === `Drink`) {
            ticketPrice = 9;
        } else if (packegaForMovie === `Popcorn`) {
            ticketPrice = 11;
        } else if (packegaForMovie === `Menu`) {
            ticketPrice = 14;
        }
    } 
    if (movie === `Star Wars` && countTickets >= 4) {
        ticketPrice = ticketPrice * 0.7;
    }
    if (movie === `Jumanji` && countTickets === 2) {
        ticketPrice = ticketPrice * 0.85;
    }
    let totalAmount = ticketPrice * countTickets;
    console.log(`Your bill is ${totalAmount.toFixed(2)} leva.`);

    
}
moviePremiere([`John Wick`, `Drink`, `6`]);