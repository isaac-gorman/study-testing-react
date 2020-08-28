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

// Q: How does the example work in practice?
// - In the example above I am insterting a component named PhoneNumber
// - The first test is testing the component before the prop update, this test will fail and display an error message
// - Upon the second test when the user inputs their number, the (rerender) should pass
// - If I where to run this code in the console this is exactly what would happen

// ASSERT CONTENT IS NOT RENDERD

// Q: In some cases what do we want to make sure of?
// - In some cases you want I wan t to assert that my content is not rendering to the DOM
// - For example in a situation where a component should show up upon an onClick, or really anytime after a page reload
// - In fact React isn't built for "this" (What is this? What is actually happening?) as all "getBy" assertions return an error if they can't find the thing they are looking for (if a return is null)
// - But thankfully their is a work around, the assertion called queryByRoll or any queryBy assertion will return null instead of an error
// - This allows the engineer to query for something that isn't supposed to be on the DOM
// - Furthermore this allows us to use an assertion such ass "toBeNull()" or "toBeFalsy()", and then test will start passing even when no content is rendered.

test("entering an invalid value shows an error message", () => {
  // 1) Pull in testing properties, and add the rerender function
  // 2) Render the component with a prop
  const { getByLabelText, getByRole, queryByRole, rerender } = render(
    <PhoneNumber />
  );
  // 3) Test component
  const input = getByLabelText(/favorite number/i);
  expect(getByRole("alert")).toHaveTextContent(/the number is invalid/i);
  // 4) Test prop updates by rerendering the component with different props
  rerender(<PhoneNumber phoneNumber={"2025550113"} />);

  // 5) (optional) Assert that the error message is not being rendered
  expect(queryByRole("alert")).toBeNull();
});
