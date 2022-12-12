# Deep dive into events

## events

    run code upon certain eveints or actions asyncroniously.

    browser side addEventListener()
    server side e.g NodeJS.on()

    eventis typicaly transport data

## Events

    * mouse event
    * drag event
    mdn events has a detailed list of events very useful source of Events info also based on i heritance too.

# Working with events

    Adding events can be done as html arguments that is not recomented or in a separate JS file like this this:

    htmlElement.event = handlerFunction

    where event is one of the js available events and handlerFunction is the function that is passed to the event and will be evaluated once the event happenes.

    another alternative is to add the function .addEventListener to the html component.

    Also it is posible to remove a certain event with .removeEventListener(event, handlerFunction). Here is very important that the funciont that is passed out here or the regerence corresponds to the exact same function that was registered to eventListene

## tHE Event parameter.

    Shows the incormation gattered by JS on the action of the particular  event

    The event parametr contains usful properties and methods such as event.preventDefault() that helps to validate user input information and also do asyncroniouslyjs calls.

    event stopPropagation is also important to stop at that element and do no execute any other action or event below or above.

## Capturing and Bumbling

    Capturing is the browser procedure to read events from the outside of the html element to the inside
    Bubling is the oposite.

# Event delegation

    Delegate is a pattern that takes advantage of event propagation and tend to reduce the memory usage whene there are multiple components that will require to use the same event listener with the same handlerFunction.

    It is necessarly to be carefull that event delegation will delegate the event of one element such as in the UL htiml component to the least decendant element that where clicked, and in complex html extructure it coul easly lead to undesirable experiences. event.closests(htmlElement) cna help in those cases to force the desirable html component.

# triger events programatically

    it is possible to ezecute those events that are passed in the addEventListener by ourself to trigger the action of those events from code. For example if you want to submit a form once something else happens it is possible to acchive by selecting the submit button in a variable and calling .click()  or selecting the form and appliyng form.submit()


