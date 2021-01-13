function sewingFactory(tables, length, width) {
     tables = Number(tables);
     length = Number(length);
     width = Number(width);

     cover = (length + 0.6) * (width + 0.6) * tables;
     rhomb = length / 2 * length / 2 * tables;
     priceUsd = ((cover * 7) + (rhomb * 9));
     console.log((priceUsd.toFixed(2)) + " USD");
     console.log((priceUsd * 1.85).toFixed(2) + " BGN");

}
sewingFactory(10,1.20,0.65)
