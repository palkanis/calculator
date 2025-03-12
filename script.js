//Claculator

function addNum(a, b) {
    return a + b;
};

function subNum(a, b) {
    return a - b;
};

function multiplyNum(a, b) {
    return a * b;
};

function divNum(a, b) {
    return a / b;
};

let inputOne;
let inputTwo;
let operation;

function operate(operator, num1, num2) {

    parseInt(operator);

    if (operator === '+') {
        return addNum(num1, num2);
    }
    else if (operator === '-') {
        return subNum(num1, num2);
    }
    else if (operator === '*') {
        return multiplyNum(num1, num2);
    }
    else if (operator === '/') {
        return divNum(num1, num2);
    }
}

console.log(operate('/', 8, 5))