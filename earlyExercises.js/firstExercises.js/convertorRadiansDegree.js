function convertor(radians) {
    radians = Number(radians);
    let degree = Math.floor(radians * 180 / Math.PI);
    console.log(degree);
}
convertor(3.1416)