function exam(input) {
    let numberOfUnsatisfactoryGrades = +input.shift();
    let nameOfTask = input.shift();
    let gradeOfTask = +input.shift();
    let gradesCount = 0;
    let sumGrades = 0;
    let lastTask;
    let unsatisfactoryGrades = 0;
    while (nameOfTask !== `Enough`) {
        lastTask = nameOfTask;
        gradesCount++;
        if (gradeOfTask <= 4) {
            unsatisfactoryGrades++;
            if (unsatisfactoryGrades ===numberOfUnsatisfactoryGrades) {
                break;
            }
        }
        sumGrades += gradeOfTask;
        nameOfTask = input.shift();
        gradeOfTask = +input.shift();
    }
    if (unsatisfactoryGrades === numberOfUnsatisfactoryGrades) {
        console.log(`You need a break, ${numberOfUnsatisfactoryGrades} poor grades.`);
    } else {
        console.log(`Average score: ${(sumGrades / gradesCount).toFixed(2)}`);
        console.log(`Number of problems: ${gradesCount}`);
        console.log(`Last problem: ${lastTask}`);
    }

}
exam([3, `Money`, 6, `Story`, 4, `Spring Time`, 5, `Bus`, 6, `Enough`]);