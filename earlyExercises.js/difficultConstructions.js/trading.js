function tradingAgreement(town, volumeSales) {
    volumeSales = Number(volumeSales);
    let tradingPrice = 0;
    let hasTown = true;
    if (town === "Sofia") {
        if (volumeSales >= 0 && volumeSales <= 500)
            tradingPrice = (volumeSales * 0.05).toFixed(2);
        else if (volumeSales > 500 && volumeSales <= 1000)
            tradingPrice = (volumeSales * 0.07).toFixed(2);
        else if (volumeSales > 1000 && volumeSales <= 10000)
            tradingPrice = (volumeSales * 0.08).toFixed(2);
        else if (volumeSales > 10000)
            tradingPrice = (volumeSales * 0.12).toFixed(2);
        
    } else if (town === "Varna") {
        if (volumeSales >= 0 && volumeSales <= 500)
            tradingPrice = (volumeSales * 0.045).toFixed(2);
        else if (volumeSales > 500 && volumeSales <= 1000)
            tradingPrice = (volumeSales * 0.075).toFixed(2);
        else if (volumeSales > 1000 && volumeSales <= 10000)
            tradingPrice = (volumeSales * 0.1).toFixed(2);
        else if (volumeSales > 10000)
            tradingPrice = (volumeSales * 0.13).toFixed(2);

    } else if (town === "Plovdiv") {
        if (volumeSales >= 0 && volumeSales <= 500)
            tradingPrice = (volumeSales * 0.055).toFixed(2);
        else if (volumeSales > 500 && volumeSales <= 1000)
            tradingPrice = (volumeSales * 0.08).toFixed(2);
        else if (volumeSales > 1000 && volumeSales <= 10000)
            tradingPrice = (volumeSales * 0.12).toFixed(2);
        else if (volumeSales > 10000)
            tradingPrice = (volumeSales * 0.145).toFixed(2);
           
    } else { 
        hasTown = false;
    } 



    if (tradingPrice < 0 || !hasTown) {
        console.log("error")
    } else {
        console.log(tradingPrice)
    }
}


tradingAgreement("Varna", 490);