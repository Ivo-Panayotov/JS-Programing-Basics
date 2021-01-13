function solve(input) {
    let target = 10000;
    let steps = 0;
    let stepsForTheDay;
    let count = 1;

    while (steps < target) {
        stepsForTheDay = input.shift();
        if (stepsForTheDay === `Going home`) {
            steps += +input.shift(); 
            break;
        } else {
            stepsForTheDay = +stepsForTheDay;
        }
        steps += stepsForTheDay;
        count++;
    }
    if (steps >= target) {
        console.log(`Goal reached! Good job!`);
        console.log(`${(steps - target)} steps over the goal!`);
    } else {
        console.log(`${(target - steps)} more steps to reach goal.`);
        
    }
}
solve([1000, 1500, 2000, 6500]);