function solve(x1, y1, x2, y2, x, y) {
    x1 = +x1;
    x2 = +x2;
    x = +x;
    y1 = +y1;
    y2 = +y2;
    y = +y;
    if ((x === x1 || x === x2) && (y >= y1 && y <= y2)) {
        console.log(`Border`);
    }else if ((y === y1 || y === y2) && (x >= x1 && x <= x2)) {
        console.log(`Border`);
    } else {
        console.log(`Inside / Outside`);
        
    }

}
solve(2, -3, 12, 3, 2, 4)