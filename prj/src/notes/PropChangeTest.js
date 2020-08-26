// Learning Objective:
// - Learn how to test React components as props change

// Q: What will I be learning in this section of the module?
// - In this section, I will learn how to test rendered DOM elements using the React Testing Library
// - Specifically I will focus on undersatnding how to test data being passed as props, along with the various props changes that can occur within the component

// Q: In some cases what should I do with props?
// - In the case that props updated it is important to conduct a secondary test on the same component
// - Based on just my previous knowladge of the React Testing Library conducting a secondary test would seem impossible, but there is a built in method called "rerender" that enables devs to seemlessly look at component with new props

// Q: In order to "do this" what do we need to add?
// - In order to conduct a secondary test after a component has updated, I need to use the "rerender" function

// Q: What is the example component doing?
// - The example component is called PhoneNumber, and its purpose is enables the user to upadate ity with their own phone number
// - I want to display an error message when the component is empty but pass the test once the once the user inputs a number between 0-10

// name test
test("Entering an invalid value shows an error message", () => {
  // pull in the testing properties - add rerender and debug
  const { getByLableText, getByRole, rerender } = render(<PhoneNumber />);
  const input = getByLableText(/favorite number/i);
  // update prop
  fireEvent.change(input, { target: { value: "2025550113" } });
  // test component
  expect(getByRole("alert")).toHaveTextContent(/the number is invalid/i);
  // test props update
  rerender(<PhoneNumber phoneNumber={"2025550113"} />);
});

// Q: How does the example work in real practice?
// - Well in p

// ASSERT CONTENT IS NOT RENDERD

// Q: In some cases what do we want to make sure of?

// Q:
