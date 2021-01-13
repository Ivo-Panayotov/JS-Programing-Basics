function four(countStudents, seasons) {
    seasons = Number(seasons);
    let studentsGoingFurther = countStudents;
    
    for (let i = 1; i <= seasons; i++) {
        studentsGoingFurther = Math.ceil(studentsGoingFurther * 0.9);
        studentsGoingFurther = Math.ceil(studentsGoingFurther * 0.9);

        studentsGoingFurther = Math.ceil(studentsGoingFurther * 0.8);
        if (i % 3 === 0) {
            studentsGoingFurther += Math.ceil(studentsGoingFurther * 0.15);
        } else {
            studentsGoingFurther += Math.ceil(studentsGoingFurther * 0.05);
        }
        
    }

    console.log(`Students: ${studentsGoingFurther}`);
}
four(100, 6);