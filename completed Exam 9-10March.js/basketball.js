function basketball(input) {
    let annualTax = +input[0];

    let priceShoes = annualTax * 0.6;
    let uniform = priceShoes * 0.8;
    let ball = uniform * 0.25;
    let basketballaccessories = ball * 0.2;
    let total = annualTax + priceShoes + uniform + ball + basketballaccessories;
    console.log(total.toFixed(2));
    

}
basketball([ '320', '' ]);