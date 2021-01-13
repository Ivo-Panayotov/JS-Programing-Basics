function delivery(input) {
    let chicken = 10.35;
    let fish = 12.40;
    let veggi = 8.15;
    let countChicken = input[0];
    let countFish = input[1];
    let countVeggi = input[2];
    let price = chicken * countChicken + fish * countFish + veggi * countVeggi;
    let desert = price * 0.2;
    let delivery = 2.5;
    let total = price + desert + delivery;
    console.log(`Total: ${total.toFixed(2)}`);
    

}
delivery(['2', '4', '3' ]
);