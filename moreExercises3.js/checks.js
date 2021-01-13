function solve(budget, typeCategory, countPeople) {
    budget = +budget;
    countPeople = +countPeople;
    let ticketPrice = 0;
    let transportPrice = 0;

    if (typeCategory === `Normal`) {
        ticketPrice = 249.99;
    } else if (typeCategory === `VIP`) {
        ticketPrice = 499.99;
    }    
        if (countPeople <= 4) {
            transportPrice = budget * 0.75;
        } else  if (countPeople <= 9) {
            transportPrice = budget * 0.6;
        } else  if (countPeople <= 24) {
            transportPrice = budget * 0.5;
        } else  if (countPeople <= 49) {
            transportPrice = budget * 0.4;
        } else  if (countPeople > 49) {
            transportPrice = budget * 0.25;
        }
        if (budget >= (transportPrice + (countPeople * ticketPrice))) {
            let positiveAmount = budget - transportPrice - (countPeople * ticketPrice); 
            console.log(`Yes! You have ${positiveAmount.toFixed(2)} leva left.`);
        } else {
            let negativeAmount = transportPrice + (countPeople * ticketPrice) - budget;
            console.log(`Not enough money! You need ${negativeAmount.toFixed(2)} leva.`);
            
        }
        
    

}
solve(1000, `Normal`, 1);