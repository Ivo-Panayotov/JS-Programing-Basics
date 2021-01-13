function convertor (dollars) {
    dollars = Number(dollars);
    let leva = (1.79549 * dollars);
    console.log(leva.toFixed(2));    //all is just text
}
convertor(`20`);