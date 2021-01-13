function grades (input) {
    let countStudents = Number(input.shift());
    let topStudents = 0;
    let overFourStudents = 0;
    let overThreeStudents = 0;
    let weakStudents = 0;
    let averageGrade = 0;
    let currentGrade = Number(input.shift());
    for (let i = 1; i <= countStudents; i ++) {
        averageGrade += currentGrade;
        if (currentGrade < 3) {
            weakStudents ++;
        } else if (currentGrade < 4) {
            overThreeStudents ++;
        } else if (currentGrade < 5) {
            overFourStudents ++;
        } else {
            topStudents ++;
        }
        currentGrade = Number(input.shift())
    }
    console.log(`Top students: ${(topStudents / countStudents * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(overFourStudents / countStudents * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(overThreeStudents / countStudents * 100).toFixed(2)}%`);
    console.log(`Fail: ${(weakStudents / countStudents * 100).toFixed(2)}%`);
    console.log(`Average: ${(averageGrade / countStudents).toFixed(2)}`)
}
grades([10, 3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44,5]);