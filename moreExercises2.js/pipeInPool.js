function solve(V, pipe1, pipe2, hoursMissing) {
    V = +V;
    pipe1 = +pipe1;
    pipe2 = +pipe2;
    hoursMissing = +hoursMissing;
    let debitPipe1 = pipe1 * hoursMissing;
    let debitPipe2 = pipe2 * hoursMissing;
    let pipe1percent = debitPipe1 / (debitPipe2 + debitPipe1) * 100;
    let pipe2percent = debitPipe2 / (debitPipe2 + debitPipe1)* 100;
    if (debitPipe1 + debitPipe2 <= V) {
        let totalPercent =(debitPipe1 + debitPipe2) / V * 100;
        console.log(`The pool is ${totalPercent.toFixed(2)}% full. Pipe 1: ${pipe1percent.toFixed(2)}%. Pipe 2: ${pipe2percent.toFixed(2)}%.`);   
    } else {
        let overflow = debitPipe1 + debitPipe2 - V;
        console.log(`For ${hoursMissing.toFixed(2)} hours the pool overflows with ${overflow} liters.`);
        

    }


}
solve(1000,
    100,
    120,
    3);