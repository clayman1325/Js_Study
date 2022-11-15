const initialValue = 0;
let currentResult = initialValue;
currentResult = currentResult + 10;

function add (num1, num2) {
    const result = num1 + num2;
    return result
}

let userName = "david"
function greetUser(name) {
    let userName = "fernando";
    alert(`Hi ${userName} how are ypu doing today?`)
}
currentResult = add(10,2);
greetUser(userName)
let calculationDescription = `Current + Result ${initialValue}`
let errorMessage = "An error " + "occurred"
outputResult(currentResult, calculationDescription)