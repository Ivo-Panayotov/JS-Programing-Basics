function trapetsArea(b1,b2,h) {
    b1 = Number(b1);
    b2 = Number(b2);
    h = Number(h);
    let areaTrapezoid = (b1 + b2) * h /2;
    console.log(areaTrapezoid.toFixed(2)); 
}
trapetsArea(8,13,7)