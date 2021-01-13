function thirdCase(typeFlower, countFlowers, season) {
    let singleHarvest = 0;
    let quantityCollectedHoney = 0;
    switch (typeFlower) {
        case `Sunflower`:
            if (season === `Spring`) {
                singleHarvest = 10;
            } else if (season === `Summer`) {
                singleHarvest = 8;
            } else if (season === `Autumn`) {
                singleHarvest = 12;
            }
            break;
        case `Daisy`:
            if (season === `Spring`) {
                singleHarvest = 12;
            } else if (season === `Summer`) {
                singleHarvest = 8;
            } else if (season === `Autumn`) {
                singleHarvest = 6;
            }
            break;
        case `Lavender`:
            if (season === `Spring`) {
                singleHarvest = 12;
            } else if (season === `Summer`) {
                singleHarvest = 8;
            } else if (season === `Autumn`) {
                singleHarvest = 6;
            }
            break;
            case `Mint`:
                if (season === `Spring`) {
                    singleHarvest = 10;
                } else if (season === `Summer`) {
                    singleHarvest = 12;
                } else if (season === `Autumn`) {
                    singleHarvest = 6;
                }
                break;
    }
    if (season === `Summer`) {
        singleHarvest *= 1.1;
    } else if (season === `Autumn`) {
        singleHarvest *= 0.95;
    } else if (season === `Spring` && typeFlower === `Daisy` || typeFlower === `Mint`) {
        singleHarvest *= 1.1;
    }
    quantityCollectedHoney = singleHarvest * countFlowers;

    console.log(`Total honey harvested: ${quantityCollectedHoney.toFixed(2)}`);

}
thirdCase(`Sunflower`, 11, `Autumn`);