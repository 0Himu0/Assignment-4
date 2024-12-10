
function calculateTax(income,expense){
    if (income < 0 || expense < 0 || income < expense) {
        return "Invalid Input";
    }
    else{
    let taxableAmount = income - expense;
    let tax = taxableAmount * 0.20;
    return tax;
    }
}


function sendNotification(email){
    if (email.includes('@') === 1) {
        return "Invalid Email";
    }

    let parts = email.split('@');
    if (parts.length !== 2) {
        return "Invalid Email";
    }

    let username = parts[0];
    let domain = parts[1];
    
    return `${username} sent you an email from ${domain}`;
}


function checkDigitsInName(name){
    if (typeof name !== "string"){
        return "Invalid Input";
    }

    for (let char of name) {
        if (char >= '0' && char <= '9') {
            return true;
        }
    }
    return false;
}


function calculateFinalScore(obj){
    if (typeof obj !== "object" || obj === null) {
        return "Invalid Input";
    }

    let name = obj.name;
    let testScore = obj.testScore;
    let schoolGrade = obj.schoolGrade;
    let isFFamily = obj.isFFamily;
    if (typeof name !== "string" || typeof testScore !== "number" || typeof schoolGrade !== "number" || typeof isFFamily !== "boolean") {
        return "Invalid Input";
    }

    if (testScore > 50 || schoolGrade > 30) {
        return "Invalid Input"; 
    }

    let finalScore = testScore + schoolGrade;
    if (isFFamily === true) {
        finalScore = finalScore + 20;
    }

    if (finalScore >= 80) {
        return true;
    } else {
        return false;
    }
}


function waitingTime(waitingTime, serialNumber){
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