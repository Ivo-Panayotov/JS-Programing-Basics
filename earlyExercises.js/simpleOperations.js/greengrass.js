function green(Squaremeter) {
    let  totalAmount = Squaremeter * 7.61;
    let discount = (totalAmount * 0.18).toFixed(2);
    let totalPrice = (totalAmount - discount).toFixed(2);
    console.log(`The final price is: ${totalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)


}
green(540)