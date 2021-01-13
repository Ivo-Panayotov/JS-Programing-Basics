function message(text) {
    let count = 1;
    for (let i = 0; i < text.length; i++) {
        let element = text[i];
        if (element === ` `) {
            count ++;
        }        
    }
    if (count > 10) {
        console.log(`The message is too long to be send! Has ${count} words.`);
    } else {
        console.log(`The message was send successfully!`);
        

    }


}
message(`This message has exactly eleven words. One more as it's alloud.`);