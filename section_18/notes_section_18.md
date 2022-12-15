# http requests

    javascript interact with http request to modify or alter the default beheavior of html and avoid re renders and also bring more dinimics to the user experience. In this way js directly interactis with a certain backend or other web services through APIs.

    this is achieved tipically when the front end is hosted in a separate sever than the backend and both communicate through http request and api endpoints.

    the server is encharge of serve and store data.
    frontend is responsable for fetching and sending data.

    natively in javascript it is possible to do http requests with xmlRequest class. with this class you can create an xhr object that will open am http channel add the headers with xhr.setRequestHeaders, add method, url and data and finally semnt the data. It is a good practice to wrap this procedure in one external function that creates a promise and handles the execution of the request and then where it is desirable to use the response resolve the promise and extract its data.

    Another alternative is to use fetch JS API that is a very short and easy way to build and execute one http request. This api internally builds and returns a promise. the Downside of this api is that becasuse of the prosise is donde internaly the the error habdling is quite complex and messy.

# Third party apis.

    Are packages of code that are available to other developers to avoud re inventing the wheel often. Intened to add utility functions.

    For example Axios is a very well known and useful third party library for handling HTTP requests that is open source and hosted in github. Axios is easier and cleaner to use than fetch and xhr so it is a good alternative and a good example of incorporning third partiy libraries in your project once needed.

