function cinema(typeProjection, countRaws, countColumns) {
    countColumns = Number(countColumns);
    countRaws = Number(countRaws);
    let fullSeats = countColumns * countRaws; 
    if (typeProjection == "Premiere") {
    console.log((fullSeats * 12).toFixed(2));
    } else if (typeProjection == "Normal") {
        console.log((fullSeats * 7.5).toFixed(2));
    } else if (typeProjection == "Discount") {
        console.log((fullSeats * 5).toFixed(2));
    }

}
cinema("Premiere", 10, 12);