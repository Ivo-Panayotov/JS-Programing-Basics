function fish(mackerelPriceKG, spratPriceKG, kgPalamud, kgScad, kgMussels) {
    mackerelPriceKG = Number(mackerelPriceKG);
    spratPriceKG = Number(spratPriceKG);
    kgPalamud == Number(kgPalamud);
    kgScad = Number(kgScad);
    kgMussels = Number(kgMussels);

    let MusselsPriceKG = 7.5;
    let scadPriceKG = 1.8 * spratPriceKG;
    let palamudPriceKG = 1.6 * mackerelPriceKG;
    console.log((MusselsPriceKG * kgMussels + palamudPriceKG * kgPalamud + scadPriceKG * kgScad).toFixed(2)); 

}
fish(6.9, 4.2, 1.5, 2.5, 1);