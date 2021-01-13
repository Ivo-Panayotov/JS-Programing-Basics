function solve(width, height) {
    width = Number(width);
    height = Number(height);
    let correctWidth = Math.floor(width * 100 / 120);
    let correctHeight = Math.floor((height- 1) * 100 / 70);
    console.log(correctHeight * correctWidth - 3);

}
solve(`15`, `8.9`);