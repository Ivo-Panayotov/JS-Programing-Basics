function movie(input) {
    let movieName = input.shift();
    let numberOfDays = Number(input.shift());
    let numberOfTickets = Number(input.shift());
    let priceOfTicket = Number(input.shift());
    let cinemaPercentage = Number(input.shift());

    let total = numberOfDays * numberOfTickets * priceOfTicket;
    let cinemaProfit = total * cinemaPercentage / 100;
    let a = (total - cinemaProfit).toFixed(2);



    console.log(`The profit from the movie ${movieName} is ${a} lv.`)
}
movie([`The Programmer`, `20`, `500`, `7.50`, `7`]);