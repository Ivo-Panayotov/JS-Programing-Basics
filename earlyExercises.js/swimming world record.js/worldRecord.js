function school(Income, Grade, Minsalary) {
    Income = Number(Income);
    Grade = Number(Grade);
    Minsalary = Number(Minsalary);
    let social = 0;
    let excellent = 0;
    let checksocial = false;
    let checkexcellent = false;
    if (Grade > 4.5 && Income < Minsalary) {
        checksocial = true;
        social = Math.floor(Minsalary * 0.35);
    }
    if (Grade >= 5.5) {
        checkexcellent = true;
        excellent = Math.floor(Grade * 25);
    } 
    if (social > excellent && checksocial === true) {
        console.log(`You get a Social scholarship ${social} BGN`);
    } else if (excellent > social && checkexcellent === true) {
        console.log(`You get a scholarship for excellent results ${excellent} BGN`);
    } else {
        console.log(`You cannot get a scholarship!`);
        
    }

}