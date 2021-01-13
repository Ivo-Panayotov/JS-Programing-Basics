function hospital(input) {
    let periodOfResearch = Number(input.shift());
    let treatedPatients = 0;
    let untreatedPatients = 0;
    let doctorsCount = 7;
    let incomePatients = Number(input.shift());
    for (let i = 1; i <= periodOfResearch; i++) {
        if (i % 3 === 0) {
            if (untreatedPatients > treatedPatients) {
                doctorsCount++;
            }
        }
        if (incomePatients <= doctorsCount) {
            treatedPatients += incomePatients;
        } else {
            treatedPatients += doctorsCount;
            untreatedPatients += (incomePatients - doctorsCount);
        }
        incomePatients = Number(input.shift())
    }
    console.log(`Treated patients: ${Math.trunc(treatedPatients)}.`);
    console.log(`Untreated patients: ${Math.trunc(untreatedPatients)}.`);
}
hospital([6, 25, 25, 25, 25, 25, 2]);