function skeleton(input) {
    let minutesOfTimeWanted = +input[0];
    let secondsOfTimeWanted = +input[1];
    minutesOfTimeWanted = minutesOfTimeWanted * 60;
    let timeForQualification = minutesOfTimeWanted + secondsOfTimeWanted; 

    let lengthOfTrackInMeters = +input[2];
    let MarinFor100Meters = +input[3];
    let MarinsTime = MarinFor100Meters * (lengthOfTrackInMeters / 100);
    let delay = lengthOfTrackInMeters / 120 * 2.5;
    let totalTimeMarin = MarinsTime - delay;
    
    if (totalTimeMarin <= timeForQualification) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${totalTimeMarin.toFixed(3)}.`)
    } else {
        console.log(`No, Marin failed! He was ${(totalTimeMarin - timeForQualification).toFixed(3)} second slower.`)
        
    }
   
}
skeleton([ '2', '12', '1200', '10', '' ]);