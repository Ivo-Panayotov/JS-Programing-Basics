function catWalking(input) {
let minutesWalkPerDay = +input[0];
let countDailyWalks = +input[1];
let dailyReceivedCalories = +input[2];
//every minute walk = 5 calories
//walk is enough if burned 50% calories

let totalCaloriesDailyBurned = minutesWalkPerDay * countDailyWalks * 5;
if (totalCaloriesDailyBurned >= dailyReceivedCalories / 2) {
    console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCaloriesDailyBurned}.`);
} else {
    console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCaloriesDailyBurned}.`);
    
}
}
catWalking([ '30', '3', '600', '' ]);