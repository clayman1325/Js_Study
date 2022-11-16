const initialValue = 0;
let currentResult = initialValue;
let enteredNumber;
let calcDescription;

function getUserInputNumer () {
    return  parseInt(userInput.value);
}

function createAndWriteOutput(operator, prevResult, enteredNumber) {
    const calcDescription = `${prevResult} ${operator} ${enteredNumber}`; 
    outputResult(currentResult, calcDescription);
}

function add () {
    enteredNumber = getUserInputNumer();
    currentResult += enteredNumber
    createAndWriteOutput('+', currentResult, enteredNumber )
};

function substract () {
    enteredNumber = getUserInputNumer();
    currentResult -= enteredNumber;
    createAndWriteOutput('-', currentResult, enteredNumber )
}

function multiply() {
    enteredNumber = getUserInputNumer();
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', currentResult, enteredNumber )
}

function divide() {
    enteredNumber = getUserInputNumer();
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', currentResult, enteredNumber )
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);