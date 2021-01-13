function solve(product, day, quantity) {
    quantity = +quantity;
    let price = 0;
    if (day === `Monday` || day === `Tuesday` || day === `Wednesday` || day === `Thursday` || day === `Friday`) {
        switch (product) {
            case `banana` :
                price = 2.5;
    console.log((price * quantity).toFixed(2));
                break;
                case `apple`:
                    price = 1.2;
                    console.log((price * quantity).toFixed(2));
                    break;
                    case `orange` :
                price = 0.85;
                console.log((price * quantity).toFixed(2));
                break;
                case `grapefruit`:
                    price = 1.45;
                    console.log((price * quantity).toFixed(2));
                    break;
                    case `kiwi` :
                price = 2.7;
                console.log((price * quantity).toFixed(2));
                break;
                case `pineapple`:
                    price = 5.5;
                    console.log((price * quantity).toFixed(2));
                    break;
                    case `grapes`:
                        price =3.85;
                        console.log((price * quantity).toFixed(2));
                        break; 
                        default :
                        console.log(`error`);
                        break;                        
        }
    } else if (day === `Saturday` || day === `Sunday`) {
        switch (product) {
            case `banana` :
                price = 2.7;
                console.log((price * quantity).toFixed(2));
                break;
                case `apple`:
                    price = 1.25;
                    console.log((price * quantity).toFixed(2));
                    break;
                    case `orange` :
                price = 0.90;
                console.log((price * quantity).toFixed(2));
                break;
                case `grapefruit`:
                    price = 1.60;
                    console.log((price * quantity).toFixed(2));
                    break;
                    case `kiwi` :
                price = 3;
                console.log((price * quantity).toFixed(2));
                break;
                case `pineapple`:
                    price = 5.6;
                    console.log((price * quantity).toFixed(2));
                    break;
                    case `grapes`:
                        price =4.2;
                        console.log((price * quantity).toFixed(2));
                        break; 
                        default :
                        console.log(`error`);
                        break;                        
        } 
    } else {
        console.log(`error`);
        
    }
    
}
solve(`apple`, `Tuesday`, `2`);