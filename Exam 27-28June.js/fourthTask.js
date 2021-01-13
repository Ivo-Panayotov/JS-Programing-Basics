function fourthCase(startPopulation, years) {
   let currentPopulation = startPopulation;
    for (let i = 1; i <= years; i++) {
        currentPopulation += currentPopulation / 10 * 2;
        if (i % 5 === 0) {
            currentPopulation -= currentPopulation / 50 * 5;
        }
        
        currentPopulation -= currentPopulation / 20 * 2; 
    }
    console.log(`Beehive population: ${currentPopulation}`);
    
}
fourthCase(100, 6);
fourthCase(1000, 23);