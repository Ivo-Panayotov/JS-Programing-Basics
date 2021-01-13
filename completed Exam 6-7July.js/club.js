function solve(input) {
let expectedProfit = Number(input.shift());
        let currentAmount = 0;

        while(currentAmount < expectedProfit){
            let name = input.shift();
            if(name === 'Party!'){
                console.log(`We need ${(expectedProfit - currentAmount).toFixed(2)} leva more.`)
                break;
            }

            let numberOfCocktails = Number(input.shift());
            let priceOfCocktail = numberOfCocktails * name.length;
            if(priceOfCocktail % 2 == 1){
                priceOfCocktail = priceOfCocktail * 0.75;
            }

            currentAmount += priceOfCocktail;
        }

        if (currentAmount >= expectedProfit) {
            console.log('Target acquired.')
        }

        console.log(`Club income - ${currentAmount.toFixed(2)} leva.`)


}