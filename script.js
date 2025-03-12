//Calculator

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

const display = document.querySelector('#display')
const buttons = document.getElementsByClassName('btn')
const digitArray = Array.from(buttons)

function displayNum (arr) {
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(`${arr[i].id}`).addEventListener('click', () => {
            display.textContent = arr[i].textContent;
            inputOne = display.textContent;
            console.log(inputOne)
        }) 
    } 
    
}

displayNum(digitArray)