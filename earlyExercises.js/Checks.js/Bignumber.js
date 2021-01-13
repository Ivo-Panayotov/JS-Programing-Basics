function bignumber(a) {
    a = Number(a);

    if (a < 100) {
        console.log("Less than 100");
    }
    else if (a >200) {
        console.log("Greater than 200")
    }
    else {
        console.log("Between 100 and 200")
    }
}
bignumber(105);