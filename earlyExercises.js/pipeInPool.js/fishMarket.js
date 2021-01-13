function fishMarket(priceSkumria,priceTsatsa,kgPalamud,kgSafrid,kgMidi){
priceSkumria = Number(priceSkumria);
priceTsatsa = Number(priceTsatsa);
kgPalamud = Number(kgPalamud);
kgSafrid = Number(kgSafrid);
kgMidi = Number(kgMidi);

let priceMidi = 7.5;
let pricePalamud = priceSkumria * 1.6;
let priceSafrid = priceTsatsa * 1.8;
let totalAmount = priceMidi * kgMidi + pricePalamud * kgPalamud + priceSafrid * kgSafrid;
console.log(totalAmount.toFixed(2));

}
fishMarket(6.9,4.2,1.5,2.5,1);