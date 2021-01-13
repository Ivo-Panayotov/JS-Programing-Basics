function order(product, town, quantity) {
    quantiy = +quantity;
    let bill = 0;
    if (product === `coffee` && town === `Sofia`) {
        bill = quantity * 0.5;
    } else if (product === `water` && town === `Sofia`) {
        bill = quantity * 0.8;
    } else if (product === `beer` && town === `Sofia`) {
        bill = quantity * 1.2;
    } else if (product === `sweets` && town === `Sofia`) {
        bill = quantity * 1.45;
    } else if (product === `peanuts` && town === `Sofia`) {
        bill = quantity * 1.6;
    } else if (product === `coffee` && town === `Plovdiv`) {
        bill = quantity * 0.4;
    } else if (product === `water` && town === `Plovdiv`) {
        bill = quantity * 0.7;
    } else if (product === `beer` && town === `Plovdiv`) {
        bill = quantity * 1.15;
    } else if (product === `sweets` && town === `Plovdiv`) {
        bill = quantity * 1.30;
    } else if (product === `peanuts` && town === `Plovdiv`) {
        bill = quantity * 1.5;
    } else if (product === `coffee` && town === `Varna`) {
        bill = quantity * 0.45;
    } else if (product === `water` && town === `Varna`) {
        bill = quantity * 0.7;
    } else if (product === `beer` && town === `Varna`) {
        bill = quantity * 1.1;
    } else if (product === `sweets` && town === `Varna`) {
        bill = quantity * 1.35;
    } else if (product === `peanuts` && town === `Varna`) {
        bill = quantity * 1.55;
    }
    console.log(bill);
    
    
}
order(`coffee`, "Varna", 2);