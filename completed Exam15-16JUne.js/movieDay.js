function movie(input) {
    let timeForPictures = Number(input.shift());
    let numberScenes = Number(input.shift());
    let durationPerScene = Number(input.shift());
    let preparationTime = timeForPictures * 0.15;
    let difference = (timeForPictures - preparationTime) - numberScenes * durationPerScene;
    if ( (timeForPictures - preparationTime) >= (numberScenes * durationPerScene)) {
    console.log(`You managed to finish the movie on time! You have ${difference.toFixed(0)} minutes left!`);
    } else  {
    console.log(`Time is up! To complete the movie you need ${Math.abs(difference.toFixed(0))} minutes.`);
    }
}
movie([`120`, `10`, `11`]);