let htmlSelectors = {
    'operands': document.querySelectorAll('.calc-operand'),
    'operators': document.querySelectorAll('.calc-operator'),
    'decimal-point': document.querySelector('.calc-decimal-point'),
    'remove': document.querySelector('.calc-remove'),
    'reset': document.querySelector('.calc-result--reset-btn'),
    'equals': document.querySelector('.calc-equals'),
    'result-final': document.querySelector('.calc-result--final'),
    'result-progress': document.querySelector('.calc-result--progress')
}
//write something here
let firstOperand = ``;
let secondOperand = ``;
let operator = ``;
let firstIsSelected = false;

let allOperandBtns = htmlSelectors['operands'];
let allOperatorBtns = htmlSelectors['operators'];
let decimalPointBtn = htmlSelectors['decimal-point'];
let equalsBtn = htmlSelectors['equals'];
let removeBtn = htmlSelectors['remove'];
let resetBtn = htmlSelectors['reset'];
for (let index = 0; index < allOperandBtns.length; index++) {
    let operandBtn = allOperandBtns[index];

    operandBtn.addEventListener('click', operandClickListenerHandler);
}
for (let index = 0; index < allOperatorBtns.length; index++) {
    let operatorBtn = allOperatorBtns[index];

    operatorBtn.addEventListener('click', operatorClickListenerHandler);
}
decimalPointBtn.addEventListener('click', decimalPointClickListenerHandler);
equalsBtn.addEventListener('click', equalsClickListenerHandler);
removeBtn.addEventListener('click', removeSymbolClickListenerHandler);
resetBtn.addEventListener('click', resetClickListenerHandler);

function operandClickListenerHandler(e) {
    let selectedOperand = e.target.textContent;
    let resultFinalDiv = htmlSelectors['result-final'];
    console.log(selectedOperand);

    // TODO: Да се допише функцията
    if (!firstIsSelected) {
        firstOperand += selectedOperand;
        resultFinalDiv.textContent = firstOperand;
    } else {
        secondOperand += selectedOperand;
        resultFinalDiv.textContent = secondOperand;
    }
}

function operatorClickListenerHandler(e) {
    let selectedOperator = e.target.getAttribute('data-target');
    let resultProgressDiv = htmlSelectors['result-progress'];
    // TODO: Да се допише функцията
    if (firstOperand !== ``) {
        if (selectedOperator === `add`) {
            operator = `+`;
        } else if (selectedOperator === `subtract`) {
            operator = `-`;
        } else if (selectedOperator === `multiply`) {
            operator = `*`;
        } else {
            operator = `/`;
        }
    }
    resultProgressDiv.textContent = firstOperand + operator;
    firstIsSelected = true;
}

function decimalPointClickListenerHandler() {
    let resultFinalDiv = htmlSelectors['result-final'];

    // TODO: Да се допише функцията
    if (!firstIsSelected) {
        if (firstOperand !== `` && !firstOperand.includes(`.`)) {
            firstOperand += `.`;
            resultFinalDiv.textContent = firstOperand;
        }
    } else {
        if (secondOperand !== `` && !secondOperand.includes(`.`)) {
            secondOperand += `.`;
            resultFinalDiv.textContent = secondOperand;
        }

    }


}

function removeSymbolClickListenerHandler() {
    let finalResultDiv = htmlSelectors['result-final'];

    if (!firstIsSelected) {
        let renewedFirstOperand = ``;
        for (let i = 0; i < firstOperand.length - 1; i++) {
            renewedFirstOperand += firstOperand[i];
        }
        firstOperand = renewedFirstOperand;
        if (firstOperand === ``) {
            finalResultDiv.textContent = 0;
        } else {
            finalResultDiv.textContent = firstOperand;
        }
    } else {
        let renewedSecondOperand = ``;
        for (let i = 0; i < secondOperand.length - 1; i++) {
            renewedSecondOperand += secondOperand[i];
        }
        secondOperand = renewedSecondOperand;
        if (secondOperand === ``) {
            finalResultDiv.textContent = 0;
        } else {
            finalResultDiv.textContent = secondOperand;
        }

    }

    
    // TODO: Да се допише функцията
}

function equalsClickListenerHandler() {
    let resultProgressDiv = htmlSelectors['result-progress'];
    let resultFinalDiv = htmlSelectors['result-final'];
    if (firstOperand !== `` && secondOperand !== ``) {
        let firstNumber = Number(firstOperand);
        let secondNumber = Number(secondOperand);
        let result = 0;
        switch (operator) {
            case `+`:
                result = firstNumber + secondNumber;
                break;
            case `-`:
                result = firstNumber - secondNumber;
                break;

            case `*`:
                result = firstNumber * secondNumber;
                break;

            case `/`:
                result = firstNumber / secondNumber;
                break;
        }
        resultFinalDiv.textContent = (`${firstOperand}${operator}${secondOperand}`);
        if (Number.isInteger(result)) {
            resultFinalDiv.textContent = result;
        } else {
            resultFinalDiv.textContent = result.toFixed(2);
        }
    }
    // TODO: Да се допише функцията
}

function resetClickListenerHandler() {
    let resultProgressDiv = htmlSelectors['result-progress'];
    let resultFinalDiv = htmlSelectors['result-final'];
    firstOperand = ``;
    secondOperand = ``;
    firstIsSelected = false;
    operator = ``;
    resultProgressDiv.textContent = 0;
    resultFinalDiv.textContent = 0;
    // TODO: Да се допише функцията
}
