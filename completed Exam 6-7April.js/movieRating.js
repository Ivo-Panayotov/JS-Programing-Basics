function solve(input) {
    moviesAttached = Number(input.shift());
    let highestRating = Number.MIN_SAFE_INTEGER;
    let lowestRating = Number.MAX_SAFE_INTEGER; 
    let totalRating = 0;
    let movieWithHighestRating;
    let movieWithLowestRating;
    for (i = 0; i < moviesAttached; i ++) {
        let nameOfMovie = input.shift();
        let ratingOfMovie = Number(input.shift());
        totalRating += ratingOfMovie;

        if (ratingOfMovie > highestRating) {
            highestRating = ratingOfMovie;
            movieWithHighestRating = nameOfMovie;
        }
        if (ratingOfMovie < lowestRating) {
            lowestRating = ratingOfMovie;
            movieWithLowestRating = nameOfMovie;
        }
    }
    let averageRating = totalRating / moviesAttached;

    console.log(`${movieWithHighestRating} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${movieWithLowestRating} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);
}
solve([`5`, `A Star is Born`, `7.8`, `Creed 2`, `7.3`, `Mary Poppins`, `7.2`, `Vice`, `7.2`, `Captain Marvel`, `7.1`])