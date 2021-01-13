function aquarium(length, width, height,sand) {
    let squareArea = length * width * height;
    let amountLitter = squareArea * 0.001;
    let final = (amountLitter - (sand * amountLitter * 0.01));
    console.log(final.toFixed(3));
} 
aquarium(105,77,89,18.5);