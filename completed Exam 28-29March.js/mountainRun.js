function run(input) {
    let record = +input[0];
    let distance = +input[1];
    let timeGeorgiFor1Meter = +input[2];
    //every 50 m 30 sec delay
    let timeGeorgi = distance * timeGeorgiFor1Meter;
    let delay = Math.floor(distance / 50);
    delay *= 30;
    let georgiTotal = timeGeorgi + delay;
    if (georgiTotal < record) {
        console.log(`Yes! The new record is ${georgiTotal.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(georgiTotal - record).toFixed(2)} seconds slower.`);
    }

}
run([5554.36,
    1340,
    3.23]);