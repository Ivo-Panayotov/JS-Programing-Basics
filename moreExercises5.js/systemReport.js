function solve(input) {
   let expectedSum = +input.shift();
   let sum = 0;
   let cashPayment = 0;
   let cardPayment = 0;
   let cashCount = 0;
   let cardCount = 0;

   let PaymentCash = input.shift();
   while (PaymentCash !== `End`) {
    let PaymentCard = +input.shift();
       PaymentCash = +PaymentCash;
       if (PaymentCash <= 100) {
           cashPayment += PaymentCash;
           sum += PaymentCash; 
           cashCount++;
           console.log(`Product sold!`);
       } else {
           console.log(`Error in transaction!`);  
       }
       if (PaymentCard >= 10) {
           cardPayment += PaymentCard;
           sum += PaymentCard;
           cardCount++;
           console.log(`Product sold!`);
       }  else {
        console.log(`Error in transaction!`);  
    }
    if (sum >= expectedSum) {
        break;
    }
       PaymentCash = input.shift();
   }
   if (sum >= expectedSum) {
       console.log(`Average CS: ${(cashPayment / cashCount).toFixed(2)}`);
       console.log(`Average CC: ${(cardPayment / cardCount).toFixed(2)}`);
   } else {
       console.log(`Failed to collect required money for charity.`);
       
   }

}
solve([500, 120, 8, 63, 256, 78, 317]);