function areas(text, a, b) {
    a = Number(a);
    b = Number(b);
    let area = 0;
    if (text == "square") {
        area = a * a;
    }else if (text == "rectangle") {
        area = a * b;
    }else if(text == "circle") {
        area = Math.PI * a * a;
    }else if(text == "triangle") {
        area = a * b / 2;
    }
    console.log(area.toFixed(3));
    
}
function areas(triangle,5,2);