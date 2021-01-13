function one(countStudents, countTasks) {
countStudents = Number(countStudents);
countTasks = Number(countTasks);
let submissions = countStudents * Math.ceil(countTasks * 2.8);
let extrasubmission = (countStudents * Math.floor(countTasks / 3));
let totalSubmissions = submissions + extrasubmission;
console.log(`${5 * Math.ceil(totalSubmissions / 10)} KB needed`);

console.log(`${totalSubmissions} submissions`);


}
one(11, 7);