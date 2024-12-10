function calculateTax(income, expense) {
    if (income < 0 || expense < 0 || income < expense) {
        return "Invalid Input";
    }
    else{
    let taxableAmount = income - expense;
    let tax = taxableAmount * 0.20;
    return tax;
    }
}


console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));