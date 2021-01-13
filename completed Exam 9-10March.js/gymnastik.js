function gymnastik(input) {
    let country = input[0];
    let device = input[1];
    let result = 0;

    if (country === `Russia`) {
        if (device === `ribbon`) {
            result = 18.5;
        } else if (device === `hoop`) {
            result = 19.1;
        } else if (device === `rope`) {
            result = 18.6;
        }
    } else  if (country === `Bulgaria`) {
        if (device === `ribbon`) {
            result = 19;
        } else if (device === `hoop`) {
            result = 19.3;
        } else if (device === `rope`) {
            result = 18.9;
        }
    } else if (country === `Italy`) {
        if (device === `ribbon`) {
            result = 18.7;
        } else if (device === `hoop`) {
            result = 18.8;
        } else if (device === `rope`) {
            result = 18.850;
        }
    }
    let percentage = ((20 - result) / 20) * 100;
    console.log(`The team of ${country} get ${result.toFixed(3)} on ${device}.`);
    console.log(`${percentage.toFixed(2)}%`);
    
}
gymnastik([ 'Bulgaria', 'ribbon', '' ]);