function weather(degree, partOfTheDay) {
degree = Number(degree);
 let outfit = "";

if (partOfTheDay === "Morning" && degree >= 10 && degree <= 18) {
    outfit = "Sweatshirt and Sneakers";
} else if (partOfTheDay === "Morning" && degree >18 && degree <=24) {
    outfit = "Shirt and Moccasins";
} else if (partOfTheDay === "Morning" && degree >24 && degree <=42) {
    outfit = "T-Shirt and Sandals";
} else if (partOfTheDay ==="Afternoon" && degree >= 0 && degree <= 18) {
    outfit = "Shirt and Moccasins";
} else if (partOfTheDay === "Afternoon" && degree >18 && degree <=24) {
    outfit = "T-Shirt and Sandals";
} else if (partOfTheDay === "Afternoon" && degree >24 && degree <=42) {
    outfit = "Swim Suit and Barefoot";
} else if (partOfTheDay ==="Evening" && degree >= 0 && degree <= 18) {
    outfit = "Shirt and Moccasins";
} else if (partOfTheDay === "Evening" && degree >18 && degree <=24) {
    outfit = "Shirt and Moccasins";
} else if (partOfTheDay === "Evening" && degree >24 && degree <=42) {
    outfit = "Shirt and Moccasins";
}
    console.log(`It's ${degree} degrees, get your ${outfit}.`)
}
weather(22, "Afternoon")