function easter(input) {
    let amountEggs = +input[0];
    let index = 1;
    let colour = input[index++];
    let orangeCounter = 0;
    let redCounter = 0;
    let blueCounter = 0;
    let greenCounter = 0;
    
    for (let i = 1; i <= amountEggs; i++) {
        switch (colour) {
            case `red`:
                redCounter++;
                break;
            case `blue`:
                blueCounter++;
                break;
            case `green`:
                greenCounter++;
                break;
            case `orange`:
                orangeCounter++;
                break;
        }

        colour = input[index++]
    }
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let maxColour = ``;
   let newArray = [redCounter, `red`, blueCounter, `blue`, greenCounter, `green`, orangeCounter, `orange`];
   for (let i = 0; i <= newArray.length - 1; i += 2) {
       let newElement = Number(newArray[i]);
       let newColor = newArray[i + 1];

       if (newElement > maxNumber) {
           maxNumber = newArray[i];
           maxColour = newColor;
       }
   }
    
    console.log(`Red eggs: ${redCounter}`);
    console.log(`Orange eggs: ${orangeCounter}`);
    console.log(`Blue eggs: ${blueCounter}`);
    console.log(`Green eggs: ${greenCounter}`);
    console.log(`Max eggs: ${maxNumber} -> ${maxColour}`);
    

}
easter(['7', 'orange', 'blue', 'green', 'green', 'blue', 'red', 'green', '']);