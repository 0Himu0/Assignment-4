function calculateFinalScore(obj) {
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



console.log(
calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true,
    })
);
console.log(
calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: false,
    })
);
console.log(calculateFinalScore("hello"));
console.log(
calculateFinalScore({
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: true,
    })
);