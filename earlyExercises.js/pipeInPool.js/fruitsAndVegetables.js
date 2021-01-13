function FruitsVegetables(priceKgVegetables,priceKgFruits,totalKgVegetables,totalKgFruits) {
    priceKgFruits = Number(priceKgFruits);
    priceKgVegetables = Number(priceKgVegetables);
    totalKgFruits = Number(totalKgFruits);
    totalKgVegetables = Number(totalKgVegetables);
    let totalAmountEuro = (totalKgFruits * priceKgFruits + totalKgVegetables * priceKgVegetables) / 1.94;
     console.log(totalAmountEuro.toFixed(2));
      
}
FruitsVegetables(0.194,19.4,10,10);