function sum(num1, num2) {
  return num1 + num2
}

function addRandom(num1) {
  return num1 + Math.random()
}

const previousResult = 0

function sum(previousResult) {
  const result = previousResult + 10;
  previousResult = 1;
  return result;
}

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
  h.push('NEW HOBBY');
  console.log(h)
}

function calculateTax(value, tax) {
  return amount * tax
}

const vatAmount = calculateTax(100, 0.19)
const incomeTax = calculateTax(100, 0.25)


function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax;
}


const vatCalculator   = createTaxCalculator(0.19)
const incomCalculator = createTaxCalculator0(0.25)


console.log(vatCalculator(100))
console.log(incomeCaculator(100))

let . userName = 'Max';

function greetUser() {
  let userName = "Ana" // Shallowed variable.
  console.log('hi' + userName)
}

userName = "fernando"

greetUser()