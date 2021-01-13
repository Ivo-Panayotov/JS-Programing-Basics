function solve(typeFuel, n) {
    n = +n;
   if (typeFuel === `Diesel` && n >= 25) {
       console.log(`You have enough diesel.`);
   } else if (typeFuel === `Diesel` && n < 25) {
       console.log(`Fill your tank with diesel!`);
   } else if (typeFuel === `Gasoline` && n >= 25) {
    console.log(`You have enough gasoline.`);
} else if (typeFuel === `Gasoline` && n < 25) {
    console.log(`Fill your tank with gasoline!`);
}  else if (typeFuel === `Gas` && n >= 25) {
    console.log(`You have enough gas.`);
} else if (typeFuel === `Gas` && n < 25) {
    console.log(`Fill your tank with gas!`);
} else {
    console.log(`Invalid fuel!`);
    
}

}
solve(`Diesel`, 10);