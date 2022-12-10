#More DOM and more browser APIS

    In each element of the html it is posibilee to add extra and hidden data using the attribute data- for example in one <li> element it is valid to add extra information to append to a future tooltip in such a way as:
        <li id="mi-Li" data-extra-info="this info is necessary for the user" >

## DOm and prototype

    Every Html element has an Html element class that is inherit from  an element class and that is inherit of a node class that in the end is inherit from   an eventTarget class.

    below html element there exist other classes such as html input element.

    the DOm html api allow javascritp to query css attributes of the HTML elements. With this property it is posibile to dynamically change update adjust  the position and style values.

    For example in the scenario of a new tooltip the tooltip wont knwo where it is the card that belongs to the tooltip so in order to place correctly the new element it is necessarly to query the position of the parent and set the css of the tooltip in between parent limits.

## Dynamic scriptiing

    There could be scenarios when the jscript code does not want to be loaded in the begining of the file but when some activity happens do it.

    This is possible usint script tag, creating a new node and appending the source with a defer attribute and appending it to the head of the HTOL document.

## location

    location is a special attribute of the DOM that allows to navigate and go to different pages dynamically.
    To navigate use location.href= 'url'
    location has attributes such as
    location.host
    location.pathname
    location.origin

    history.length

## Working with dates.

    date = new Date)()
    date.getTime()
    const date2 = new Date("07/11/19")

## Error object

    throw new Error('some text')

    Error() is really important for custom error handling. because it has build in some important proerties such as stack trace and so on.
