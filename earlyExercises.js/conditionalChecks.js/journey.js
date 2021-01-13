function holiday(budget, season) {
    budget = Number(budget);
     let destination = "";
     let moneySpended = 0;
     let typeHoliday = "Hotel";
    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            moneySpended = (budget * 0.3).toFixed(2);
            typeHoliday = "Camp";
        } else if (season == "winter") {
            moneySpended = (budget * 0.7).toFixed(2);
        }
    }else if (budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            moneySpended = (budget * 0.4).toFixed(2);
            typeHoliday = "Camp";
        } else if (season == "winter") {
            moneySpended = (budget * 0.8).toFixed(2);
        }
    }else if (budget > 1000) {
        destination = "Europe";
        moneySpended = (budget * 0.9).toFixed(2);
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${typeHoliday} - ${moneySpended}`);
}
holiday(700, "winter");