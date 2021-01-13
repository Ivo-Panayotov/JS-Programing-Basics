function solve(priceHoliday, countPuzzles, countDolls, countBears, countMinions, countTRucks) {
priceHoliday = Number(priceHoliday);
countBears = Number(countBears);
countDolls = Number(countDolls);
countMinions = Number(countMinions);
countPuzzles = Number(countPuzzles);
countTRucks = Number(countTRucks);
let pricePuzzle = 2.6;
let priceDOll = 3;
let priceBear = 4.1;
let priceMinion = 8.2;
let priceTruck = 2;
let totalPrice = countPuzzles * pricePuzzle + countDolls * priceDOll + countBears * priceBear + countMinions * priceMinion + countTRucks * priceTruck;

if (countTRucks + countPuzzles + countMinions + countDolls + countBears >= 50) {
totalPrice = totalPrice * 0.75;
}
totalPrice = totalPrice * 0.9;

if (totalPrice  >= priceHoliday){
    console.log(`Yes! ${(totalPrice - priceHoliday).toFixed(2)} lv left.`);
} else {
    console.log(`Not enough money! ${(priceHoliday - totalPrice).toFixed(2)} lv needed.`);
    
}
}

solve(40.8, 20, 25, 30, 50, 10);