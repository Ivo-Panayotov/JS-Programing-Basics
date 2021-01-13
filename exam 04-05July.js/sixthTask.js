function six(input) {
    let index = 0;
    let command = input[index++];


    while (command !== `Midnight`) {
        let negativeCheck = false;
        let studentName = command;
        let studentPoints = 0;

        for (let i = 1; i <= 6; i++) {
            let points = Number(input[index++]);
            if (points < 0) {
                negativeCheck = true;
                studentPoints = points;
                break;
            }
            studentPoints += points;
        }
        if (negativeCheck) {
            console.log(`${studentName} was cheating!`);
        } else {
            studentPoints = Math.floor(studentPoints / 6);
            studentPoints *= 0.06;
            if (studentPoints < 3) {
                console.log(`${studentName} - 2.00`);
            } else if (studentPoints > 5) {
                console.log(`===================`);
                console.log(`|   CERTIFICATE   |`);
                console.log(`|    ${studentPoints.toFixed(2)}/6.00    |`);
                console.log(`===================`);
                console.log(`Issued to ${studentName}`)
            } else if (studentPoints > 2) {
                console.log(`${studentName} - ${studentPoints.toFixed(2)}`);
            }
        }
        command = input[index++];
    }
}
six([
    'George', '100', '100',
    '100', '100', '40',
    '0', 'John', '10',
    '-1', 'Peter', '100',
    '100', '100', '100',
    '100', '70', 'Midnight']);