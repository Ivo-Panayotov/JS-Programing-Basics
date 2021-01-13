function journey(input) {
    let wantedDestination = input.shift();

    while (wantedDestination != `End`) {
        let sum = 0;
        let wantedAmount = +input.shift();
        while (sum < wantedAmount) {
            let savedMoney = +input.shift()
            sum += savedMoney;
        }
            console.log(`Going to ${wantedDestination}!`);
        wantedDestination = input.shift();
    }

}
journey([`Greece`, 1000, 200, 200, 300, 100, 150, 240, `Spain`, 1200, 300, 500, 193, 423, `End`]);