function oscars(input) {
    let nameOfMovie = input.shift();
    let typeOfHall = input.shift();
    let countTicketsSold = Number(input.shift());
    let priceTicket = 0;

    if (nameOfMovie === `A Star Is Born`) {
        if (typeOfHall === `normal`) {
            priceTicket = 7.5;
        } else if (typeOfHall === `luxury`) {
            priceTicket = 10.5;
        } else if (typeOfHall === `ultra luxury`) {
            priceTicket = 13.5;
        }
    } else if (nameOfMovie === `Bohemian Rhapsody`) {
        if (typeOfHall === `normal`) {
            priceTicket = 7.35;
        } else if (typeOfHall === `luxury`) {
            priceTicket = 9.45;
        } else if (typeOfHall === `ultra luxury`) {
            priceTicket = 12.75;
        }
    } else if (nameOfMovie === `Green Book`) {
        if (typeOfHall === `normal`) {
            priceTicket = 8.15;
        } else if (typeOfHall === `luxury`) {
            priceTicket = 10.25;
        } else if (typeOfHall === `ultra luxury`) {
            priceTicket = 13.25;
        }
    } else if (nameOfMovie === `The Favourite`) {
        if (typeOfHall === `normal`) {
            priceTicket = 8.75;
        } else if (typeOfHall === `luxury`) {
            priceTicket = 11.55;
        } else if (typeOfHall === `ultra luxury`) {
            priceTicket = 13.95;
        }
    }
    let income = (countTicketsSold * priceTicket).toFixed(2);
    console.log(`${nameOfMovie} -> ${income} lv.`)
}
oscars([`Green Book`, `normal`, 63]);