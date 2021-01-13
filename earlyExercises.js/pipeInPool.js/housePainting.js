function housingPainting(x,y,h){
    x = Number(x);
    y = Number(y);
    z = Number(h);
    let redPaint = (x * h)  + (2 * x * y);
    let greenPaint = (x * y * 2) + (x * x * 2) - (1.5 * 1.5 * 2) - (2 * 1.2);
    let redPaintAmount = redPaint / 4.3;
    let greenPaintAmount = greenPaint / 3.4;
    console.log(greenPaintAmount.toFixed(2));
    console.log(redPaintAmount.toFixed(2));
    
}
housingPainting(6,10,5.2);