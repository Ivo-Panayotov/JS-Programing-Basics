function tickets(input) {
    let nameOfTheMovie = input.shift();
    let studentCount = 0;
    let standartCount = 0;
    let kidCount = 0;
    let totalCount = 0;
    while (nameOfTheMovie !==  `Finish`) {
        let freeSeats = +input.shift();
        let typeOfTheTicket = input.shift();
        let count = 0;
        while (typeOfTheTicket !== `End`) {
            if (typeOfTheTicket === `student`) {
                studentCount++;
            } else if (typeOfTheTicket === `standard`) {
                standartCount++;
            } else {
                kidCount++;
            }
            count++;
            if (count === freeSeats) {
                break;
                
            }
            typeOfTheTicket = input.shift();
        }
        totalCount += count;
        console.log(`${nameOfTheMovie} - ${(count / freeSeats * 100).toFixed(2)}% full.`);
        nameOfTheMovie = input.shift();
    }
    console.log(`Total tickets: ${totalCount}`);
    console.log(`${(studentCount / totalCount * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standartCount / totalCount * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCount / totalCount * 100).toFixed(2)}% kids tickets.`);
}
tickets([
    'Taxi', '10',
    'standard', 'kid',
    'student', 'student',
    'standard', 'standard',
    'End', 'Scary Movie',
    '6', 'student',
    'student', 'student',
    'student', 'student',
    'student', 'Finish'
]


);