function solve(number, inPut, outPut) {
    number = Number(number);
    //converting input in metres
    if (inPut === "mm") {
        number = number / 1000;
    } else if(inPut === "cm") {
        number = number / 100;
    }
    //converting output in metres
    if (outPut === "mm") {
        number = number * 1000;
    } else if (outPut === "cm") {
        number = number * 100;
    }
    console.log(number.toFixed(3));
}
   
solve(12,"mm","m");
solve(150,"m","cm");
solve(45,"cm","mm");