function change(input) {
    let countBitcoin = +input[0];
    let countYuan = +input[1];
    let commission = +input[2];
    let priceLVYuan = 0.15 * countYuan * 1.76;
    let yuanInEU = priceLVYuan / 1.95;
    let priceLVBitcoin = 1168;
    let bitcoinEU = 1168 * countBitcoin / 1.95;
    let priceInEuro = yuanInEU + bitcoinEU;
    commission *= priceInEuro / 100;
    console.log((priceInEuro - commission).toFixed(2));
    


}
change([1, 5 ,5])