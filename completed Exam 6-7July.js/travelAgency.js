function travel(input) {
    let nameOfTown = input.shift();
    let typeOfPackage = input.shift();
    let VIPDiscount = input.shift();
    let daysHoliday = +input.shift();
    let price = 1;
    let daysNotTrue = false;
    let townTrue = false;
    let checksTrue = false;
    let packageTrue = false;
    let discount = 0;
    if (daysHoliday < 1) {
        daysNotTrue = true;
    } else if (daysHoliday > 7) {
        daysHoliday = daysHoliday - 1;
    }
    if (nameOfTown === `Bansko` || nameOfTown === `Borovets`) {
        if (typeOfPackage === `withEquipment`) {
            price = 100 * daysHoliday;
        } else if (typeOfPackage === `noEquipment`) {
            price = 80 * daysHoliday;
        } else {
            packageTrue = true;
        }
    } else if (nameOfTown === `Varna` || nameOfTown === `Burgas`) {
        if (typeOfPackage === `withBreakfast`) {
            price = 130 * daysHoliday;
        } else if (typeOfPackage === `noBreakfast`) {
            price = 100 * daysHoliday;
        } else {
            packageTrue = true;
        }
    } else {
        townTrue = true;
    }
    if (VIPDiscount === `yes`) {
        if ((nameOfTown === `Bansko` || nameOfTown === `Borovets`) && typeOfPackage === `withEquipment`) {
            discount = price * 0.1;
        }  else if ((nameOfTown === `Bansko` || nameOfTown === `Borovets`) && typeOfPackage === `noEquipment`) {
            discount = price * 0.05;
        } else if ((nameOfTown === `Varna` || nameOfTown === `Burgas`) && typeOfPackage === `withBreakfast`) {
            discount = price * 0.12;
        } else if ((nameOfTown === `Varna` || nameOfTown === `Burgas`) && typeOfPackage === `noBreakfast`) {
            discount = price * 0.07;
        }  
    } else if (VIPDiscount === `no`) {
        discount === 0;
    } else {
        checksTrue = true;
    }
    if (daysNotTrue) {
        console.log(`Days must be positive number!`);
    } else if (checksTrue || packageTrue || townTrue) {
        console.log(`Invalid input!`);
    } else {
        console.log(`The price is ${(price - discount).toFixed(2)}lv! Have a nice time!`)
        
    }
}
travel([`Burgas`, `noBreakfast`, `no`, `4`]);