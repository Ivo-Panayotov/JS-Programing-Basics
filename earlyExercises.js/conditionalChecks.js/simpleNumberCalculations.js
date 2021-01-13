function solve(n1, n2, operator) {
    n1 = Number(n1);
    n2 = Number(n2);
    let sum = (n1 + n2);
    let evenOdd = "";

    if (operator == "+") {
        if (sum % 2 === 0) {
            evenOdd = "even";
            console.log(n1 + " + " + n2 + " = " + sum + " - " + evenOdd);
        } else if (sum % 2 === 1) {
            evenOdd = "odd";
            console.log(n1 + " + " + n2 + " = " + sum + " - " + evenOdd);
        }
    } else if (operator === "-") {
        sum = (n1 - n2);
        if (sum % 2 === 0) {
            evenOdd = "even";
            console.log(n1 + " - " + n2 + " = " + sum + " - " + evenOdd);
        } else if (sum % 2 === 1) {
            evenOdd = "odd";
            console.log(n1 + " - " + n2 + " = " + sum + " - " + evenOdd);
        }
    } else if (operator === "*") {
        sum = (n1 * n2);
        if (sum % 2 === 0) {
            evenOdd = "even";
            console.log(n1 + " * " + n2 + " = " + sum + " - " + evenOdd);
        } else if (sum % 2 === 1) {
            evenOdd = "odd";
            console.log(n1 + " * " + n2 + " = " + sum + " - " + evenOdd);
        }
    } else if (operator === "/") {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            sum = (n1 / n2).toFixed(2);
            console.log(n1 + " / " + n2 + " = " + sum);
        }
    } else if (operator === "%") {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            sum = (n1 % n2);
            console.log(n1 + " % " + n2 + " = " + sum);
        }
    }

}
solve(7,3, "*");