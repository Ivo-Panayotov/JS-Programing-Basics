function ontime(examHour, examMinute, arrivingHour, arrivingMinute) {
    examHour = Number(examHour);
    examMinute = Number(examMinute);
    arrivingHour = Number(arrivingHour);
    arrivingMinute = Number(arrivingMinute);
    arrivingHourInMinute = 60 * arrivingHour;
    examHourInMinute = 60 * examHour;
    let exactArrive = arrivingHourInMinute + arrivingMinute;
    let exactExam = examHourInMinute + examMinute;
    let onTime;

    if (exactArrive > exactExam) {
        onTime = "Late";
    }else if ((exactArrive + 30) >= exactExam) {
        onTime = "On time"
    } else {
        onTime = "Early"
    }
    console.log(onTime)
    
    let beforeAfter; 

    if (exactArrive < exactExam && exactArrive + 60 > exactExam) {
        beforeAfter = exactExam - exactArrive;

    } else if (exactArrive > exactExam && exactArrive - 60 < exactExam) {
        beforeAfter = 
    }
    }

}
ontime(11, 50, 11, 20);