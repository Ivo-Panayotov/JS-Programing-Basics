function paint(x, y, h) {
    x = Number(x);
    y = Number(y);
    h = Number(h);
    let greenFront = (x * x) * 2 - 1.2 * 2;
    let greenAside = ((x * y) - 1.5 * 1.5) * 2;
    let redFront = x * h;
    let redAside = x * y * 2;
    console.log(((greenAside + greenFront) / 3.4).toFixed(2));
    console.log(((redFront + redAside) / 4.3).toFixed(2));
    
}
paint(6, 10, 5.2);