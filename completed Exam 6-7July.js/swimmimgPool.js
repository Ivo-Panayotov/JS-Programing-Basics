function pool(input) {
    countPeople = Number(input.shift());
    entryFee = Number(input.shift());
    sunbedPrice = Number(input.shift());
    umbrellaPrice = Number(input.shift());
    let totalUmbrellaPrice = Math.ceil(countPeople / 2) * umbrellaPrice;
    let totalSunbedPrice = Math.ceil(countPeople * 0.75) * sunbedPrice;
    let totalEntryFee = entryFee * countPeople;
    console.log(`${(totalSunbedPrice + totalUmbrellaPrice + totalEntryFee).toFixed(2)} lv.`);

}
pool([50, 6, 8, 4]);