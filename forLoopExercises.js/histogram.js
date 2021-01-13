function solve(input) {
    let n = Number(input.shift());
    let underTwoHundred = 0;
    let tillThreeNinetyNine = 0;
    let tillFiveNinetyNine = 0;
    let tillSevenNinetyNine = 0;
    let big = 0;
    for(let i = 1; i <= n; i++) {
        let char = Number(input.shift());
        if (char < 200) {
            underTwoHundred ++;
        } else if (char < 400) {
            tillThreeNinetyNine ++;
        } else if (char < 600) {
            tillFiveNinetyNine ++;
        } else if (char < 800) {
            tillSevenNinetyNine ++;
        } else {
            big ++;
        }
    }
    let total = big + underTwoHundred + tillFiveNinetyNine + tillSevenNinetyNine + tillThreeNinetyNine;
    let percentageUnderTwoHundred = (underTwoHundred / total * 100).toFixed(2);
    let percentageUnderFourHundred = (tillThreeNinetyNine / total * 100).toFixed(2);
    let percentageUnderSixHundred = (tillFiveNinetyNine / total * 100).toFixed(2);
    let percentageUnderEightHundred = (tillSevenNinetyNine / total * 100).toFixed(2);
    let percentageBig = (big / total * 100).toFixed(2);
    console.log(`${percentageUnderTwoHundred}%`);
    console.log(`${percentageUnderFourHundred}%`);
    console.log(`${percentageUnderSixHundred}%`);
    console.log(`${percentageUnderEightHundred}%`);
    console.log(`${percentageBig}%`);
   


    
}
solve([5, 22, 403, 807, 503, 206]);