function door(input) {
    let hundreds = Number(input[0]);
    let tens = Number(input[1]);
    let ones = Number(input[2]);
    let border = hundreds * 100 + tens * 10 + ones;
  
    for (let i = 2; i <= hundreds; i += 2) {
        for (let j = 2; j <= tens && j <= 7; j ++) {
           if (j > 2 && j % 2 === 0) {
               continue;
           }
           for (let k = 2; k <= ones; k += 2) {
               console.log(`${i} ${j} ${k}`);
               
           }
        }   
     
        
    }
    

}
door([ '3', '5', '5' ]);