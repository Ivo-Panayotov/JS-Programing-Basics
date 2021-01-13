function cinema(typeOfVideo, rows, columns) {
    rows = +rows;
    columns = +columns;
    let ticket = 0;
    let cinemaCapacity = rows * columns;
    if (typeOfVideo === `Premiere`) {
        ticket = 12;
    } else if(typeOfVideo === `Normal`) {
        ticket = 7.5;
    } else {
        ticket = 5;
    }
    console.log((cinemaCapacity * ticket).toFixed(2));
    
}
cinema(`Premiere`, 10, 12);