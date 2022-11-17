const initialValue = 0;
let currentResult = initialValue;
let enteredNumber;
let calcDescription;

let logEntries = [];

function getUserInputNumer () {
    return  parseInt(userInput.value);
}

function createAndWriteOutput(operator, prevResult, enteredNumber) {
    const calcDescription = `${prevResult} ${operator} ${enteredNumber}`; 
    outputResult(currentResult, calcDescription);
}

function writeToLog(
    operationIdentifier,
    prevResult,
    newResult
 ) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult:     prevResult,
        currentResult: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
 }

function add () {
    const operator = "+";
    const enteredNumber = getUserInputNumer();
    const initialRresult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput(operator, currentResult, enteredNumber );
    writeToLog(operator, initialRresult, currentResult)
};

function substract () {
    const operator = "-";
    const enteredNumber = getUserInputNumer();
    const initialRresult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput(operator, currentResult, enteredNumber );
    writeToLog(operator, initialRresult, currentResult)
}

function multiply() {
    const operator = "*";
    const enteredNumber = getUserInputNumer();
    const initialRresult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput(operator, currentResult, enteredNumber );
    writeToLog(operator, initialRresult, currentResult)
}

function divide() {
    const operator = "/";
    const enteredNumber = getUserInputNumer();
    const initialRresult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput(operator, currentResult, enteredNumber );
    writeToLog(operator, initialRresult, currentResult)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);