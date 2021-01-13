function lectureHall(w, h) {
    w = Number(w);
    h = Number(h);
    let wWorkingSpace =1.2;
    let hWorkingSpace = 0.7;
    let workingSpace = wWorkingSpace * hWorkingSpace;
    let totalh = w / 1.2;
    let totalw = (h-1) / 0.7;
    let totalAvailableSpace = Math.floor(totalh) * Math.floor(totalw) - 3 * workingSpace;
    console.log(Math.floor(totalAvailableSpace)
    );
      

    
}
lectureHall (15,8.9);