function shop(priceExcursion,numberPuzzles,numberDolls,numberBears,numberMinions,numbertrucks){
    let pricePuzzle = 2.6;
    let priceDoll = 3;
    let priceBear = 4.1;
    let priceTruck = 2;
    let priceMinion = 8.2;
    let totalBearPrice = priceBear*numberBears;
    let totalTruckPrice = priceTruck*numbertrucks;
    let totalMinionPrice = priceMinion*numberMinions;
    let totalPuzzlePrice = numberPuzzles*pricePuzzle;
    let totalDollsPrice = priceDoll*numberDolls;
    let totalPrice = totalMinionPrice + totalPuzzlePrice + totalTruckPrice + totalDollsPrice + totalBearPrice;
     

     if ((numbertrucks + numberPuzzles + numberMinions + numberDolls + numberBears)>=50) {
         total = totalPrice - (totalPrice * 0.25);
     }    
     let rent = totalPrice*0.1;
     let moneyLeft = total - rent - priceExcursion;  
     let moneyNotEnough = priceExcursion + rent - total;  
     if (total - rent >=priceExcursion)  {
         console.log(`Yes! ${moneyLeft} lv left.`);
     } else {
         console.log(`Not enough money! ${moneyNotEnough} lv needed.`)
     }

    }
shop(40.8,20,25,30,50,10);