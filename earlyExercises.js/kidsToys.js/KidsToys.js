function Toyshop(holiday,counta,countb,countc,countd,counte) {
    holiday = Number(holiday);
    counta = Number(counta);
    countb = Number(countb);
    countc = Number(countc);
    countd = Number(countd);
    counte = Number(counte);
    let pricea = 2.60;
    let priceb = 3.00;
    let pricec = 4.10;
    let priced = 8.20;
    let pricee = 2.00;
    let totalWin = pricea*counta + priceb*countb + pricec*countc + priced*countd + pricee*counte;
    
    if (countb+counta+countc+countd+counte>=50){
        totalWin=totalWin*0.75;
    }

    totalWin = totalWin*0.9; 
    if(totalWin >=holiday) {
        let difference = (totalWin - holiday);
        console.log("Yes! " + difference.toFixed(2) + " lv left.");
    }else if (totalWin < holiday) {
        let difference = holiday - totalWin;
        console.log("Not enough money! " + (difference.toFixed(2)) +" lv needed.")
    }

    

}

Toyshop(320,8,2,5,5,1);