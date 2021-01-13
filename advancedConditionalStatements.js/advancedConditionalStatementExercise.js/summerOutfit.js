function fashion(temperatureCelsius, partOfTheDay) {
    temperatureCelsius = +temperatureCelsius;
    let outfit;
    let shoes;
    if (temperatureCelsius >= 10 && temperatureCelsius <= 18) {
        if (partOfTheDay === `Morning`) {
            outfit = `Sweatshirt`;
            shoes = `Sneakers`;
        } else if (partOfTheDay === `Afternoon`) {
            outfit = `Shirt`;
            shoes = `Moccasins`;
        } else if (partOfTheDay === `Evening`) {
            outfit = `Shirt`;
            shoes = `Moccasins`;
        }
    } else if (temperatureCelsius > 18 && temperatureCelsius <= 24) {
        if (partOfTheDay === `Morning`) {
            outfit = `Shirt`;
            shoes = `Moccasins`;
        } else if (partOfTheDay === `Afternoon`) {
            outfit = `T-Shirt`;
            shoes = `Sandals`;
        } else if (partOfTheDay === `Evening`) {
            outfit = `Shirt`;
            shoes = `Moccasins`;
        }
    } else if (temperatureCelsius >= 25) {
        if (partOfTheDay === `Morning`) {
            outfit = `T-Shirt`;
            shoes = `Sandals`;
        } else if (partOfTheDay === `Afternoon`) {
            outfit = `Swim Suit`;
            shoes = `Barefoot`;
        } else if (partOfTheDay === `Evening`) {
            outfit = `Shirt`;
            shoes = `Moccasins`;
        }
    }
    console.log(`It's ${temperatureCelsius} degrees, get your ${outfit} and ${shoes}.`)
}
fashion(16, `Morning`);