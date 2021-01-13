function circle(r) {
    r = Number(r);
    let areaCircle = Math.PI * r * r;
    let perimeterCircle = 2 * Math.PI * r;
    console.log(areaCircle.toFixed(2));
    console.log(perimeterCircle.toFixed(2));
    

}
circle(3)