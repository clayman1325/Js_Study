const task3Element = document.getElementById('task-3');

function firstFucntion () {
    alert("hello there");    
}

function sayHi(name) {
    alert("hi! " + name);
} 

function newString(firstString, secondString, thirdString) { 
    return `${firstString} ${secondString} ${thirdString}}`
}

task3Element.addEventListener("click",firstFucntion)

firstFucntion()
sayHi("Kamilo")
const concatString = newString("firstString", "secondString", "thirdString")

alert(concatString)
