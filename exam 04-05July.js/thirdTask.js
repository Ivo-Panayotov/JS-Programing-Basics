function three(difficulty, rotation, countPages) {
difficulty = Number(difficulty);
rotation = Number(rotation);
countPages = Number(countPages);

    if (difficulty >= 80 && rotation >= 80 && countPages >= 8) {
        console.log(`Legacy`);
    } else if (difficulty >= 80 && rotation <= 10) {
        console.log(`Master`);
    } else if (difficulty <= 10) {
        console.log(`Elementary`);
    } else if (difficulty <= 30 && countPages <= 1) {
        console.log(`Easy`);
    } else if (rotation >= 50 && countPages >= 2) {
        console.log(`Hard`);
    } else {
        console.log(`Regular`);
    }
}
three(90, 60, 2);