function invalidNumber(input) {
     input = Number(input);
     if (!((input >= 100 && input <= 200) || input ==0)) {
         console.log("invalid");
         
     }

}
invalidNumber(105);
