function two(taskCount, points, course) {
    taskCount = taskCount.toString();
    points = Number(points);
    let percent = 0;
    if (course === `Basics`) {
        switch (taskCount) {
            case `1`:
                percent = 8;
                break;
            case `2`:
            case `3`:
                percent = 9;
                break;
            case `4`:
                percent = 10;
                break;
        }
    } else if (course === `Fundamentals`) {
        switch (taskCount) {
            case `1`:
            case `2`:
                percent = 11;
                break;
            case `3`:
                percent = 12;
                break;
            case `4`:
                percent = 13;
                break;
        }
    } else if (course === `Advanced`) {
        switch (taskCount) {
            case `1`:
            case `2`:
                percent = 14;
                break;
            case `3`:
                percent = 15;
                break;
            case `4`:
                percent = 16;
                break;
        }
    }
    if (course === `Advanced`) {
        points *= 1.2;
    }
    if (course === `Basics` && taskCount === `1`) {
        points *= 0.8;
    }
    console.log(`Total points: ${(points * percent / 100).toFixed(2)}`);
    
}
two(`1`, 100, `Basics`);