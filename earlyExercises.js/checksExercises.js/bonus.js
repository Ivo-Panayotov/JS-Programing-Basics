function solve(startingPoints) {
    startingPoints = Number(startingPoints);
    firstBonus = 0;
     if (startingPoints<= 100) {
         firstBonus = 5;
     } else if (startingPoints > 1000) {
         firstBonus = startingPoints * 0.1;
     } else if (startingPoints<=1000) {
         firstBonus = startingPoints * 0.2;
     }
     let extraBonus = 0;
     if (startingPoints%2===0) {
         extraBonus = 1;
     } else if (startingPoints%5===0) {
         extraBonus = 2; 
     }
     console.log(firstBonus + extraBonus);
     console.log(startingPoints + firstBonus + extraBonus);
}
solve(175);