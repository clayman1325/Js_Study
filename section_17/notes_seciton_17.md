# Async Promises and callbacks

    In this module will be clear what is Async Code
    working with callbacks
    Promises the last way to use promises and get the results with async await.

    Remember that JS is a single thread language and that meands that it can only execute one task at a time.

    the sync code is also called the water fall code, where a set of instructions are executed one after the other in the order in wich each instruction was called. The problem with this kind of workflow is that some process in
    software can take a lot of time and it is not desirable to wait for an expensive calculation or a response of an external server, database http request and block the execution of our entire application.

    In js even event listeners will be blocked from one lag process.

    however the browser actually has multiple threads so js can benefit from it delegating processes or tasks to the different threads of the broser making the one and onle JS single thread available continue operating and working

    Then it emerge a another important concept that is callbacks

    A callback function is a function that the sendo thread or responsable of the lag process can execute after the execution is done. Event listeners are a good example of this procedure:

    when we register an event form example : button.addEventListener('click", orderHabdlerFunction) it is not possible to wait until the user click order then this eventTracker/listener so this listener is delegate to the browser and once the broser catch this action it executes the callback function called orderHabdlerFunction.

## Event Loop Queue and Async Code

    The event loopv is not part of the Js engine but is part of the js ecosystem thand handles the js operation. Saing that once you add some code in a js file and import it in the html and excecute it  the data like functions and variables are stored in the heap and once a function is execute in the code e.g ading () in front of the name of the function that function goes to  the JS stack if it is on sync function or to the browser threads if it is one async function such as setTimper(doSomethingAfter, timeInSeconds). In this situation the setTimeout task will be sent to the browser thread and in the mean time the  JS engine will be operation or delivering any of the sync calls. Because it is not posissible to know in advance how much timpe the async you pass a function as parameter to get executed once the async function is done.

    To make this magic happen an additional queue out side of the JS engine nad the browser is used to store the messages or functions that needs to be executed onece the async function is done. Here is where the event loop comes to play and helps the JS asyncronous operation. the event loop is a constant and repeated loop that is quering for messages in the queue and once the stack JS is free the event loop pushes the event in the queue to the JS stack for get the task done there.

## Promises

    Promises arieses to solve waht is called The callback Hell, and this is a situeation when multiple async functions are nested and there fore is very complicated to keep track of its excecution and the data that is available to keep performing operations. The right order of the execution is very hard to follow in these situations.

    What promises do is to ensure that one async call is perform rigth after another one.

    Interestion methods in proises are:

    Promise.race
    Pormise.actually

    Promise.all([prom1, prom2, prom3]).then (promisesData => console.log(promisesData))

### Promise chain

    when you have nested asyncronious calls it is better and more organize to create a chain of promises calls that will sequantially beign resolved one after the other with the keyword then of the previos async call and returning a promise in each step of the primisee chain.


## Async await

    A modern javascript to write async code. If you prepend the keyword await to a function name definition that function will return a promise, so that when it is called it needs to be resolved as a promisse with the then syntax or another prefix in the function calling named await. Behind the scenes async await is syntactic sugar for promises technique, no more that that

voy a conseguir el trabajo en monarch money

Gracias Dios por que me diste la posibilidad de volver a trabajar en febrero 1 para monarch money. Im exition and im crushing this experience fully focused on perform top performer in this team
