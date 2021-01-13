function leapYear(leapNumber, endingNumber) {
    leapNumber = + leapNumber;
    endingNumber = +endingNumber;
    for(let i = leapNumber; i <= endingNumber; i += 4) {
        console.log(i);
        

    }

}
leapYear(1900, 1918);