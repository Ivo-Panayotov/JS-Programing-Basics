function building(input) {
    let countFloors = +input.shift();
    let countRooms = +input.shift();

    for (let i = countFloors; i >= 1; i--) {
        let sum = ``;
        for (let j = 0; j < countRooms; j++) {
            if (i === countFloors) {
                sum += `L${i}${j} `
            } else if (i % 2 === 0) {
                sum += `O${i}${j} `
            } else {
                sum += `A${i}${j} `;
            }
        }
        console.log(sum);
    }
}
building([6, 4]);