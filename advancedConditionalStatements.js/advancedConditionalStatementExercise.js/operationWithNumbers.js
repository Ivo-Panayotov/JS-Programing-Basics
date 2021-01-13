function solve(n1, n2, operator) {
    n1 = +n1;
    n2 = + n2;
    let oddEven;

    if (operator === `+`) {
        if ((n1 + n2) % 2 === 0) {
            oddEven = `even`;
        } else {
            oddEven = `odd`;
        }
        console.log(`${n1} + ${n2} = ${(n1 + n2)} - ${oddEven}`);
    } else if (operator === `-`) {
        if ((n1 - n2) % 2 === 0) {
            oddEven = `even`;
        } else {
            oddEven = `odd`;
        }
        console.log(`${n1} - ${n2} = ${(n1 - n2)} - ${oddEven}`);
    } else if (operator === `*`) {
        if ((n1 * n2) % 2 === 0) {
            oddEven = `even`;
        } else {
            oddEven = `odd`;
        }
        console.log(`${n1} * ${n2} = ${(n1 * n2)} - ${oddEven}`);
    } else if (operator === `/`) {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
        console.log(`${n1} / ${n2} = ${(n1 / n2).toFixed(2)}`);
        }
    } else if (operator === `%`) {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
        console.log(`${n1} % ${n2} = ${(n1 % n2)}`);
        }
    }

}
solve(10, 1, `-`);