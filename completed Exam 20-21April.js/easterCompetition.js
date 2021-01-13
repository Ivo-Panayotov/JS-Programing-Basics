function competition(input) {
    let countConfectioners = +input[0];
    let index = 1;
    let mostPoints = -1;
    let topName = ``;
    for (let i = 1; i <= countConfectioners; i++) {
        let nameConfectioner = input[index++];
        let countCurrentConfectioner = 0;
        let evaluation = input[index++];
        while (evaluation !== `Stop`) {
            evaluation = +evaluation;
            countCurrentConfectioner += evaluation;
            evaluation = input[index++];
        }
        console.log(`${nameConfectioner} has ${countCurrentConfectioner} points.`);
        if (countCurrentConfectioner > mostPoints) {
            mostPoints = countCurrentConfectioner;
            topName = nameConfectioner;
            console.log(`${nameConfectioner} is the new number 1!`);
        }

    }
    console.log(`${topName} won competition with ${mostPoints} points!`)
    

}
competition([
    '3',      'Chef Manchev',
    '10',     '10',
    '10',     '10',
    'Stop',   'Natalie',
    '8',      '2',
    '9',      'Stop',
    'George', '9',
    '2',      '4',
    '2',      'Stop'
  ]
  );