function trecking(input) {
    let numberGroupsClimbers = +input[0];
    let index = 1;
    let countPeopleCUrrentGroup = +input[index++];
    let counter = 0;
    let counterMusala = 0;
    let counterMonblan = 0;
    let counterKilimandjaro = 0;
    let counterK2 = 0;
    let counterEverest = 0;
    
    for (let i = 1; i <= numberGroupsClimbers; i++) {
        counter += countPeopleCUrrentGroup;
        if (countPeopleCUrrentGroup <= 5) {
            counterMusala += countPeopleCUrrentGroup;
        } else  if (countPeopleCUrrentGroup <= 12) {
            counterMonblan += countPeopleCUrrentGroup;
        } else  if (countPeopleCUrrentGroup <= 25) {
            counterKilimandjaro += countPeopleCUrrentGroup;
        } else  if (countPeopleCUrrentGroup <= 40) {
            counterK2 += countPeopleCUrrentGroup;
        } else {
            counterEverest += countPeopleCUrrentGroup;
        }

        countPeopleCUrrentGroup = +input[index++];
    }
    console.log(`${(counterMusala / counter * 100).toFixed(2)}%`);
    console.log(`${(counterMonblan / counter * 100).toFixed(2)}%`);
    console.log(`${(counterKilimandjaro / counter * 100).toFixed(2)}%`);
    console.log(`${(counterK2 / counter * 100).toFixed(2)}%`);
    console.log(`${(counterEverest / counter * 100).toFixed(2)}%`);
    

}
trecking([
    '10', '10',  '5',
    '1',  '100', '12',
    '26', '17',  '37',
    '40', '78']);