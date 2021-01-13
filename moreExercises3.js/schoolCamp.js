function school(season, typeOfGroup, countPupils, countNights) {
    countNights = +countNights;
    countPupils = +countPupils;
    let pricePerNight;
    let sport;

    if (season === `Winter`) {
        if (typeOfGroup === `girls` || typeOfGroup === `boys`) {
            pricePerNight = 9.6;
        } else if (typeOfGroup === `mixed`) {
            pricePerNight = 10;
        }
        if (typeOfGroup === `girls`) {
            sport = `Gymnastics`;
        } else if (typeOfGroup = `boys`) {
            sport = `Judo`;
        } else if (typeOfGroup === `mixed`) {
            sport = `Ski`;
        }
    } else  if (season === `Spring`) {
       
        if (typeOfGroup === `girls` || typeOfGroup === `boys`) {
            pricePerNight = 7.2;
        } else if (typeOfGroup === `mixed`) {
            pricePerNight = 9.5;
        }
        if (typeOfGroup === `girls`) {
            sport = `Athletics`;
        } else if (typeOfGroup === `boys`) {
            sport = `Tennis`;
        } else if (typeOfGroup === `mixed`) {
            sport = `Cycling`;
        }
    } else  if (season === `Summer`) {
        
        if (typeOfGroup === `girls` || typeOfGroup === `boys`) {
            pricePerNight = 15;
        } else if (typeOfGroup === `mixed`) {
            pricePerNight = 20;
        }
        if (typeOfGroup === `girls`) {
            sport = `Voleyball`;
        } else if (typeOfGroup === `boys`) {
            sport = `Football`;
        } else if (typeOfGroup === `mixed`) {
            sport = `Swimming`;
        }
    }
    if (countPupils >= 50) {
        pricePerNight = pricePerNight * 0.5;
    } else if (countPupils >= 20) {
        pricePerNight = pricePerNight * 0.85;
    } else if (countPupils >= 10) {
        pricePerNight = pricePerNight * 0.95;
    }
    let total = pricePerNight * countPupils * countNights;
    console.log(`${sport} ${total.toFixed(2)} lv.`)
    

}
school(`Spring`, `boys`, 17, 14);