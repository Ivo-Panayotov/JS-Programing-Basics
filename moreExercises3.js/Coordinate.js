function coordinate(x1, y1, x2, y2, x, y) {
    x= +x;
    y = +y;
    x1 = +x1;
    x2 = +x2;
    y1 = +y1;
    y2 = +y2;
    if ((x1 == x || x2 == x) && (y <= y2 && y >= y1)){
        console.log(`Border`);
    } else if((y == y1 || y == y2) && (x >= x1 && x <= x2)) {
        console.log(`Border`);
    } else {
        console.log(`Inside / Outside`);
        
    }
}
coordinate(2, -3, 12, 3, 8, -1);