function five(countStudents, countTasks, trainerEnergy) {
    countTasks = Number(countTasks)
    countStudents = Number(countStudents);
    trainerEnergy = Number(trainerEnergy)
    let breakCheck = false;
    let tasksSolved = 0;
    let questionsAsked = 0;
    while (trainerEnergy > 0) {
        trainerEnergy += countTasks * 2;
        tasksSolved += countTasks;
        countStudents -= countTasks;
        if (countStudents < 10) {
            breakCheck = true;
            break;
        }
        trainerEnergy -= countStudents * 6;
        questionsAsked += 2 * countStudents;
        countStudents += countStudents / 10;
    }
    if (breakCheck) {
        console.log(`The students are too few!`);
        console.log(`Problems solved: ${tasksSolved}`);
    } else {
        console.log(`The trainer is too tired!`);
        console.log(`Questions asked: ${questionsAsked}`);
    }

}
five(20, 1, 100);