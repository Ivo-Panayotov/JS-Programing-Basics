function danceHall(L, W, A) {
    L = Number(L);
    W = Number(W);
    A = Number(A);

    let area = (L*100 * W*100);
    let bench = (area/10);
    let wardrobe = (A * 100 *  A * 100);
    let personSpace = (area - bench - wardrobe);
    let person = 7040;
    console.log(Math.floor(personSpace / person));
 
}
danceHall(50, 25, 2);