function operatorMobile(input) {
    let durationOfContract = input[0];
    let typeOfContract = input[1];
    let addMobileInternet = input[2];
    let countMonthsPayment = input[3];
    let price = 0;
    let mobileInternetPrice = 0;
    if (durationOfContract === `one`) {
        switch (typeOfContract) {
            case `Small`:
                price = 9.98;
                break;
                case `Middle`:
                price = 18.99;
                break;
                case `Large`:
                price = 25.98;
                break;
                case `ExtraLarge`:
                price = 35.99;
                break;
        }
    } else {
        switch (typeOfContract) {
            case `Small`:
                price = 8.58;
                break;
                case `Middle`:
                price = 17.09;
                break;
                case `Large`:
                price = 23.59;
                break;
                case `ExtraLarge`:
                price = 31.79;
                break;
        }

    }
    if (addMobileInternet === `yes`) {
        if (price <= 10) {
            mobileInternetPrice = 5.5;
        } else if (price <= 30.00) {
            mobileInternetPrice = 4.35;
        } else {
            mobileInternetPrice = 3.85;
        }
        price = price + mobileInternetPrice;
    } 
    if (durationOfContract === `two`) {
        price *= 0.9625;
    }

    console.log(`${(price * countMonthsPayment).toFixed(2)} lv.`)
    
}
operatorMobile([ 'one', 'Small', 'yes', '10' ]);