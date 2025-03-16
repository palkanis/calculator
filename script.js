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


function operate(operator, num1, num2) {

    parseInt(operator);
    parseInt(num1);
    parseInt(num2);

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

const display = document.querySelector('#display');
const buttons = document.getElementsByClassName('btn');
const ops = document.getElementsByClassName('op');
const operatorArray = Array.from(ops);
const digitArray = Array.from(buttons);
const clrBtn = document.querySelector('#x');
const eqBtn = document.querySelector('#eq');

let inputOne = '';
let inputTwo = '';
let operation = '';
let enterSecNum = false;

for (let i = 0; i < digitArray.length; i++) {
    const idItem = digitArray[i];
    document.getElementById(idItem.id).addEventListener('click', function() {
        if (!enterSecNum) {
            display.textContent += idItem.textContent;
            inputOne = Number(display.textContent);
            console.log(inputOne)
        }
        else {
            display.textContent += idItem.textContent;
            inputTwo = Number(display.textContent)
            console.log(inputTwo)
        }

        
    })
}

for (let i = 0; i < operatorArray.length; i++) {
    const opItem = operatorArray[i];
    document.getElementById(opItem.id).addEventListener('click', function() {
        operation = opItem.textContent;
        display.textContent = ''
        enterSecNum = true;
        console.log(operation)
    })
}

eqBtn.addEventListener('click', () => {
    display.textContent = operate(operation, Number(inputOne), Number(inputTwo))
    console.log(display.textContent)
})

clrBtn.addEventListener("click",()=>{
    display.textContent='';
    inputOne = '';
    inputTwo = '';
    operation = '';
    enterSecNum = false;
})

//displayNum(digitArray)
//console.log(display.textContent)

//console.table(digitArray)
  
  