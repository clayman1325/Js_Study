# export and import Modules

    Modules are a key feature of javascript that is well known in oder programing languages as libraries to. When a project start to grow keep all the functions, logic in one single file imported in the HTML file become to be messy, disorganize and very hard to work on and mantain. Even to find some function the developer would need to sroll and loose time searching for it.

    In such cases is when modularity comes to place and to achieve that each function or classes can be split and stored in a separate file. doing so will require to import each file in the main HTML file so that the logic contained in the separate files is available to used in different places. This approach is ok if the number of files is not huge becasue once yo start adding classes functionallity and js files the addition to the html file requires thinking and mantainance which ended up in another problem.

    Then, javascript allows to link files and its internal code to be used multiple times throgh the use of models that are separate files where the key word export is prepend to any function class or variable that will be accesisible trough imports else where. Second in any place one or multiple parts of the javascript application that you require a given functionalliy you can add the import keyword reference the name of the desired variable or method in curly braquets nad the url of the corresponding imported functionality.

    By doing this you can track the relashionships of the files, keep the logic of your code separated and easy to lookfor.

    In modules export import practices there are diferent ways to export a functionality the first one is the one mentioned above where naming convention is added to the variable or method and must be referenced in that way when imported. Another alternative is to add the default keyword after export to the line where you are exporting some logic and in that case.

    Last there is a very important feature not very well known that will help to improve the performance of an application that is dynamic importing. When you import files at the begining of a document javascritpt will run all the files to load functions variables and links at onces, this can be expensive if some files are massive in storage and in particular if they are not used friquently for example depending in one users action that might not happened frequently. In this cases you can import the module or file of interest on demand delaying its load only when it is actually used.

