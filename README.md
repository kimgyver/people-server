# Ambit - Coding Challenge

Thanks for applying at Ambit. This coding challenge is an opportunity for you to show us your skills and what you're capable of.

The exercise is to:

- Clean up this code and put it in a sensible structure
- Modernise the solution (if you think it needs to be modernised) and update the libraries that are used (if you think they need to be updated)
- Reduce code duplication (there is a lot of it)
- The UI is pretty simple - we're sure you can improve it :)

The application runs correctly, but there's a lot of duplication, the rendering is all server-side, and its filtering use case is limited. To run the existing solution:

``` bash
npm install
npm start
```

Browse to [http://localhost:3000](http://localhost:3000)

## Important - the requirements

- We must be able to quickly and easily start your solution from a command line and your solution must be able to run on a Windows, Mac and Linux machine
- You are welcome to introduce any libraries you feel are useful, but these must run on Windows, Mac, and Linux
- Generalise the filtering system (e.g. so you can select all people who are both male and 20 years old)
- The UI must run as a Single Page App
- Rewrite this readme file to include instructions on how to run your solution and any comments on your design. You can also include any suggestions for how you might improve or expand on your program - and even how you might host it.

## Guidance and Advice

There is no "right answer", but some good things to do might be:

- Introduce some kind of state management (e.g. redux)
- Introduce a task runner (such as Webpack) with a transpiler to take advantage of even more modern ES features
- Separate concerns: untangle business logic, web serving, and data access
- Introduce a linter
- Improve the configurability by replacing hardcoding of values with appropriate mechanisms for specifying them
- Improve error handling
- Add useful comments
- Add logging
- Add some tests and/or explain how you would test your solution (you can put this in your readme file).
- The structure of the application is up to you. For example, you can put all front-end and API code into the same application or you can separate the API and front-end as different applications in the same repo - we’ll let you decide on the best approach

Develop your solution in a way that represents a “real world” solution. Think about how you might test your solution, carry out logging, host your application, document your application, scale your application, improve your data access layer, improve the design of the UI etc. - you don’t necessarily have to implement all of this stuff, but you could talk about it in your readme file.

## Most importantly: show us what you can do&#33;

Once you’ve finished - don’t forget to commit your code and send us an email letting us know that you’ve finished the coding challenge along with the repository URL. If you have any questions - let us know.
