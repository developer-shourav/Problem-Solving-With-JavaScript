/* 

Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.


 */

const JsCalculator = (num1, num2, operator) => {
 
    if( operator === '+'){
        return num1 + num2 ;
    }
    else if( operator === '-'){
        return num1 - num2;
    }
    else if( operator === '*'){
        return num1 * num2;
    }
    else if( operator === '/'){
        if (num2 === 0) {
            return "Error: Division by zero is not allowed.";
        }
        return num1 / num2 ;
    }
    else if ( operator === '%'){
        return num1 % num2 ;
    }
    else{
        return 'Error: Please inter valid number and mathematical operator.';
    }
};

const result = JsCalculator(400, 200, '+');
console.log(result);