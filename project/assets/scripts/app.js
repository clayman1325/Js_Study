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

 function calculateResult(calculationType) {
    let mathOperator;
    const operator = calculationType;
    const enteredNumber = getUserInputNumer();
    const initialRresult = currentResult;

    if(calculationType == "ADD") {
        currentResult += enteredNumber;
        mathOperator = "+"
    } else if (calculationType == "SUBSTRACT") {
        currentResult -= enteredNumber;
        mathOperator = "-"
    } else if (calculationType == "MULTIPLY") {
        currentResult *= enteredNumber;
        mathOperator = "*"
    } else if (calculationType == "DIVIDE") {
        currentResult /= enteredNumber;
        mathOperator = "/"
    } else {

    }
    createAndWriteOutput(mathOperator, currentResult, enteredNumber );
    writeToLog(operator, initialRresult, currentResult)
 }

function add () {
    calculateResult("ADD")
};

function substract () {
    calculateResult("SUBSTRACT")
}

function multiply() {
    calculateResult("MULTIPLY")
}

function divide() {
    calculateResult("DIVIDE")
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);