function enigma(input) {
    let n = +input.shift();
    let lima = Number(input.shift());
    let password = ``;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = 97; k < (97 + lima); k ++) {
                for (let l = 97; l < 97 + lima; l ++) {
                    for (let m = 1; m <= n; m ++) {
                        if (m > i && m > j) {   
                            let ka = String.fromCharCode(k);
                            la = String.fromCharCode(l);                   
                                password += `${i}${j}${ka}${la}${m} `; 
                                
                        }
                    }
                }
            }  
        }
    } 
    
    console.log(password);
    
}
enigma([2, 4]);