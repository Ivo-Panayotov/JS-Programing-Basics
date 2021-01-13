function ontime(hourOfExam, minuteOfExam, hourOfArriving, minuteOfArriving ) {
    hourOfArriving = +hourOfArriving;
    minuteOfArriving = +minuteOfArriving;
    hourOfExam = +hourOfExam;
    minuteOfExam = +minuteOfExam;
    hourOfExam = hourOfExam * 60;
    hourOfArriving = hourOfArriving * 60;
    let timeOfArrival = hourOfArriving + minuteOfArriving;
    let timeOfExam = hourOfExam + minuteOfExam;

    if ( timeOfArrival <= timeOfExam && timeOfArrival + 30 >= timeOfExam) {
        console.log(`On time`);
    } else if (timeOfArrival > timeOfExam) {
        console.log(`Late`);
    } else {
        console.log(`Early`);
    }
     if (timeOfExam - timeOfArrival > 0 && timeOfExam - timeOfArrival < 60) {
        console.log(`${timeOfExam - timeOfArrival} minutes before the start`);
    } else if (timeOfExam > timeOfArrival) {
        if (((timeOfExam - timeOfArrival) % 60) < 10) {
            console.log(`${Math.floor((timeOfExam - timeOfArrival) / 60)}:0${(timeOfExam - timeOfArrival)% 60} hours before the start`);
        } else {
            console.log(`${Math.floor((timeOfExam - timeOfArrival) / 60)}:${(timeOfExam - timeOfArrival)% 60} hours before the start`);
        }
        
    } else if (timeOfArrival > timeOfExam && timeOfArrival - timeOfExam < 60) {
        console.log(`${timeOfArrival - timeOfExam} minutes after the start`);
    } else if (timeOfArrival > timeOfExam) {
        if (((timeOfArrival - timeOfExam) % 60) < 10) {
            console.log(`${Math.floor((timeOfArrival - timeOfExam) / 60)}:0${(timeOfArrival - timeOfExam)% 60} hours after the start`);
        } else {
            console.log(`${Math.floor((timeOfArrival - timeOfExam) / 60)}:${(timeOfArrival - timeOfExam)% 60} hours after the start`);
        }
    }
}
ontime(9, 00, 10, 30);