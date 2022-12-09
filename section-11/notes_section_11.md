# Constructor functions and Prototypes.
## Constructor functions

    are a type of functions that are blueprint for objects and set properties and methods.
    e.g.
        function Person() {
        this.age = 30;
        this.name = "Max";
        this.greet = function () {
        console.log(
            "Hi, Im" + this.name + " and I have " + this.age + " years old".
        )
        }
    }

    In order to work with classes or constructor functions it is necesarly to create the obkect from the class
    prepending the word new. What new does is to create and empty object , then adding all the properties and methods to it and last returning the object.

## Prototypes

    Prototypes exest in javascript since ever and the language uses prototypical inheritance.

    every constructor function has a default prototype or manyally assigned prototype Person.prototype

    prototype can be think as the base class as well and a mechanism to inherit properties or methods from the prototype chain.

    And a prototype is an object that is lined to another object in a way of fallback objects.

## Clases and Prototypes.

    Classes are syntactic suggar for creating objects based in a blue print  and behind the scenes the class object will create a constructor function and assing to its prototype the methds.

