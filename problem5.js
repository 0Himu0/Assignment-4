function waitingTime(waitingTime, serialNumber) {
    if (!Array.isArray(waitingTime) || typeof serialNumber !== "number") {
        return "Invalid Input";
    }

    for (let num of waitingTime) {
        if (typeof num !== "number") {
            return "Invalid Input";
        }
    }

    let total = 0;
    for (let time of waitingTime) {
        total = total + time;
    }

    let average = Math.round(total / waitingTime.length);
    let peopleLeft = serialNumber - waitingTime.length - 1;
    if (peopleLeft <= 0) {
        return 0;
    }
    let waitingTimeResult = peopleLeft * average;
    return waitingTimeResult;
}


console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));