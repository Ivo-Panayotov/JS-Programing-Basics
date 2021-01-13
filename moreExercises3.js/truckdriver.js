function solve(season, kmPerMonth) {
    kmPerMonth = +kmPerMonth;
    let lvPerKilometer = 0;
    if (season === `Autumn` || season === `Spring`) {
        if (kmPerMonth <= 5000) {
            lvPerKilometer = 0.75;
        } else if (kmPerMonth <= 10000) {
            lvPerKilometer = 0.95;
        }
    } else if (season === `Summer`) {
        if (kmPerMonth <= 5000) {
            lvPerKilometer = 0.9;
        } else if (kmPerMonth <= 10000) {
            lvPerKilometer = 1.1;
        }
    } else if (season === `Winter`) {
        if (kmPerMonth <= 5000) {
            lvPerKilometer = 1.05;
        } else if (kmPerMonth <= 10000) {
            lvPerKilometer = 1.25;
        }
    }
    if (kmPerMonth > 10000) {
        lvPerKilometer = 1.45;
    }
    let salaryAfterTaxes =(kmPerMonth * lvPerKilometer * 4);
    salaryAfterTaxes = salaryAfterTaxes * 0.9;
    console.log(salaryAfterTaxes.toFixed(2));
    
}
solve(`Summer`, 3455);