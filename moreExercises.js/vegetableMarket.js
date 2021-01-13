function solve(priceKGVegetables, priceKGFruits, totalKGVegetables, totalKGFruits) {
    priceKGVegetables = Number(priceKGVegetables);
    priceKGFruits = Number(priceKGFruits);
    totalKGFruits = Number(totalKGFruits);
    totalKGVegetables = Number(totalKGVegetables);
    let totalFruits = priceKGFruits * totalKGFruits / 1.94;
    let totalVegetables = priceKGVegetables * totalKGVegetables / 1.94;
    console.log((totalFruits + totalVegetables).toFixed(2));
    
}
solve();