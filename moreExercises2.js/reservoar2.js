function solve(typeFuel, quantityFuel, discountCard) {
    quantityFuel = +quantityFuel;
    let Gas = 0.93;
    let Gasoline = 2.22;
    let Diesel = 2.33;
    let discount = 0;
    if (discountCard === `Yes`) {
        Gas = Gas - 0.08;
        Gasoline = Gasoline - 0.18;
        Diesel = Diesel - 0.12;
    } 
    let total = 0;
    if (typeFuel === `Gas`) {
        total = Gas * quantityFuel;
    } else if (typeFuel === `Gasoline`) {
        total = Gasoline * quantityFuel;
    } else if (typeFuel === `Diesel`) {
        total = Diesel * quantityFuel;
    }
    if (quantityFuel >= 20 && quantityFuel <= 25) {
        discount = total * 0.08;
    } else if (quantityFuel > 25) {
        discount = total * 0.10
    }
    console.log(`${(total - discount).toFixed(2)} lv.`)
}
solve(`Gas`, 30, `Yes`);