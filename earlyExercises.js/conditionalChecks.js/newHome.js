function homeWithFlowers(typeFlowers, numberFlowers,budget) {
    numberFlowers = Number(numberFlowers);
    budget = Number(budget);
    let totalAmount = 0;
     
    if (typeFlowers === "Roses" && numberFlowers > 80) {
        totalAmount = (numberFlowers * 5) * 0.9;
    } else if (typeFlowers === "Roses") {
        totalAmount = 5 * numberFlowers ;
    }
    if (typeFlowers === "Dahlias" && numberFlowers > 90) {
        totalAmount = (numberFlowers * 3.8) * 0.85;
    } else if (typeFlowers === "Dahlias") {
        totalAmount = 3.8 * numberFlowers ;
    }
    if (typeFlowers === "Tulips" && numberFlowers > 80) {
        totalAmount = (numberFlowers * 2.8) * 0.85;
    } else if (typeFlowers === "Tulips") {
        totalAmount = 2.8 * numberFlowers ;
    }
    if (typeFlowers === "Narcissus" && numberFlowers < 120) {
        totalAmount = (numberFlowers * 3) * 1.15;
    } else if (typeFlowers === "Narcissus") {
        totalAmount = 3 * numberFlowers ;
    }
    if (typeFlowers === "Gladiolus" && numberFlowers < 80) {
        totalAmount = (numberFlowers * 2.5) * 1.20;
    } else if (typeFlowers === "Gladiolus") {
        totalAmount = 2.5 * numberFlowers ;
    }
    if (budget >= totalAmount) {
        let restMoney = (budget - totalAmount).toFixed(2);
        console.log(`Hey, you have a great garden with ${numberFlowers} ${typeFlowers} and ${restMoney} leva left.`);
    } else {
        let moneyNeeded = (totalAmount - budget).toFixed(2);
        console.log(`Not enough money, you need ${moneyNeeded} leva more.`)

        }

    
}
homeWithFlowers("Narcissus", 119, 360);