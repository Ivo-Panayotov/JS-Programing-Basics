function zoofood(dogNumber, animalNumber) {
    let priceDogFood = dogNumber * 2.5;
    let priceAnimalFood = animalNumber * 4;
    let totalPrice = (priceDogFood + priceAnimalFood).toFixed(2);
    console.log(totalPrice + " lv.")
}
zoofood(13,9)