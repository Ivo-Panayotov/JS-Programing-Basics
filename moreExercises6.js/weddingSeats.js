function wedding(input) {
    let lastSector = input[0];
    let lastRowSector1 = Number(input[1]);
    let countSeatsInOddRows = Number(input[2]);
    let counter = 0;
      // every row has small latin letters 2 * oddletters = evenletters
      // sectors starting from `A`
      // every next sector endrow +1
      for (let i = 65; i <= lastSector.charCodeAt(); i++, lastRowSector1++) {
          for (let j = 1; j <= lastRowSector1; j ++) {
              for (let k = 97; k < 97 + countSeatsInOddRows + 2; k++) {
                  if (k >= (97 + countSeatsInOddRows) && j % 2 === 1) {
                    break;
                  }
                  counter++;
                  console.log(`${String.fromCharCode(i)}${j}${String.fromCharCode(k)}`)              
              }

          }
      }
      console.log(counter);
      
}
wedding([ 'B', '3', '2' ]);