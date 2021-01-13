function solve(input) {
    let nameOfTheStudent = input.shift();
    let total = 0;
    let expelled = false;
    let currentGrade = +input.shift();
    let count = 0;
    while (count < 12) {

        count++;
        total += currentGrade;
        if (currentGrade < 4) {
            currentGrade = +input.shift();
        if (currentGrade < 4) { 
            expelled = true;
            break;
        }
    }
        currentGrade = +input.shift();
    }
    if (expelled == true) {
        console.log(`${nameOfTheStudent} has been excluded at ${count} grade`);
    } else {
        total = total / 12;
        console.log(`${nameOfTheStudent} graduated. Average grade: ${total.toFixed(2)}`);
        
    }

}
solve([`Gosho`, 5, 5.5, 6, 5.43, 5.5, 6, 5.55, 5, 6, 6, 5.43, 5]);