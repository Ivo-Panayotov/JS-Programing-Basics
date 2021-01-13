function solve(city, amountOfDeal) {
    amountOfDeal = +amountOfDeal;
   let comission = 0;
    if (amountOfDeal < 0) {
        console.log(`error`);
    } else if (amountOfDeal >=0 && amountOfDeal <= 500) {
        if (city === `Sofia`) {
            comission = amountOfDeal * 0.05;
            console.log(comission.toFixed(2));
        } else if (city === `Varna`) {
            comission = amountOfDeal * 0.045;
            console.log(comission.toFixed(2));
        } else if (city === `Plovdiv`) {
            comission = amountOfDeal * 0.055;
            console.log(comission.toFixed(2));
        } else {
            console.log(`error`);
        }
    } else if (amountOfDeal > 500 && amountOfDeal <= 1000) {
        if (city === `Sofia`) {
            comission = amountOfDeal * 0.07;
            console.log(comission.toFixed(2));
        } else if (city === `Varna`) {
            comission = amountOfDeal * 0.075;
            console.log(comission.toFixed(2));
        } else if (city === `Plovdiv`) {
            comission = amountOfDeal * 0.08;
            console.log(comission.toFixed(2));
        } else {
            console.log(`error`);
        }
    } else if (amountOfDeal >1000 && amountOfDeal <= 10000) {
        if (city === `Sofia`) {
            comission = amountOfDeal * 0.08;
            console.log(comission.toFixed(2));
        } else if (city === `Varna`) {
            comission = amountOfDeal * 0.1;
            console.log(comission.toFixed(2));
        } else if (city === `Plovdiv`) {
            comission = amountOfDeal * 0.12;
            console.log(comission.toFixed(2));
        } else {
            console.log(`error`);
        }
    } else if (amountOfDeal >10000) {
        if (city === `Sofia`) {
            comission = amountOfDeal * 0.12;
            console.log(comission.toFixed(2));
        } else if (city === `Varna`) {
            comission = amountOfDeal * 0.13;
            console.log(comission.toFixed(2));
        } else if (city === `Plovdiv`) {
            comission = amountOfDeal * 0.145;
            console.log(comission.toFixed(2));
        } else {
            console.log(`error`);
        }
    } 
    
}
solve(`Sofia`, 10000)