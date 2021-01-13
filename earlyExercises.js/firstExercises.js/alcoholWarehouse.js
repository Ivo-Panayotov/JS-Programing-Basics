function warehouse(levaWhisky,beerLitter,wineLitter,rakiaLitter,whiskyLitter) {
    levaWhisky = Number(levaWhisky);
    beerLitter = Number(beerLitter);
    wineLitter = Number(wineLitter);
    rakiaLitter = Number(rakiaLitter);
    whiskyLitter = Number(whiskyLitter);
    
    let levaRakia = levaWhisky/2;
    let levaWine = levaRakia * 0.60;
    let levaBeer = levaRakia * 0.20;

    let total = (levaWhisky * whiskyLitter) + (beerLitter * levaBeer) +
     (levaWine * wineLitter) + (rakiaLitter * levaRakia);

     console.log(total.toFixed(2));
     

}
warehouse(50,10,3.5,6.5,1)