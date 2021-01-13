function transport(n, partOfTheDay) {
    n = Number(n);
    let total = 0;

    if (n < 20) {
        if (partOfTheDay == "day") {
            total = 0.7 + n * 0.79;
        } else {
            total = 0.7 + n * 0.9;
        }
    } else if (n < 100) {
        total = n * 0.09;
    } else {
        total = n * 0.06;
    }
    console.log(t.toFixed(2));
    
}
transport(5, `day`);
