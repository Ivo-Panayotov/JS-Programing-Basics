function trainers(input) {
    let numbersOfJury = Number(input.shift());
    let nameOfPresentation = input.shift();
    let totalSum = 0;
    let gradeCount = 0;
    let whileCount = 0;
    while (nameOfPresentation !== `Finish`) {
        whileCount++;
        gradeCount = 0;
        for (let i = 1; i <= numbersOfJury; i++) {
            let grade = +input.shift();
            gradeCount += grade;
        }
        console.log(`${nameOfPresentation} - ${(gradeCount / numbersOfJury).toFixed(2)}.`);
        totalSum += gradeCount;
        nameOfPresentation = input.shift();     
    }
    console.log(`Student's final assessment is ${(totalSum /(numbersOfJury * whileCount)).toFixed(2)}.`)  
}
trainers(['2', 'While-Loop', '6.00', '5.50', 'For-Loop', '5.84', '5.66', 'Finish'])
