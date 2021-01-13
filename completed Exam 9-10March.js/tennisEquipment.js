function tennis(input) {
    let priceTennisRacket = +input[0];
    let countRackets = +input[1];
    let countSportShoes = +input[2];
    let priceSportShoes = priceTennisRacket / 6;
    let shoesAndRackets = (priceSportShoes * countSportShoes) + (countRackets * priceTennisRacket);
    let others = shoesAndRackets * 0.2;
    let total = shoesAndRackets + others;
    console.log(`Price to be paid by Djokovic ${Math.floor(total / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(total * 7 / 8)}`);
    
}
tennis([850, 4, 2]);