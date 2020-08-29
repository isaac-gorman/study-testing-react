// Learning Objective:
// - I will learn how to test async API calls that are made from within a component

// Q: What do most real world apps have to deal with?
// - In the real world I will be dealing with a lot of async operations
// - I will need to conduct a lot of test on async operations, though running test can be tricky
// - Buildin test to async code is tricky because I need to make sure the code has finshed executing and the application is stable before running the assertion

// Q: What kind of test is an async test?
// - Async test are test that don't complete immidietly
// - Async test have to wait for the operation of one or more async operations
// - Other test wont work as expected when dealing with async operations such as API calls

// Q: What are the helper functions that help you write test for async calls?
// - The "wait" function
// - The wait function will tell the test to wait for the async call to finish before continuing the assertions

// Q: What will I be using to make async API calls?
// - As used in the last test, I will also be using "jest.mock()" to make mocks of the async functions so I wont have to wait for the actual call to be made

// Q: What will I be going over in the following tutorial?
// - In the follow along I will run through an example using API data
// - Just like in the last two test I will need to:
// - - import components
// - - render function
// - - simulate and event
// - - run the test
// - the only difference compared to the non async test, is that I will need to write a few  more functions to make calls async
