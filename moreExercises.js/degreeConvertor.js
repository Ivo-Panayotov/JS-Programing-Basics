function solve(celsius) {
    celsius = Number(celsius);
    let Fahrenheit = celsius * 1.8 + 32;
    console.log(Fahrenheit.toFixed(2));
    

}
solve(`25`);
//T(°F) = T(°C) × 1.8 + 32 