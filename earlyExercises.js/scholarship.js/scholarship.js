function solve(incomeLv,studentGrade,minimumSalary) {
    incomeLv = Number(incomeLv);
    studentGrade = Number(studentGrade);
    minimumSalary = Number(minimumSalary);
    let socialScholarship = Math.floor(minimumSalary * 0.35);
    let excellentScholarship = Math.floor(studentGrade * 25);
    if (studentGrade <= 4.5) {
        console.log(`You cannot get a scholarship!`);
    } else if (studentGrade > 4.5) {
        if (socialScholarship > excellentScholarship, incomeLv < minimumSalary)
        console.log(`You get a Social scholarship ${socialScholarship} BGN`); 
        else console.log(`You cannot get a scholarship!`);
       
    } else if (studentGrade >= 5.5){
        if (excellentScholarship >= socialScholarship)
        console.log(`You get a scholarship for excellent results ${excellentScholarship} BGN`);
        else if (excellentScholarship < socialScholarship)
        console.log(`You get a Social scholarship ${socialScholarship} BGN`)
        else console.log(`You cannot get a scholarship!`)

    }

    
}
solve (500.00,5.65,550.00);