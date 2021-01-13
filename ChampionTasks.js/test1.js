function chessboard(a, b, c) {
 a = Number(a);
 b = Number(b);
 c = Number(c);
 let s = (a + b + c) / 2;
 let result = Math.sqrt(s * (s - a) * (s - b) * (s - c));
 console.log(result);
}
chessboard(2, 3.5, 4);