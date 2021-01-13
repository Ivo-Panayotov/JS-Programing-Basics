function movie(input) {
    let titleOfTheMovie = input.shift();
    let topMovie;
    let topPoints = 0;
    let countMovies = 1;

    while (titleOfTheMovie !== `STOP`) {
        let counter = 0;
        let amount = 0;
        
        for (let i = 0; i < titleOfTheMovie.length; i++) {
            if (titleOfTheMovie.charCodeAt(i) === 32) {
                amount = 32;
            }else if (titleOfTheMovie.charCodeAt(i) < 58 && titleOfTheMovie.charCodeAt(i) >= 48) {
                amount = titleOfTheMovie.charCodeAt(i);
            } else if (titleOfTheMovie.charCodeAt(i) < 91) {
                amount = titleOfTheMovie.charCodeAt(i) - titleOfTheMovie.length;
            } else {
                amount = titleOfTheMovie.charCodeAt(i) - (titleOfTheMovie.length * 2);
            }
            counter += amount;
            
            
        }
        if (counter > topPoints) {
            topPoints = counter;
            topMovie = titleOfTheMovie;
        }
        if (countMovies >= 7) {
            console.log(`The limit is reached.`);           
            break;
        }
        countMovies++;
        titleOfTheMovie = input.shift();
    }
    console.log(`The best movie for you is ${topMovie} with ${topPoints} ASCII sum.`)
    
}
movie([ `The maze`,
    `School story 2`,
    `Shrek 2`,
    `Ice age`,
    `STOP`]);