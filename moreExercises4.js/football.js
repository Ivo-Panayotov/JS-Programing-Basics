function kingFootball(input) {
    let stadiumCapacity = Number(input.shift());
    let countFootballFans = Number(input.shift());
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;
    let allFans = (countFootballFans / stadiumCapacity * 100).toFixed(2);
    let currentSector = (input.shift());
    for (i = 1; i <= countFootballFans; i ++) {
        if (currentSector === `A`) {
            sectorA ++;
        } else if (currentSector === `B`) {
            sectorB ++;
        } else if (currentSector === `V`) {
            sectorV ++;
        } else {
            sectorG ++;
        }
        currentSector = (input.shift());
    }
    console.log(`${(sectorA / countFootballFans * 100).toFixed(2)}%`)
    console.log(`${(sectorB / countFootballFans * 100).toFixed(2)}%`)
    console.log(`${(sectorV / countFootballFans * 100).toFixed(2)}%`)
    console.log(`${(sectorG / countFootballFans * 100).toFixed(2)}%`)
    console.log(`${allFans}%`);
}
kingFootball([76, 10, `A`, `V`, `V`, `V`, `G`, `B`, `A`, `V`, `B`, `B`]);