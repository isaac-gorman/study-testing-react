// Learning objective:
// - I will be able to preform test using "mocks" in web apps

// Q: How don't the testing function exist within a vacumm?
// - When testing, the functions we use have entanglments with other dependanceies on other modules.
// - Or these testing functions may be built to take in callbacks as arguments, which creates an intersting issue... how do you test that the callbacks were invoked and the correct arguments passed?
// - We handle the issues of dealing with functions that have entaglemenst in the outer world, and the issues, of how to test that the correct arguments are invoked, and that the corrcet arguments are passed into the corresponding arguments?
// - You use "Jest mock functions"

// Q: What may occur when testing?
// - In testing functions may conatin inconvenient dependancies on other objects
// - In order to deal with such complications it is common to test such function by isolating the behavior of the function, its often desireable to replace the other objects with mocks that mocks that simulate the behaviour of the real objects
// - Mocking the object or "replacing" the object is especially useful if the real objects are impractial for testing purposes in a unit test

// Q: What is another use of "mocks"?
// - Another common use of "mock" objects is to use them as spies
// - Mocks are usefull to accomplish this task becasue they enable us to spy on the behaviour of a function that is called by some other code
// - Mocks are ideal for spying because they have great memory, mock functions keep track of calls to a particular function, as well as the parameters passed in those calls
// - It's optional but I could also chose to define an implementation for the mock, but its optional
// - Furthermore, simpler mocks that implement only enough behaviour to execute test code are sometimes called "stubs"
