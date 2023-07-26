const calculator = (num1, operator, num2) => {
    let result = 0;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if(num2 === 0){
                return "can't divide by 0";
            }
            result = num1 / num2;
            break;
    }
    return result;
}

console.log(calculator(10, "+", 10))
console.log(calculator(10, "-", 20))
console.log(calculator(2, "*", 5))
console.log(calculator(10, "/", 10))