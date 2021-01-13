function AreaFigure(text,number, number1) {
    number = Number(number);
    number1 = Number(number1);

    if (text == "square") {
        console.log(number * number);
    }else if (text == "rectangle") {
        console.log(number1 * number);
    }else if (text == "circle") {
        console.log(Math.PI * number * number);
    } else if(text == "triangle"){
        console.log(number1 * number / 2)
    }

}
AreaFigure("square",5,6);