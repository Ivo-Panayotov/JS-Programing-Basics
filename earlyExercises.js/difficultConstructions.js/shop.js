function smallShop(product, town, quantity) {
    quantity = Number(quantity);
    let productPrice = 0;
    if (town == "Sofia") {
        if (product == "coffee")
        productPrice = 0.50;
        else if (product == "water")
        productPrice = 0.80;
        else if (product == "beer")
        productPrice = 1.20;
        else if (product == "sweets")
        productPrice = 1.45;
        else if (product == "peanuts")
        productPrice = 1.60;
        console.log(productPrice * quantity);
    } else if (town == "Plovdiv") {
        if (product == "coffee")
        productPrice = 0.40;
        else if (product == "water")
        productPrice = 0.70;
        else if (product == "beer")
        productPrice = 1.15;
        else if (product == "sweets")
        productPrice = 1.30;
        else if (product == "peanuts")
        productPrice = 1.50;
        console.log(productPrice * quantity);
    } else if (town =="Varna") {
        if (product == "coffee")
        productPrice = 0.45;
        else if (product == "water")
        productPrice = 0.70;
        else if (product == "beer")
        productPrice = 1.10;
        else if (product == "sweets")
        productPrice = 1.35;
        else if (product == "peanuts")
        productPrice = 1.55;
        console.log(productPrice * quantity);
    }
}
smallShop("peanuts","Varna",3);