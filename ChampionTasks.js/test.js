function streamOfLetters(input) {
    let index = 0;
    let letter = input[index++];
    let reveiledPassword = ``;
    let cCounter = 0;
    let oCounter = 0;
    let nCounter = 0;
    let hiddenText = ``;
    let finalText = ``;
        while (letter !== `End`) {
            if (letter === `c` && cCounter === 0) {
                hiddenText += letter;
                cCounter ++;
            } else if (letter === `o` && oCounter === 0) {
                hiddenText += letter;
                oCounter ++;
            } else if (letter === `n` && nCounter === 0) {
                hiddenText += letter;
                nCounter ++;
            }else if ((letter.charCodeAt(0) < 91 && letter.charCodeAt(0) > 64) || (letter.charCodeAt(0) < 123 && letter.charCodeAt(0) > 96)) {
                reveiledPassword += letter;
            }
            letter = input[index++];
            if (hiddenText.length === 3) {
                reveiledPassword += ` `;
                hiddenText = ``;
                cCounter = 0;
                oCounter = 0;
                nCounter = 0; 
                finalText += reveiledPassword;
                reveiledPassword = ``;
            }
        }
    console.log(finalText);

}
streamOfLetters(['H', 'n', 'e', 'l', 'l', 'o', 'o', 'c', 't', 'c', 'h', 'o', 'e', 'r', 'e', 'n', 'e', 'End']);