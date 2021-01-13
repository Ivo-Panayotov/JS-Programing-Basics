function house(typeFlower, countFlower, budget) {
    countFlower = +countFlower;
    budget = +budget;
    let totalAmount = 0;
    if (typeFlower === `Roses`) {
        totalAmount = (countFlower * 5);
        if (countFlower > 80) {
            totalAmount = totalAmount * 0.9;
        }
    } else  if (typeFlower === `Dahlias`) {
        totalAmount = (countFlower * 3.8);
        if (countFlower > 90) {
            totalAmount = totalAmount * 0.85;
        }
    } else  if (typeFlower === `Tulips`) {
        totalAmount = (countFlower * 2.8);
        if (countFlower > 80) {
            totalAmount = totalAmount * 0.85;
        }
    } else  if (typeFlower === `Narcissus`) {
        totalAmount = (countFlower * 3);
        if (countFlower < 120) {
            totalAmount = totalAmount * 1.15;
        }
    } else  if (typeFlower === `Gladiolus`) {
        totalAmount = (countFlower * 2.5);
        if (countFlower < 80) {
            totalAmount = totalAmount * 1.2;
        }
    }
    if (budget >= totalAmount) {
        console.log(`Hey, you have a great garden with ${countFlower} ${typeFlower} and ${(budget - totalAmount).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalAmount - budget).toFixed(2)} leva more.`);
        
    }
   
}
house(`Roses`, 55, 250);