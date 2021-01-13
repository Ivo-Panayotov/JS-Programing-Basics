function solve(hours,minutes){
    hours = Number(hours);
    minutes = Number(minutes);

    if (minutes < 45) {
        minutes = minutes + 15;
    
    } else if(minutes > 54) {
        hours = hours + 1;
        minutes = minutes + 15;
        minutes = minutes%60;
        
    } else if(minutes > 44) {
        hours = hours + 1;
        minutes = minutes + 15;
        minutes = "0" + (minutes % 60);
    }
    if (hours === 24) {
        hours = 0;
    } 
    console.log(`${hours}:${minutes}`);
}
solve(1,44);
solve(0,01);
solve(23,59);
solve(11,08);
solve(12,49);