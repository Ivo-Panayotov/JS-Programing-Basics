function house(input) {
    let n = Number(input);
    let star = 2;
   if (n % 2 === 0) {
       for (let i = n; i > 0; i -= 2) {
           console.log(`${"-".repeat(i / 2 - 1)}${"*".repeat(star)}${"-".repeat(i / 2 - 1)}`);
           star+= 2;
       }
       for (let j = 1; j <= n / 2; j++) {
        console.log(`|${"*".repeat(n - 2)}|`);
       }
   } else {
       
       let star = 1;
       for (let i = n; i > 0; i -= 2) {
           console.log(`${"-".repeat((i - 1) / 2)}${"*".repeat(star)}${"-".repeat((i - 1) / 2)}`);
           star += 2;
       }
       for (let j = 1; j <= (n - 1) / 2; j++) {
        console.log(`|${"*".repeat(n - 2)}|`);
       }
   }
}
house([5]);