function solve(input) {
    let countOpenTabs = Number(input.shift());
    let salary = Number(input.shift());
    let openTabs = input.shift();
    for (let i = 1; i <= countOpenTabs; i ++) {
        
        if (openTabs === `Facebook`) {
            salary -= 150;
        } else if (openTabs === `Instagram`) {
            salary -= 100;
        } else if (openTabs === `Reddit`) {
            salary -= 50;
        }
        if (salary <= 0) {
            break;
        }
        openTabs = input.shift();
    }
    if (salary <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(Math.trunc(salary));
        
    }


}
solve([3, 500, `Facebook`, `Stack`, `Softuni.bg`]);