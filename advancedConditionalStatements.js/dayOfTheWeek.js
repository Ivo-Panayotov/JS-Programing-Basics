function weekDay(n) {
    if (n === `1`) {
        console.log(`Monday`);
    } else if (n === `2`) {
        console.log(`Tuesday`);
    } else if (n === `3`) {
        console.log(`Wednesday`);
    } else if (n === `4`) {
        console.log(`Thursday`);
    } else if (n === `5`) {
        console.log(`Friday`);
    } else if (n === `6`) {
        console.log(`Saturday`);
    } else if (n === `7`) {
        console.log(`Sunday`);
    } else {
        console.log(`Error`);
    }
    switch (n) {
        case `1`:
            console.log(`Monday`);
            break;
            case `2`:
                console.log(`Tuesday`);
                break;
                case `3`:
            console.log(`Wednesday`);
            break;
            case `4`:
                console.log(`Thursday`);
                break;
                case `5`:
            console.log(`Friday`);
            break;
            case `6`:
                console.log(`Saturday`);
                break;
                case `7`:
                    console.log(`Sunday`);
                    break;
                    default :
                    console.log(`Error`);
                    break;
                    

                    
                
            
    }
}
weekDay(`2`);