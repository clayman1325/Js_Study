const array = [1,2,3,4,5,10,22,112];

let oddNumbers = array.filter((elem) => (elem % 2) == 0);
oddNumbers = array.filter((elem) => elem > 5);
const num = 22;
oddNumbers = oddNumbers.map((element) => {
  return {num: element};
})
const multiplication = array.reduce((pastElement, element) => {
  return pastElement * element;
}, 1)
console.log(array)
console.log(oddNumbers)
console.log(multiplication)


const findMax = (list) => {
  let max = list[0]
  for(let i = 1; i < list.length; i++) {
    if(list[i] > max) {
      max = list[i];
    }
  }
  return max;
}

const findMin = (list) => {
 let  min = list[0]
  for(let i = 1; i < list.length; i++) {
    if(list[i] <= min) {
      min = list[i];
    }
  }
  return min;
}

const findMaxMinValues = (list) => {
  const max = findMax(list);
  const min = findMin(list);

  return [min, max]
}

console.log(findMax(array))

const [min, max] = findMaxMinValues(array)
console.log("The min value of the array is: " + min + " and the max value is : " + max)