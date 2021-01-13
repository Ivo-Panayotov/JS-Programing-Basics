function firstCase(countBees, countFlowers) {
    //0.21gr honey per bee
    //1 medna pita == 100gr
    let totalAmounthoney = countBees * countFlowers * 0.21;
    let honeyComb = Math.floor(totalAmounthoney / 100);
    let honeyLeft = totalAmounthoney % 100;
    console.log(`${honeyComb} honeycombs filled.`);
    console.log(`${honeyLeft.toFixed(2)} grams of honey left.`);
    
    
}
firstCase(11, 120);