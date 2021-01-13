function calculator(input) {
    let nameOfSerial = input.shift();
    let countSeasons = Number(input.shift());
    let countEpisods = Number(input.shift());
    let lengthEpisods = Number(input.shift());
    lengthEpisods = lengthEpisods * 1.2;
    let totalTime = (countEpisods * countSeasons * lengthEpisods) + countSeasons * 10;
    totalTime = totalTime / 60;

    console.log(`Total time needed to watch the ${nameOfSerial} series is ${(totalTime)} hours.`);
    
}
calculator([`supernatural`, `15`, `20`, `40`]);