function solve(input) {
    let currentNumber = input.shift();  
    let sumPrime = 0;
    let sumNotPrime = 0;
     while (currentNumber !== `stop`) {
        currentNumber = +currentNumber;
         if (currentNumber < 0) {
             console.log(`Number is negative.`); 
             currentNumber = input.shift();
             continue;
         }
         let isPrime = true;
         for (let i = 2, s = Math.sqrt(currentNumber); i <= s; i++) {
             if (currentNumber % i === 0) {
               isPrime = false;
                 break;
             }
        }
        if (isPrime) {
            sumPrime += currentNumber;
        } else {
            sumNotPrime += currentNumber;
        }
         
         currentNumber = input.shift();
     }
     console.log(`Sum of all prime numbers is: ${sumPrime}`);
     console.log(`Sum of all non prime numbers is: ${sumNotPrime}`);


}
solve([3, 9, 0, 7, 19, 4, `stop`]);