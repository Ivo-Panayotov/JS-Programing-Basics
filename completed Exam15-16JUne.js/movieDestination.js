function destinationMovie(input) {
    let budget = Number(input.shift());
    let destination = input.shift();
    let season = input.shift();
    let countDays = Number(input.shift());
    let pricePerDay = 100000;
    
    if (destination === `Dubai`) {
        if (season === `Winter`) {
            pricePerDay = 45000;
        } else if (season === `Summer`) {
            pricePerDay = 40000;
        }
    } else if (destination === `Sofia`) {
        if (season === `Winter`) {
            pricePerDay = 17000;
        } else if (season === `Summer`) {
            pricePerDay = 12500;
        }
    } else if (destination === `London`) {
        if (season === `Winter`) {
            pricePerDay = 24000;
        } else if (season === `Summer`) {
            pricePerDay = 20250;
        }
    }
    let totalAmount = countDays * pricePerDay;

    if (destination === `Dubai`) {
        totalAmount = totalAmount * 0.7;
    } else if (destination === `Sofia`) {
        totalAmount = totalAmount * 1.25;
    }
    let difference = (budget - totalAmount).toFixed(2);
    if (budget >= totalAmount) {
        console.log(`The budget for the movie is enough! We have ${difference} leva left!`);
    } else {
        console.log(`The director needs ${(totalAmount - budget).toFixed(2)} leva more!`);
        
    }

}
destinationMovie([`400000`, `Sofia`, `Summer`, `20`]);