function library(input) {
    let theBookWeAreSeeking = input.shift();
    let checkedBook = input.shift();
    let count = 0;
    while (checkedBook !== `No More Books`) {
       
        if (checkedBook === theBookWeAreSeeking) {
            break;
        }
        count++;
        checkedBook = input.shift();
    }
    if (checkedBook === theBookWeAreSeeking) {
        console.log(`You checked ${count} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${count} books.`);
        
        
    }
}
library([`Troy`, `Stronger`, `Lifestyle`, `Troy`]);