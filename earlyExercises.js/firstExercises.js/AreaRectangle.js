function AreaRectangle(x1, y1, x2, y2) {
    x1 = Number(x1);
    x2 = Number(x2);
    y1 = Number(y1);
    y2 = Number(y2);
    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);
    let perimeter = (2 *(a + b)).toFixed(2);
    let area = (a * b).toFixed(2);
    console.log(area);
    console.log(perimeter);
}
AreaRectangle (60, 20, 10, 50);