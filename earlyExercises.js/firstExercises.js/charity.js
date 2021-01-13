function charity(days,people,cakes, gofrettes, pancakes) {
    days = Number(days);
    people = Number(people);
    cakes = Number(cakes);
    gofrettes = Number(gofrettes);
    pancakes = Number(pancakes);
    let priceCake = 45;
    let priceGofrette = 5.8;
    let pricepancake = 3.2;
    let dailymoney = people*(priceCake * cakes) + people*(priceGofrette * gofrettes) + people*(pancakes * pricepancake);
    let fullAmount = dailymoney * days;
    let charityMoney = (fullAmount - (fullAmount / 8));
    console.log(charityMoney.toFixed(2));

}
charity(20,8,14,30,16);