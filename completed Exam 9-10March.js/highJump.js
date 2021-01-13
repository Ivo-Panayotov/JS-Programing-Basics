function jump(input) {
    let wantedHeight = +input[0];
    let index = 1;
    let isTrue = false;
    let counter = 0;

    for (let i = wantedHeight - 30; i <= wantedHeight; i+= 5) {
        let failedJumpsCounter = 0;
        while (i <= wantedHeight) {
            let currentJump = +input[index++];
            counter++;
            if (currentJump <= i) {
                failedJumpsCounter++;
            } else if (currentJump > i) {
                if (currentJump > wantedHeight && i === wantedHeight) {
                    console.log(`Tihomir succeeded, he jumped over ${wantedHeight}cm after ${counter} jumps.`);
                    isTrue = true;
                }
                break;
            }
            if (failedJumpsCounter >= 3) {
                console.log(`Tihomir failed at ${i}cm after ${counter} jumps.`);
                isTrue = true;
                break;
            }
        }
        if (isTrue) {
            break;
        }

    }
   
}
jump([ `231`,
`205`,
`212`,
`213`,
`228`,
`229`,
`230`,
`235`
]);