# Advanced functions concepts.

  Explore Pure functions and side efects
  Factory functions
  CLosusures(and review of scopes)
  recursion

## pure functions

    given same inputs to a functions the return value must be always the same
    and also does not create side efects, lets say alter any beheaviour outside of the functions.

    the goal is to use as much as possible pure functions to protect the use of other of our functions howwever
    sometimes is not posible to implement pure functions for instance when a new event needs to be registered inside
    a function just try to be clear in the naming to give an idea of a new side efect.

## Factory Functions.

    a Function that produces another functions.

## CLosusures

    Every funciton in JS is a clousure RULE FOR INTERVIEWS

    having scoopes. or lexical scopes(enviroment) that said, an external lexical environment can not know about any internal lexical envoroment but an internal lexical environment can know it

    One important remark to add here is that in an inner closure because it can get the information of variables out of its lexical scope those variables can be updated and changed before the execution of the inner scope. that is something that needs to be taken into account when creating functions out of function (Factory Functions).

    Every function closes over the surrounding of the function. it register and memorize the values of its variables.

    "access to surrunding enviroments is key". Functions creates lexical environmants and remember the surrounding top environments.

    jim roh.
