function lunch(input) {
    let serialName = input.shift();
    let lengthEpisode = Number(input.shift());
    let lengthBrake = Number(input.shift());
    let timeForLunch = lengthBrake / 8;
    let timeForRelax = lengthBrake / 4;
    let freeTime = lengthBrake - timeForLunch - timeForRelax;
    let difference = Math.abs(freeTime - lengthEpisode);
    if (freeTime >= lengthEpisode) {
       console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(difference)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(difference)} more minutes.`);
    }

}
lunch([`Game of Thrones`, `60`, `95`]);