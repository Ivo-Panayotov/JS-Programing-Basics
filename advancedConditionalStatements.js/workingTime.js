function solve(n, day) {
    n = +n;
    switch (day) {
        case `Monday`:
            case `Tuesday`:
                case `Wednesday`:
                    case `Thursday`:
                        case `Friday`:
                            case `Saturday`:
            if (n >= 10 && n <= 18) {
                console.log(`open`);
            } else {
                console.log(`closed`);
            }
            break;
            case `Sunday`:
                console.log(`closed`);
                break;
                
    }

}
solve(17, `Saturday`);