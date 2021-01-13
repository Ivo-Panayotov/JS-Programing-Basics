function wedding(input) {
    let menCount = Number(input[0]);
    let womenCount = Number(input[1]);
    let counter = 0;
    let end = Number(input[2]);
    let output = ``;
    let isTrue = false;

    for (let i = 1; i <= menCount; i++) {

        for (let j = 1; j <= womenCount; j++) {
            counter++;
            output += `(${i} <-> ${j}) `;

            if (counter === end) {
                isTrue = true;
                break;
            }
        }
        if (isTrue) {
            break;
        }
    }
    console.log(output);
    
}
wedding(['2', '2', '6', '']);