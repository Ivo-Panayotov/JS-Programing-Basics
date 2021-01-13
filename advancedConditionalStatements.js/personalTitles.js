function solve(age, gender) {
    if (age >= 16 && gender === `m`) {
        console.log(`Mr.`);
    } else if (age >= 16 && gender === `f`) {
        console.log(`Ms.`);
    } else if (age < 16 && gender === `f`) {
        console.log(`Miss`);
    } else if (age < 16 && gender === `m`) {
        console.log(`Master`);
    } 
}
solve(12, `f`);