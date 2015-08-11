function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function calculate(num1, num2, operation){
    switch (operation){
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            if(num2 == 0){
                return "can't divide by zero";
            }
            return num1 / num2;
            break;    
        default:
            return 0;
                
    }
    return 0; 
}
