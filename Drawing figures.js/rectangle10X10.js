function rectangle(input) {
    
    for (let i = 1; i <= 10; i++) {
        let output = ``;
        for (let j = 1; j <= 10; j++) {
            output += `*`;
        }
        console.log(output);
    }

}
rectangle([10])