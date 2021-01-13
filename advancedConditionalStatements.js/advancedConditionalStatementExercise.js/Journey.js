function holiday(budget, season) {
    budget = +budget;
    let expenses = 0;
    let accommodation;
    let destination;

    if (budget <= 100) {
        destination = `Bulgaria`
        if (season === `summer`) {
            accommodation = `Camp`;
            expenses = budget * 0.3; 
        } else {
            expenses = budget * 0.7;
            accommodation = `Hotel`;
        }
    } else if (budget <= 1000) {
        destination = `Balkans`
        if (season === `summer`) {
            accommodation = `Camp`
            expenses = budget * 0.4; 
        } else {
            accommodation = `Hotel`
            expenses = budget * 0.8;
        }

    } else {
        destination = `Europe`
            expenses = budget * 0.9;
            accommodation = `Hotel`;
        

    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${accommodation} - ${expenses.toFixed(2)}`);
    
    

}
holiday(50, `summer`);